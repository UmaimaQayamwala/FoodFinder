import { useDispatch } from "react-redux";
import { addItem } from "../cartslice";
import { CDN_URL } from "../utils/constants";



const Itemlist = ({ items }) => {

  const dispatch=useDispatch()
  const handleAdditems=(item)=>{
    // dispatch an action
    dispatch(addItem(item))

    // what ever will be passed from here will go insize payload
    
  }
  console.log(items);
  return (
    <div>
      {items &&
        items.map((item) => (
          <div key={item?.card?.info?.id} className="m-2  border-b-2 flex">
            <div className=" mb-2 flex-1">
              <span className="font-bold text-gray-700">
                {item?.card?.info?.name}
              </span>
              <br></br>
              <span className="">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}{" "}
              </span>
              <p className="text-s text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="m-2 ">
              <div className="absolute">
                <button className="w-[100px] h-[40px] mt-[125px] ml-[30px] border-[0.5px] border-gray-200 shadow-lg rounded-md bg-white text-green-600 text-lg font-bold"
                onClick={()=>handleAdditems(item)}>
                  ADD +

                </button>
              </div>
              <img
                className="h-[150px] w-[150px] object-cover rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              ></img>
              <br></br>
              <br></br>
            </div>
            <br></br>
          </div>
        ))}
    </div>
  );
};
export default Itemlist;
