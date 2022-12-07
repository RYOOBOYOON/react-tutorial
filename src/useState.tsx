import React, { useReducer } from "react";
// import React, { useState } from 'react';

function reducer(state: any, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  // const [number, setNumber] = useState(0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
    //   setNumber(prevNumber => prevNumber + 1);
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
    //   setNumber(prevNumber => prevNumber - 1);
  };

  return (
    <div>
      <br></br>
      <h1>{number} ←useState 상태 관리 </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default React.memo(Counter);
