import "../css/User.css";
import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 1,
        }
    }
    render() {
        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;
        return <div className="user-card">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>Contact: {contact}</h4>
            <h4>Count: {count}</h4>
            <h4>Count: {count2}</h4>
        </div>

    }
}

export default UserClass;

