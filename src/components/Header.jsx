import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [toggle, setToggle] = useState("Login");
const onlineStatus = useOnlineStatus()
 

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus?'👽':'☠️'}</li>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About Us</Link></li>
          <li><Link to={'/contact-us'}>Contact Us</Link></li>
          <li><Link to={'/grocery'}>Grocery</Link></li>
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
