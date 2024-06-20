import React from "react";
import ReactDOM from "react-dom/client";

const style = {
  backgroundColor: "#f0f0f0",
};

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

const ResturantCard = ({resName}) => {
  console.log(resName)
  return (
    <>
{resName.map((items)=>(
    <div key={items.id} className="res-card" style={style}>
    <img
      className="card-image"
     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.cloudinaryImageId}`}
    />
    <h3> {items?.name??"XYZ Resturant"}</h3>
    <h4> {items?.cuisines.join(",")} </h4>
    <h4> {items?.avgRating} Stars</h4>
    <h4> {items?.costForTwo} </h4>
    <h4> {items?.sla.deliveryTime} Minutes </h4>
  </div>
))}
    
  
    </>
  );
};

const Body = () => {
  const data =[
    
      {
        "id": "695596",
        "name": null,
        "cloudinaryImageId": "cc84d172c8acb034e61ffaeb2d2557e3",
        "locality": "Shree Raj Complex",
        "areaName": "Srikrishnapuri",
        "costForTwo": "₹299 for two",
        "cuisines": [
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "392350",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 49,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 23:59:00",
          "opened": true
        },
       
        "isOpen": true,
        "type": "F",
       
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
       
        
      },
    
      
  
       {
        "id": "88779",
        "name": "Dosa Plaza (Pure Veg)",
        "cloudinaryImageId": "knmjxpweybgksjfvoulq",
        "locality": "Mithapur",
        "areaName": "Biscomaun Bhawan",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4,
        "parentId": "8016",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 23:59:00",
          "opened": true
        },
     
        "isOpen": true,
        "type": "F",
       
        
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
      
        
      },
     
    
      {
        "id": "411673",
        "name": "Hotel Anand Sagar",
        "cloudinaryImageId": "umlluzualet7ewvbbwqs",
        "locality": "Bankman Colony",
        "areaName": "Kankarbagh",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "247071",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 70,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "65-70 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-20 23:00:00",
          "opened": true
        },
    
        "isOpen": true,
        "type": "F",
       
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "discountTag": "FLAT DEAL"
        },
   
       
      },
    
    
    
      {
        "id": "328777",
        "name": "Govinda Dhaba",
        "cloudinaryImageId": "0e8256e8ee857290d64d27ee38729e60",
        "locality": "Budh Vihar",
        "areaName": "Srikrishnapuri",
        "costForTwo": "₹320 for two",
        "cuisines": [
          "Thalis",
          "North Indian"
        ],
        "avgRating": 3.9,
        "parentId": "89405",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-21 00:00:00",
          "opened": true
        },
       
        "isOpen": true,
        "type": "F",
     
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
      
      
      },
    
    
  ]
  
  
return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resName={data}/>
       
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
