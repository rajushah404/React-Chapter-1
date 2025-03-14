import "../css/User.css";
import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 5,
    };
    console.log(this.props.name + "User Class Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Mounted");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;

    console.log(this.props.name + "User Body");
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: {contact}</h4>
        <h4>Count: {count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
