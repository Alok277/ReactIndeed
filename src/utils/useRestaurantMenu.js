import React from "react";
import { useEffect,useState } from "react";
import { REST_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        dataFetch();
    },[])
    const dataFetch=async()=>{
     const data=await fetch(REST_MENU+ resId);
     const json=await data.json();
     setResInfo(json.data)
    }

  return resInfo;
};

export default useRestaurantMenu;
