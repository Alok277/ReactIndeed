import React from "react";
import { RESLIST_URL } from "../utils/constants";
const  RestaurantList = (props) => {
   console.log(props)
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
      props.resName.info;
    const { deliveryTime } = props.resName.info.sla;
    console.log(props);
    return (
      <div className="res-card">
        <img
          className="res-img"
          src={
            RESLIST_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantList;