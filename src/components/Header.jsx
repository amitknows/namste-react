import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [toggle, setToggle] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border bg-pink-200 shadow-lg ">
      <div className="logo-container pl-8">
        <img className="h-28 w-28" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex m-4 p-4 space-x-4 ">
          <li className="p-2 ">{onlineStatus ? "👽" : "☠️"}</li>
          <li className="p-2   hover:bg-blue-500 hover:text-white rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2 hover:bg-blue-500 hover:text-white rounded-lg ">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-2 hover:bg-blue-500 hover:text-white rounded-lg">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
          <li className="p-2 hover:bg-blue-500 hover:text-white rounded-lg">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="p-2 hover:bg-blue-500 hover:text-white rounded-lg">
            <Link to={""}>Cart</Link>
          </li>

          <li className="p-2 hover:bg-blue-500 hover:text-white rounded-lg">
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
