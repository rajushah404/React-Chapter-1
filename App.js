import React from "react";
import ReactDOM from "react-dom/client";

// function Footer() {
//   return (
//     <footer style={{ color: "green", fontSize: 30 }}>This is Footer </footer>
//   );
// }

// const Component = ({ children }) => <h3>{children}</h3>;
// const HeadingComponent = () => {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//       <Component>This is name </Component>
//       {Component({ children: "inside" })}
//       <h1 className="heading">Hello React Functional Componants</h1>
//       <Footer />
//     </div>
//   );
// };

const nestedElement = React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "heading 1"),
  React.createElement("h1", {}, "Heading 2"),
  React.createElement("h3", {}, "heading 3")
);


const Header = () => {
  return (
    <header style={styles.header}>
      <img src="logo.png" alt="Logo" style={styles.logo} />
      <input type="text" placeholder="Search..." style={styles.search} />
      <img src="user-icon.png" alt="User" style={styles.userIcon} />
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
  },
  logo: { width: "50px" },
  search: { padding: "5px", width: "200px" },
  userIcon: { width: "40px", borderRadius: "50%" },
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);

//HTML code will replace by heading
// Js Engine unsernstand ECMAscript

//Cross Side Scripting :-
//JSX takes care of Injection attacks;
//when ever the code is in {} the JSX will sanitize the data ;

// The Component should start with capital letter
