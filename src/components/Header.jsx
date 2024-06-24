import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // const [login, setLogin] = useState();

  const handleLogin = () => {};

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="btn"
              onClick={() => {
                if (!toggle) {
                  setToggle(true);
                } else {
                  setToggle(false);
                }
              }}
            >
              {toggle ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
