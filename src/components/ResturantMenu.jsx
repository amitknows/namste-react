import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

function ResturantMenu() {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const resData = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=" +
          resId +
          "&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await resData.json();
      setResInfo(json?.data?.cards[2]?.card?.card?.info);
      setMenu(
        json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card
      );
      // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[1].itemCards);
    } catch (error) {
      console.error("Error fetching Menu", error);
    }
  };

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  if (!resInfo && !menu) return <Shimmer />;

  return (
    <>
      <h1>{resInfo?.name} </h1>
      <h2>{resInfo?.cuisines.join(", ")}</h2>
      <ul>
        {/* {menu?.map((items) => (
          <li key={items?.card?.info?.id}>{items?.card?.info?.name}</li>
        ))} */}
        <li>Matar Paneer</li>
        <li>Fried Rice</li>
        <li>Rasgulla</li>
        <li>Chaat</li>
      </ul>
    </>
  );
}

export default ResturantMenu;
