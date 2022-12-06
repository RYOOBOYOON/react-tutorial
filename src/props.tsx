import React from "react";

function Hello(props: {
  name: string;
  color: string;
  background: string;
  isSpecial: boolean;
}) {
  const style = {
    backgroundColor: props.background,
    color: props.color,
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };
  return (
    <div>
      <h2>props 값 전달</h2>
      <div style={style}>
        {props.isSpecial && <b style={{ color: "#fff" }}>조건부 렌더링 </b>}
        {/* {props.isSpecial ? <b>*</b>} : null */}
        {props.name}
      </div>
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
  color: "greenyellow",
  background: "green",
  isSpecial: false,
};

export default Hello;
