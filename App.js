import React from "react";
import ReactDOM from "react-dom/client";

/*
 *Header:- -Logo -NavItem -Cart
 *Body:-  -Search_Bar -Food_Cards_Container :- RestroCard
 *Footer :- -CopyRight -Links - address -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={props.logo} alt={props.alt + "logo"} />
      <h3>{props.title}</h3>
      <h4>{props.cusine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.delivaryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestroCard
          title="Thakali"
          cusine="Nepali Khana"
          rating="9*"
          delivaryTime="30 min"
          logo="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
          alt="thakali"
        />
                <RestroCard
          title="Indian"
          cusine="Indian Khana"
          rating="9*"
          delivaryTime="30 min"
          logo="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
          alt="indian"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
