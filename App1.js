import React from "react";
import ReactDOM from "react-dom/client";

const style = {
  backgroundColor: "#f0f0f0",
};

/********************************------------HEADER----------******************************/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
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

/********************************------------RESTURANT CARD----------******************************/

const ResturantCard = ({ resName }) => {
  console.log(resName);
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resName;
  //   console.log(sla.deliveryTime)
  return (
    <>
      <div className="res-card" style={style}>
        <img
          className="card-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <h3> {name ?? "XYZ Res"}</h3>
        <h4> {cuisines.join(",")} </h4>
        <h4> {avgRating} Stars</h4>
        <h4> {costForTwo} </h4>
        <h4> {sla.deliveryTime} Minutes </h4>
      </div>
    </>
  );
};

/********************************------------BODY----------******************************/

  

/*********************-------------------------APP LAYOUT--------------------------*******************************/

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
