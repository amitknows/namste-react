import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Button from "./Button";

export const Body = () => {
  const onlineStatus = useOnlineStatus();

  const [resturant, setResturant] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurant data");
      }

      const json = await response.json();

      const resList =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setResturant(resList);
      setFilteredRes(resList);
    } catch (error) {
      console.error("Error while fetching", error);
    }
  }

  const topRatedRes = () => {
    const topRestaurants = filteredRes.filter(
      (res) => res.info.avgRating > 4.5
    );
    setResturant(topRestaurants);
  };

  const resetRestaurants = () => {
    setResturant(filteredRes);
  };

  if (!onlineStatus) {
    return (
      <h1>
        It looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  const handleSearch = () => {
    const filtered = filteredRes.filter((res) =>
      res.info.name.toLowerCase().includes(search.trim().toLowerCase())
    );
    setResturant(filtered.length ? filtered : filteredRes);
  };

  return resturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <Button
        className="bg-slate-700 rounded-lg p-2 text-white hover:bg-slate-600 m-2"
        onClick={resetRestaurants}
      >
        All Restaurants
      </Button>

      <Button
        className="bg-slate-700 rounded-lg p-2 text-white hover:bg-slate-600 m-2"
        onClick={topRatedRes}
      >
        Top Rated Restaurants
      </Button>

      <input
        className="p-1 m-1 text-md font-medium border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 w-35 h-10"
        type="text"
        placeholder="Search restaurants"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className="px-4 py-2 rounded-md m-1 font-semibold bg-pink-200 border border-transparent focus:ring-2 focus:ring-blue-500 hover:text-gray-600"
        onClick={handleSearch}
      >
        Search
      </Button>

      <div className="flex flex-wrap justify-center">
        {resturant.map((item) => (
          <Link key={item?.info.id} to={`/restaurants/${item.info.id}`}>
            <ResturantCard resName={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
