import React, { useContext, useEffect, useState } from "react";
import RestaurantList, { withPromotedRestaurant } from "./RestaurantList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const restaurantHandler = () => {
    console.log(restaurantList)
    const filteredRestaurantList = restaurantList.filter(
      (res) => res.info.avgRating >= 4.1
    );
    console.log(filteredRestaurantList.length);
    console.log(filteredRestaurantList)
    setFilteredRestaurant(filteredRestaurantList);
  };

  const { userLogin , setUserName } = useContext(UserContext);
  const PromotedRestaurant = withPromotedRestaurant(RestaurantList);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);
    const responseData = await data.json();
   
    setRestaurantList(
      responseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      responseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offine, Please check your internet</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search flex m-6 ">
        <div className="filter-restaurant flex gap-4 ">
          <input
            type="text"
            data-testid="searchInput"
            value={searchRestaurant}
            className="border border-solid border-black"
            onChange={(e) => setSearchRestaurant(e.target.value)}
          />
          <button
            onClick={() => {
              const searchResult = restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );
              setFilteredRestaurant(searchResult);
            }}
            className="px-4 bg-gray-200 rounded-xl"
          >
            Search
          </button>
        </div>
        <div className="ml-6 px-4 bg-gray-200 rounded-lg">
          <button className="filter-btn" onClick={restaurantHandler}>
            Top Rated Restaurants
          </button>
        </div>
        <div className="filter-restaurant flex gap-4 ">
          <label>UserName:</label>
          <input
            className="border border-solid border-black"
            value={userLogin}          
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
       
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurant resName={restaurant} />
            ) : (
              <RestaurantList resName={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
