import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = ({ resName }) => {

  const cloudinary_url = CDN_URL;
  const style = {
    backgroundColor: "#f0f0f0",
  };
  console.log(resName);
  return (
    <>
      {resName.map((items) => (
        <div key={items.id} className="res-card" style={style}>
          <img
            className="card-image"
            src={`${cloudinary_url}${items.cloudinaryImageId}`}
          />
          <h3> {items?.name ?? "XYZ Resturant"}</h3>
          <h4> {items?.cuisines.join(",")} </h4>
          <h4> {items?.avgRating} Stars</h4>
          <h4> {items?.costForTwo} </h4>
          <h4> {items?.sla.deliveryTime} Minutes </h4>
        </div>
      ))}
    </>
  );
};

export default ResturantCard;
