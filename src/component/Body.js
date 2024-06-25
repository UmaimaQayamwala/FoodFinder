import RestaurantCard ,{withopen} from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmerui from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  // state variable
  const [Listofdata, setListofdata] = useState([]);
  const [filteredRestaurant, setfilteresRestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  const Restaurantopen=withopen(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.9319821&lng=77.7523039&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListofdata(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteresRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // ** till here we have completed 3 steps of approach 2 of fetching data from backened
    // console.log(filteredRestaurant);
  };

  // this is to show a searching bar untill  we get data from our api
  //**  it is known as conditional rendering
  // if(Listofdata.length===0)
  //   {
  //       return <Shimmerui />
  //   };


  const onlinestatus =useOnlinestatus();
  if(onlinestatus===false)
    
   return (<h1>Looks like you are offline check your internet connection</h1>);
   


  return Listofdata.length === 0 ? (
    <Shimmerui />
  ) : (
    <div className="body">
      <div className="flex mt-8">
        <div className=" ml-[10px]">
          <input
            type="text"
            className="border  border-solid border-black  rounded-md "
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />

          <button
          className="px-3 m-2 bg-slate-200  border border-solid border-black rounded-md"
            onClick={() => {
              const filteredsearch = Listofdata.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteresRestaurant(filteredsearch);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-3 mt-[4px] ml-[30px] h-[30px] bg-slate-200  border border-solid border-black rounded-md"
          onClick={(res) => {
            const filtered = Listofdata.filter((res) => res.info.avgRating > 4);
            setfilteresRestaurant(filtered);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap mt-10 drop-shadow-2xl ">
        {filteredRestaurant.map((restaurant) => (
          <Link className="Link"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              // if reataurant is open then make a label
              restaurant.info.veg?<Restaurantopen resData={restaurant} /> :<RestaurantCard resData={restaurant} />   

            }
           
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
