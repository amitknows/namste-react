import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

function ResturantMenu() {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo.cards[2].card.card.info;
  const  {itemCards}  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      
  console.log(
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      
  );

  return (
    <>
      <h1>{name} </h1>
      <h2>{cuisines.join(", ")}</h2>

      <h2>Menu</h2>
      <ul>

        
        {itemCards?.map((items) => (
          <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
        ))}
        <li>Matar Paneer</li>
        <li>Fried Rice</li>
        <li>Rasgulla</li>
        <li>Chaat</li>
      </ul>
    </>
  );
}

export default ResturantMenu;
