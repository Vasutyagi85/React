import {CON_URL} from "../utils/constant"

const RestaurantCard =(props)=>{//props is an object (props) or ({resName,cuisine}) react wrap into the objects pass into this component
  const {resData}=props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime
  }=resData?.info;

  return (
    <div className="res-card">
      <img className="res-logo" src={CON_URL+resData.info.cloudinaryImageId}/>
      {/* <h3>{resData.info.name}</h3>
      <h3>{resData.info.cuisines}</h3>

      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4> */}

      <h3>{name}</h3>
      <h3>{cuisines}</h3>

      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

export default RestaurantCard;