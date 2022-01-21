import React, { useState } from "react";
import Try from "./Try";

// 숫자 4개를 겹치지 않게 랜덤하게 뽑는 함수
function getNumbers() {
  // map() 을 이용
  const candidate = Array(9)
    .fill()
    .map((v, i) => i + 1);
  const array = Array(4)
    .fill()
    .map((v, i) => {
      return (v = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0]);
    });

  console.log(array);
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      // 홈런일 때
      setResult(`홈런!! 정답: ${result}`);
      // 옛날 state 를 다룰 땐 함수형 setState()
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런" }];
        // 리액트에서 이전, 현재 state 는 서로 달라야 하기 때문에 요소를 추가할 땐  기존의 배열에서 push 하는 것이 아닌, state 가 다르도록 아예 다른 배열 하나를 복사해야 한다. (전개연산자, [...array])
      });
      alert("게임을 다시 시작합니다.");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      // 답이 틀렸을 때
      const answerArray = value.split("").map((v) => {
        return parseInt(v);
      });
      // 1. 유저가 낸 value 값(ex. "1234")
      // 2. 배열(ex. ["1", "2", "3", "4"])로 반환
      // 3. 숫자로 반환(ex. [1, 2, 3, 4])
      let strike = 0;
      let ball = 0;
      // 10번 틀렸을 때 실패 (9번째 시도를 한 이후의 상태에서 틀릴 때)
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")} 였습니다!`);
        alert("게임을 다시 시작합니다");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        // 10번 미만으로 틀렸을 때
        for (let i = 0; i < 4; i++) {
          // strike 일 때
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike}스트라이크 ${ball}볼 입니다` }
          ];
        });
        setValue("");
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
      </form>
      <div>시도: {tries.length}번째 시도 </div>
      <ul>
        {tries.map((v, i) => {
          return (
          <Try key={`${i + 1} 차 시도: `} tryInfo={v} />
          );
        })}
      </ul>
    </>
  );
};

// props 를 활용하다 보면 문제가 많이 발생하는데, 그 중 렌더링이 자주 일어나 성능이 떨어지는 문제가 가장 빈도가 많다.
// 현재 tries 란 state 가 

export default NumberBaseball;

