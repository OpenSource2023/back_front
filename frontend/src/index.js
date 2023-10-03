import React from "react";
import ReactDOM from "react-dom";
import { WrappedApp } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(React.StrictMode, null, React.createElement(WrappedApp, null))
);
