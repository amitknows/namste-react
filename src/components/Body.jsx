import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [res, setRes] = useState([]);

  const topRatedRes = () => {
    let filteredList = res.filter((res) => res.info.avgRating > 4);
    setRes(filteredList);
  };

  useEffect(() => {
    fetchData(); // its called after the component rendered
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining ?
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRes(resList);
  }

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button className="filter-btn" onClick={topRatedRes}>
        Top Rated Resturants
      </button>
      <div className="res-container">
        {res.map((items, index) => (
          <ResturantCard key={index} resName={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
