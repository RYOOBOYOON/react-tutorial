import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({
  user,
}: {
  user: { id: number; username: string; email: string; active: boolean };
}) {
    const dispatch = useContext(UserDispatch);
    
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({
  users,
}: {
  users: { id: number; username: string; email: string; active: boolean }[];
}) {
  return (
    <div>
      <br></br>
      <h2>LIST 렌더링하기 [useCallback 적용]</h2>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
