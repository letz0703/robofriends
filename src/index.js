import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import CardList from "./CardList";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList robots={robots} />);
reportWebVitals();
