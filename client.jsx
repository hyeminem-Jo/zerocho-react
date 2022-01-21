import React from"react";
import ReactDOM from "react-dom";

import NumberBaseball from './NumberBaseball'; // 상대경로

ReactDOM.render(
  <React.StrictMode>
    <NumberBaseball />
  </React.StrictMode>,
  document.querySelector('#root')
);
