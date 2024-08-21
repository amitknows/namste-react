import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { Link} from "react-router-dom";

export const Body = () => {
  const onlineStatus = useOnlineStatus();

  const [res, setRes] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

 
 
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

    setRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(res);
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
 

  const topRatedRes = () => {
    let filteredList = res.filter((res) => res.info.avgRating > 4);
    setRes(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Its look like you are offline. Please Check your internet connection
      </h1>
    );
  }

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <button
        className="bg-slate-700 rounded-lg p-2 text-white hover:bg-slate-600 m-2"
        onClick={topRatedRes}
      >
        Top Rated Resturants
      </button>
      <input
        className="p-1 m-1 text-md font-medium border border-gray-300 rounded-md bg-gray-100  focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 w-35 h-10"
        type="text"
        placeholder="search resturants"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="px-4 py-2 rounded-md m-1 font-semibold bg-pink-200 border border-transparent focus:ring-2 focus:ring-blue-500 hover:text-gray-600 "
        onClick={() => {
          const filterRes = res.filter((res) =>
            res.info.name.toLowerCase().includes(search.trim().toLowerCase())
          );

          filterRes.length ? setFilteredRes(filterRes) : "";
        }}
      >
        Search
      </button>
      <div className="flex flex-wrap justify-center">
        {res.map((items) => (
          <Link key={items?.info.id} to={"/resturants/" + items.info.id}>
            {" "}
            <ResturantCard resName={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
