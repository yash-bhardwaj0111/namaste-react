import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantsList from "../utils/mockData";

const Body = () => {
  //Local State Variable ---in React  --> Super powerful Variable -->for this we use HOOKs  => (k/a use state)
  const [ListOfRestaurants , setListOfRestaurant] = useState(restaurantsList);

  //Normal JS Variable
  let ListOfRestaurantsJS = [
    {
      info: {
        id: "623059",
        name: "Varalakshmi Tiffins",
        cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 3.3,
        deliveryTime: 31,
      },
    },
    {
      info: {
        id: "623159",
        name: "Zero Degree",
        cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 4.5,
        deliveryTime: 31,
      },
    },
    {
      info: {
        id: "623259",
        name: "LA-Chef",
        cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 4.2,
        deliveryTime: 31,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {

            // Filter logic so that onclick of this i get only Zero Degree Restaurant
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
