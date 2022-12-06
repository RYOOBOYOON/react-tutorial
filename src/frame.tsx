import React from "react";

function Wrapper({ children }: { children: React.ReactNode }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return (
    <div>
      <h2>props.children</h2>
      <div style={style}>{children}</div>
    </div>
  );
}

export default Wrapper;
