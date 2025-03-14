import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <NavLink to="/" className="nav-link">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
      </NavLink>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </li>
          <button
            className="login-btn"
            onClick={() => setLogin(login === "Login" ? "Logout" : "Login")}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
