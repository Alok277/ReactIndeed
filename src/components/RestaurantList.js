import React, { useContext } from "react";
import { RESLIST_URL } from "../utils/constants";
import mockData from "./mocks/resMocksData.json";

const RestaurantList = (props) => {
  // const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
  //   props?.resName?.info || {};
  // const { deliveryTime } = props?.resName?.info?.sla;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
  props?.resName?.info || {};
const { deliveryTime } = props?.resName?.info?.sla || {};
 
  return (
    <div data-testid="resCard" className="res-card  m-4 w-[200px] h-[350px] bg-gray-200 hover:bg-gray-400 rounded-lg">
      <img
        className="rounded-lg h-32 w-full"
        src={RESLIST_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-3 text-lg" data-testid="restaurant-name">{ name}</h2>
      <h4 className="text-emerald-500">{avgRating} stars</h4>

      <h4>{deliveryTime} mins</h4>

      <h4>{cuisines && cuisines.join(", ")}</h4>
      <h4>{costForTwo} </h4>
    </div>
  );
};

export const withPromotedRestaurant = (RestaurantList) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white ml-2 p-2 text-sm rounded-xl">
          Promoted
        </label>
        <RestaurantList {...props} />
      </div>
    );
  };
};
export default RestaurantList;
