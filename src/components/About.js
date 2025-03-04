import User from "./User";
import UserClass from "./UserClass";
import "../css/User.css";
const About = () => {
  return (
    <div>
      <h1>This is About Us Page</h1>
      <div className="user-container">
        <User name = {"Raju Shah (Function)"} location={"Kathmandu"} />
        <UserClass name = {"Raju Shah (Class)"} />
      </div>
    </div>
  );
};

export default About;
