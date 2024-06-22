import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";

export const Body = () => {
  // let resList = data;

  // console.log("intial data resList: ", resList);
  const [res, setRes] = useState(data);
  console.log("res :", res);
  const topRatedRes = () => {
   let  filteredList = res.filter((res) => res.avgRating > 4);
    setRes(filteredList);
  };


useEffect(()=>{
  console.log("useEffect Called") // its called after the component rendered
},[])




  return (
    <div className="body">
      <button className="filter-btn" onClick={topRatedRes}>
        Top Rated Resturants
      </button>
      <div className="res-container">
        {res.map((items) => (
          <ResturantCard key={items.id} resName={items} />
        ))}
      </div>
    </div>
  );
};

export default Body;
