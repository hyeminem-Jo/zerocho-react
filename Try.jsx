// import React, { memo } from "react";
// // 다음에서 () 은 props 가 들어가는 자리다.
// // const Try = (props) => {
// // props (tryInfo) 역시 다음과 같이 구조분해해서 넣을 수 있다.
// // class 에서: const {tryInfo} = this.props
// const Try = memo(({ tryInfo }) => {
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </li>
//   );
// });

// export default Try;

// class 의 경우
import React, { PureComponent } from "react";

class Try extends PureComponent {
  // class 에선 state 에서 바로 props 를 state 로 만들어준다.
  // 원래 constructor 는 작성하지 않아도 되는데, 사용할 때가 이떄다.
  // constructor 함수 안에 다른 기능들을 넣어 동작시킬 수 있다.
  constructor(props) {
    super(props);
    // 정밀한, 다른 동작
    const filtered = this.props.filter(() => {});
    this.state = {
      result: filtered, // ex) 필터링 된 것을 state 값으로  넣어줄 수 있다.
      try: this.props.try,
    }
  } 

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
