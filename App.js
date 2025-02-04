const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am React"),
    React.createElement("h2", {}, "I am React H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am React"),
    React.createElement("h2", {}, "I am React H2"),
  ]),
]);

console.log(parent);

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);