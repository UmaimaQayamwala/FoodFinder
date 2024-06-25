import { CDN_URL } from "../utils/constants";

const RestaurantCard=({resData})=>{
    const{cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo}=resData?.info;
    return(
        <div className=" w-[200px] h-[360px] m-2 p-4 break-all rounded-lg border-[0.5px] border-gray-400 bg-gray-100 hover:border-[2px]">
            <img className=" h-[120px] w-[150px] rounded-lg text-center ml-[9px]" src={CDN_URL+ cloudinaryImageId}/>

            <h3 className="text-center mt-2 mb-2 font-bold" >{name} </h3>
            <h4 className="mb-[5px]" >{cuisines.join(",")}</h4>
            <h4 className="mb-[5px]">{avgRating}</h4>
            <h4 className="mb-[5px]">{resData.info.sla.deliveryTime} Minutes</h4>
            <h4 className="mb-[5px] " >{costForTwo}</h4>

        </div>
    )
}
// higher order function
// input-restaurantcard-restaurantcard(promoted);


export const withopen=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
            <label className="absolute bg-black text-white rounded-sm p-2 ml-2">VEG</label>
            <RestaurantCard {...props}/>
            </div>
        )
    };
}
export default RestaurantCard;