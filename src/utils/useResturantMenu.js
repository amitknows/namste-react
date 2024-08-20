import React, { useEffect } from "react";
import { SWIGGY_API_URI } from "./constant";
import { useState } from "react";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        SWIGGY_API_URI + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching Menu", error);
    }
  };

  return resInfo;
};

export default useResturantMenu;
