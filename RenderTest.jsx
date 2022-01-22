// RenderTest.jsx

import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    count: 0, // 가능
    string: 'hello', // 가능
    boolean: true, //  가능
    object: {}, // 불가
    array: [], // 불가
  }

  // PureComponent: state 들이 바뀌었는지에 대한 여부를 판별해준다.
  // 하지만 PureComponent 의 단점은 state 가 배열[] 이나 객체{} 와 같이 복잡한 구성으로 이루어져있을 경우, 참조 관계가 있는 구조가 생기면 바뀜의 여부를 판단하기 어렵다.

  click = () => {
    // const array = this.state.array;
    // array.push(1);
    this.setState({
      array: [...this.state.array, 1], // => 리렌더링 안됨 
      // 이전의 state 배열을 복사해 넣음 (push (x)) 
      // Component 를 포함해 PureComponent 역시 새 객체나 배열로 복사해주어야함
    });
  };

  render() {
    console.log("랜더링", this.state);
    return (
      <div>
        <button onClick={this.click}>클릭</button>
      </div>
    );
  }
}

export default Test;
