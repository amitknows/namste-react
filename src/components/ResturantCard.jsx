import React from "react";
import { CDN_URL } from "../utils/constant";
const ResturantCard = ({ resName }) => {


//  console.log("resCard", resName.info);

  const cloudinary_url = CDN_URL;
  


  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resName.info;

  return (
    <>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="card-image" src={cloudinary_url + cloudinaryImageId} />
        <h3> {name ?? "XYZ Res"}</h3>
        <h4> {cuisines.join(",")} </h4>
        <h4> {avgRating} Stars</h4>
        <h4> {costForTwo} </h4>
        <h4> {sla.deliveryTime} Minutes </h4>
      </div>
    </>
  );
};

export default ResturantCard;
