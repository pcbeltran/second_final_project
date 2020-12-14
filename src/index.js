import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { breedsCollection } from "./data/firebase";
import loadSampleData from "./data/load-sample-data";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<h1>hello</h1>, document.getElementById("root"));

//loadSampleData();

console.log(process.env);
