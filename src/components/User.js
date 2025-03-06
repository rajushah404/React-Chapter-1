import { useState } from "react";
import "../css/User.css";
const User = ({ name, location }) => {
    const [count] = useState(0);
    return <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: rajushah2286@gmail.com</h4>
        <h1>Count : {count}</h1>
    </div>
}

export default User;