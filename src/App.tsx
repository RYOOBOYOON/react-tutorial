import React, { useRef, useReducer, useMemo, useCallback } from "react";
import produce from "immer";

import Hello from "./props";
import Wrapper from "./frame";
import "./App.css";
import Counter from "./useState";
import InputSample from "./InputStatus";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";

//componentDidCatch로 에러 잡아내기 Sentry 연동
import User from "./User";

function countActiveUsers(users: any) {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user: any) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    // return {
    //   users: state.users.concat(action.user),
    // };
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user: any) => user.id === action.id);
        user.active = !user.active;
      });
    // return {
    //   ...state,
    //   users: state.users.map((user: any) =>
    //     user.id === action.id ? { ...user, active: !user.active } : user
    //   ),
    // };
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex(
          (user: any) => user.id === action.id
        );
        draft.users.splice(index, 1);
      });
    // return {
    //   users: state.users.filter((user: any) => user.id !== action.id),
    // };
    default:
      return state;
  }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);
  const count = useMemo(() => countActiveUsers(users), [users]);

  const user = {
    id: 1,
    username: "velopert",
  };

  return (
    <Wrapper>
      <Hello name="잘안돼..." color="aqua" background="black" isSpecial />
      <div className="gray-box">App.css 적용</div>
      <Counter />
      <InputSample />
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} />
      </UserDispatch.Provider>
      <br></br>
      <h2>useMemo 적용</h2>
      <div>활성 사용자 수: {count}</div>
      <User user={user} />
    </Wrapper>
  );
}

export default App;
