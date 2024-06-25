import { useEffect, useState } from "react";
import { MENU_api } from "./constants";
import { MENU_api2 } from "./constants";


const useRestaurantmenu =(resId)=>{
    const [resinfo,setresinfo]=useState(null)
    
    useEffect(()=>{
        fetchdata();
    },[])
     const fetchdata= async()=>{
        const data =await fetch(MENU_api+resId+MENU_api2)
        const json= await data.json();
        setresinfo(json.data);
     }
    
    return resinfo;
}

export default useRestaurantmenu;