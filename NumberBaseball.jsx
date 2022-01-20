import React, { Component } from "react";
import Try from "./Try";

// 숫자 4개를 겹치지 않게 랜덤하게 뽑는 함수
function getNumbers() {
  // map() 을 이용
  const candidate = Array(9).fill().map((v, i) => i + 1 );
  const array = Array(4).fill().map((v, i) => {
    return v = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]
  })

  console.log(array);
  return array;

  // forEach() 를 이용
  // const array = [];
  // for (let i = 0; i < 4; i++) {
  //   const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  //   array.push(chosen);
  // }
}


class NumberBaseball extends Component {
  // 바뀌는 값
  state = {
      result: "",
      value: "",
      answer: getNumbers(),
      tries: [],
    };
  
  onSubmitForm = (e) => {
    e.preventDefault();
    // if (this.state.value === this.state.answer.join('')) {

    // } else {

    // }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  fruits = [
    { fruit: "apple", taste: "맛있다" },
    { fruit: "banana", taste: "달다" },
    { fruit: "grape", taste: "시다" },
    { fruit: "kiwi", taste: "새큼하다" },
    { fruit: "orange", taste: "떫다" },
    { fruit: "apple", taste: "맛없다" },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            maxLength={4}
            type="number"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          {/* or => <input defaultValue={this.state.value} /> */}
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((item, i) => {
            return (
              <Try key={item.fruit + item.taste} item={item} index={i} /> 
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
