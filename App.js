import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Worls"),
    React.createElement("h2", {}, "Hey"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h2", {}, "Love React"),
  ]),
]);

console.log(parent);

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);