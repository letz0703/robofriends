import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Hello from "./Hello";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Hello greeting={"Hello" + "React Ninja"} />);
reportWebVitals();
