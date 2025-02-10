import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React.createElement creats an object when we render this element
// into DOM it becomes the HTML element

const heading = React.createElement("h1", { id: "heading" }, "Hello React");

//JSX is a javaScript syntax, which is similar to HTML it is HTML like Syntax
const jsxHeading = <h1 id="heading">Hello React Using JSX</h1>;
// JSX is  a valid javaScript but not a pure JavaScript Code
// JSX is transmitted to JS Script by Bundelers to make it Run.

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//HTML code will replace by heading
// Js Engine unsernstand ECMAscript