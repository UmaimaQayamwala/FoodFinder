import { useEffect, useState } from "react";
import Shimmerui from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_api } from "../utils/constants";
import { MENU_api2 } from "../utils/constants";
import Restaurantcategory from "./Restaurantcategory";
import useRestaurantmenu from "../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  // const [resinfo, setinfo] = useState(null);

  const { resId } = useParams();
  const resinfo = useRestaurantmenu(resId);

  const [showindex,setshowindex]=useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_api+resId+MENU_api2
  //   );

  //   const json = await data.json();
  //   setinfo(json?.data);

  //   console.log(json);
  // };

  if (resinfo === null) return <Shimmerui />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    });
  // console.log(category);

  return (
    <div className="flex flex-col ">
      <h1 className="ml-[400px] mb-5 mt=[300px] text-xl font-bold">{name}</h1>
      <div className="border-[3px]  border-gray-200 rounded-md shadow-lg shadow-black w-[660px] ml-[400px]">
        <h2 className="ml-2" id="rating">
          &#10026;{avgRating} &#8226;
          {costForTwoMessage}
        </h2>
        <br></br>
        <p className="ml-2">{cuisines.join(",")}</p>

        <br></br>
        <hr></hr>
        <p className="ml-2 mb-2">Free Delivery on order above Rs.149</p>
      </div>
      {/* accordians */}
      <br></br>
      <br></br>
      <h1 className="m-auto w-[20px] my-3 font-bold text-lg">MENU</h1>
      {category.map((categories,index) => (
        <Restaurantcategory
          key={categories?.card?.card?.title}
          data={categories?.card?.card}
          showitems={index===showindex ?true:false}
          setshowindex={()=>setshowindex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
