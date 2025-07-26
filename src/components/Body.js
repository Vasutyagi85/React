
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

  // State Variable-Super powerful variable
  const [listOfRestaurants,setListOfRestaurants]=useState(resList);

  //Normal variable 
//   let listOfRestaurants = [
//   {
//     info: {
//       id: "962274",
//       name: "Pizza Hut",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a4e5ea9f-97cd-4ee0-9b10-6161b04c4658_962275.JPG",
//       locality: "Sector Knowledge Park-2",
//       areaName: "Greater Noida",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 3.8,
//       parentId: "721",
//       avgRatingString: "4.3",
//       totalRatingsString: "403",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 1.9,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "1.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//     },
//   },
//   {
//     info: {
//       id: "962275",
//       name: "Dominoz",
//       cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a4e5ea9f-97cd-4ee0-9b10-6161b04c4658_962275.JPG",
//       locality: "Sector Knowledge Park-2",
//       areaName: "Greater Noida",
//       costForTwo: "₹350 for two",
//       cuisines: ["Pizzas"],
//       avgRating: 4.5,
//       parentId: "721",
//       avgRatingString: "4.3",
//       totalRatingsString: "403",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 1.9,
//         serviceability: "SERVICEABLE",
//         slaString: "25-30 mins",
//         lastMileTravelString: "1.9 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//     },
//   }
// ];

  return (
    <div className="body">
      <div className="filter">
       <button className="filter-btn" onClick={()=>{
        //filter logic here
        const filtered=listOfRestaurants.filter(
            (res)=>res.info.avgRating>4
        )
        setListOfRestaurants(filtered);
       }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant)=>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))}
        
      </div>
    </div>
  );
};

export default Body;


 {/* restaurant card
        <RestaurantCard 
        // resName="Meghana Foods" 
        // cuisine="Biryani, Asian"
        resData={resList[0]}
        /> */}
        {/* <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/>
        <RestaurantCard resData={resList[4]}/>
        <RestaurantCard resData={resList[5]}/>
        <RestaurantCard resData={resList[6]}/>
        <RestaurantCard resData={resList[7]}/> */}