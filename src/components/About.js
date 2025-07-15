import User from "./User";
import "../css/User.css";
import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is React Practice</h2>
        {/* <User name={"First"} /> */}
        <UserClass name={"First"}/>
      </div>
    );
  }
}

export default About;
