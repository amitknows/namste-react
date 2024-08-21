import React from "react";
import { CDN_URL } from "../utils/constant";
const ResturantCard = ({ resName }) => {


//  console.log("resCard", resName.info);

  const cloudinary_url = CDN_URL;
  


  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resName.info;

  return (
    <>
      <div className="m-4 p-4 w-[300px] h-96 rounded-md shadow-xl transform transition-transform duration-300 hover:scale-105 " style={{ backgroundColor: "#f0f0f0" }}>
        <img className="w-72 h-56 rounded-t-lg" src={cloudinary_url + cloudinaryImageId} />
        <h3 className="font-bold"> {name ?? "XYZ Res"}</h3>
        <h4 className=""> {cuisines.join(", ")} </h4>
        <h4> {avgRating} Stars</h4>
        <h4> {costForTwo} </h4>
        <h4> {sla.deliveryTime} Minutes </h4>
      </div>
    </>
  );
};

export default ResturantCard;
