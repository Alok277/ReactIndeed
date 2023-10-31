import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6332031&lng=77.4315663&restaurantId=441312&catalog_qa=un"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  console.log(resInfo);
  useEffect(() => {
    fetchMenu();
  }, []); 
 
  const { name, avgRating, costForTwoMessage, cloudinaryImageId, id ,cuisines,deliveryTime} =
  resInfo?.cards[0]?.card?.card?.info || {};
  
  console.log(name)
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{ name}</h1>
      <h2>{avgRating}</h2>
      <p>{deliveryTime}</p>
      <p>{cuisines}- {costForTwoMessage}</p>
      <p>Menu</p>
      <ul>
        <li>{ cloudinaryImageId}</li>
        <li>{id}</li>       
       
      </ul>
    </div>
  );
};
export default RestaurantMenu;
