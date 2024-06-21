import React from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";

const Body = () => {
  const resList = data;

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resName={resList} />
      </div>
    </div>
  );
};

export default Body;
