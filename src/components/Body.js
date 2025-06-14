import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObjList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            //filter Logic here - Reconcilation algo (React fiber) - Virtual dom is representation of actual dom. - Diff Algo
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRatingString > 4)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restContainer">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
