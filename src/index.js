import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
console.log("Check API Key", process.env.REACT_APP_API_KEY);

ReactDOM.render(<App />, document.getElementById("root"));
