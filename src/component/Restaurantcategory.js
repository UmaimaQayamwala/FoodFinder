import { useState } from "react";
import Itemlist from "./Itemlist";
const Restaurantcategory=({data,showitems,setshowindex})=>{

    const handleclick=()=>{
        setshowindex()
     }
 
    // console.log(data);
    return(
        <div>
            {/* header */}
            <div className="w-6/12 m-auto  shadow-lg shadow-gray-800 rounded-lg my-3 p-2  border-[0.5px] border-gray-300">
                <div className="flex justify-between cursor-pointer" onClick={handleclick} >
                <span className="m-3 font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                <span className="m-3">&#9650;</span>

                </div>
                {showitems && <Itemlist items={data.itemCards}/>}
               
            </div>
           
        </div>
    )
}

export default Restaurantcategory;