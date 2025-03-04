import "../css/User.css";
const User = ({name,location}) => {
    return <div className="user-card">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: rajushah2286@gmail.com</h4>
    </div>
}

export default User;