import { CDN_URL } from "../utils/constants";       // importing Named export

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name , cloudinaryImageId , cuisines , avgRating , costForTwo ,deliveryTime} = resData?.info; //optional chaining

    return (
        <div className="res-card" style={{ backgroundColor: "lightpink" }}>
          
            <img className="res-logo" alt="res logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="heading">{name}</h3>
            <h4 className="location1">{cuisines.join(",")}</h4>
            <h4 className="rating1">{avgRating}</h4>
            <h4 className="cost">{costForTwo}</h4>
            <h4 className="timing1">{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;