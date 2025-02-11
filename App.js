import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// React.createElement creats an object when we render this element
// into DOM it becomes the HTML element

const heading = React.createElement("h1", { id: "heading" }, "Hello React");

//JSX is a javaScript syntax, which is similar to HTML it is HTML like Syntax
const jsxHeading = <h1 className="head">Hello React Using JSX</h1>;
// JSX is  a valid javaScript but not a pure JavaScript Code
// JSX is transmitted to JS Script by Bundelers to make it Run.
// Babel jobs is to Transpile the JSX to JS Script Code
// JSX => React.createElement => JS Object => HTML Element

// React Components
//Classed Based Components - OLD Way
//Functional Componants - New Way

// we can render functional components just by putting the function on <Functional Component/>
const Title = () => {
  return <h1>Title Component</h1>;
};


//It is also a componant composition  (passing one Component to another )
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1 className="heading">Hello React Functional Componants</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

//HTML code will replace by heading
// Js Engine unsernstand ECMAscript
