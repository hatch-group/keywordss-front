import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./View";

const view = React.createElement(Hello);
ReactDOM.render(view, document.getElementById("root"));
