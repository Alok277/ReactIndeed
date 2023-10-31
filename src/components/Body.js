import React, { useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const restaurantHandler = () => {
    const filteredRestaurants = restaurantList.filter(
      (res) => res.info.avgRating > 4.0
    );
    setRestaurantList(filteredRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6332031&lng=77.4315663&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const responseData = await data.json();
    console.log(
      responseData.data.cards[5].card.card.gridElements.infoWithStyle
        .restaurants
    );
    //Optional chaining
    setRestaurantList(
      responseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      responseData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="filter-restaurant">
          <input
            type="text"
            value={searchRestaurant}
            className="input-restaurant"
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
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={restaurantHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {console.log(restaurantList)}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantList resName={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
