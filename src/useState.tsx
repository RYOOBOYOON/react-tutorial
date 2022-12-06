import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
    //   setNumber(prevNumber => prevNumber + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
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

export default Counter;
