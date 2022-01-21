import React from "react";

// 다음에서 () 은 props 가 들어가는 자리다.
// const Try = (props) => {
// props (tryInfo) 역시 다음과 같이 구조분해해서 넣을 수 있다.
// class 에서: const {tryInfo} = this.props
const Try = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
};

export default Try;
