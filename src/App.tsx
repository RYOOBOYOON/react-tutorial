import React from "react";
import Hello from "./props";
import Wrapper from "./frame";
import "./App.css";
import Counter from "./useState";
import InputSample from "./InputStatus";

function App() {
  return (
    <Wrapper>
      <Hello name="app.tsx" color="aqua" background="black" isSpecial />
      <Hello />
      <div className="gray-box">App.css 적용</div>
      <Counter />
      <InputSample />
    </Wrapper>
  );
}

export default App;
