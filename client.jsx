import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import NumberBaseball from './NumberBaseball'; // 상대경로
// import NumberBaseball from "./RenderTest";

const Hot = hot(NumberBaseball);

ReactDOM.render(<Hot />, document.querySelector("#root"));
// ReactDOM.render(<React.StrictMode><NumberBaseball /></React.StrictMode>,document.querySelector("#root"));
