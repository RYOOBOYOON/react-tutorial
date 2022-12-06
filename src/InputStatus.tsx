import React, { useState, useRef } from "react";

function InputSample() {
  const [text, setText] = useState("");
  const [inputs, setinputs] = useState({ name: "", nickname: "" });

  const nameInput = useRef<HTMLInputElement>(null);
  const { name, nickname } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setinputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setText("");
  };

  const onReset1 = () => {
    setinputs({
      name: "",
      nickname: "",
    });
    if (nameInput.current) {
      nameInput.current.focus();
    }
  };

  return (
    <div>
      <br></br>
      <h2>input 상태 관리하기</h2>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text} </b>
      </div>
      <br></br>
      <h2>여러개의 input 상태 관리하기 [useRef 적용]</h2>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange1}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange1}
        value={nickname}
      />
      <button onClick={onReset1}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
