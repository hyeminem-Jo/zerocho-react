const React = require("react");
const { useState, useRef } = require("react");

const WordRelay = () => {
  const [word, setWord] = useState("조혜진");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      // this.setState({
      //   result: "딩동댕",
      //   word: value,
      //   value: "",
      // });
      inputRef.current.focus();
      // inputRef.focus();
    } else {
      setResult('땡');
      setValue('')
      // this.setState({
      //   result: "땡",
      //   value: "",
      // });
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요</label>
        <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          value={value}
          type="text"
          onChange={onChangeInput}
        />
        <button type="submit">입력</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = WordRelay;
