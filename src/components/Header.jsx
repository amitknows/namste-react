import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState("Login");

 

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Us</Link></li>
          <li><Link to={'/contact-us'}>Contact Us</Link></li>
          <li><Link to={''}>Cart</Link></li>
         
          <li>
            <button
              className="btn"
              onClick={() => {
                toggle === "Login" ? setToggle("Logout") : setToggle("Login");
              }}
            >
              {toggle}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
