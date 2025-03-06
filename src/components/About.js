import User from "./User";
import UserClass from "./UserClass";
import "../css/User.css";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent Mounted");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>This is About Us Page</h1>
        <div className="user-container">
          <UserClass
            name={"Raju Shah (Class)"}
            location={"KTM"}
            contact={"rajushah2286@gmail.com"}
          />
        </div>
      </div>
    );
  }
}

export default About;
