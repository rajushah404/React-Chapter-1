import "../css/User.css";

import { useEffect, useState } from "react";

const UserClass = ({ name }) => {
  const [count, setCount] = useState(0);

  // API call inside Use Effect

  useEffect(() => {
    // API Call
    // Load Compont, After  its loading and fetch the details;
    // Render Comp -> make API call -> Fill the Data;

    const timer = setInterval(() => {
      console.log("namaste react OP");
    }, 1000);
    console.log("Use Effect");

    return () => {
      // while unmounting the component
      console.log("Return");
      clearInterval(timer);

      // return is Unmounting Phase ..
    };
  }, []);

  console.log("Render");

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h2>Name: {name}</h2>
      <h3>Location: Kathmandu</h3>
      <h4>Github: rajushah404</h4>
    </div>
  );
};

export default UserClass;

//if we dont use dependancy array in use effect it will be called after each render
//if we use it, it will only be called in initial render
// if we pass value on a dependancy, it will be rendered every time the value changes
//
