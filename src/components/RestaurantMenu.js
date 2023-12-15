import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(false);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
    id,
    cuisines,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info || {};
  console.log(
    name,
    avgRating,
    costForTwoMessage,
    cloudinaryImageId,
    id,
    cuisines
  );
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold py-4 text-2xl ">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <ul>
        {category.map((cat, index) => {
          return (
            <RestaurantCategory
              data={cat?.card?.card}
              showItems={index === showIndex && showItem}
              setShowIndex={() => setShowIndex(index)}
              setShowItem={() => setShowItem(!showItem)}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
