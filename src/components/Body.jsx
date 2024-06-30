import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import { Link} from "react-router-dom";

export const Body = () => {
  const [res, setRes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  const topRatedRes = () => {
    let filteredList = res.filter((res) => res.info.avgRating > 4.5);
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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRes( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(res)
    setFilteredRes( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button className="filter-btn" onClick={topRatedRes}>
        Top Rated Resturants
      </button>
      <input
        type="text"
        placeholder="search resturants"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const filterRes = res.filter((res) =>
            res.info.name.toLowerCase().includes(search.trim().toLowerCase())
          );

          filterRes.length ? setFilteredRes(filterRes) : "";
        }}
      >
        Search
      </button>
      <div className="res-container">
        {filteredRes.map((items) => (
          <Link key={items?.info.id} to={"/resturants/"+ items.info.id }>
            {" "}
            <ResturantCard  resName={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
