import React, { useEffect } from "react";
import { lazy ,Suspense } from "react";
import REACTDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body"
import About from "./component/About";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Err from "./component/Err";
import Contact from "./component/contact";
import RestaurantMenu from "./component/Restaurantmenu";
import Shimmerui from "./component/shimmer";
import { useState } from "react";
import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import Cart from "./component/Cart";

// import Grocery from "./component/Grocery";


const Layout =()=>{
  const [userName,setuserName]=useState();

  useEffect(()=>{
    const data={
      name:"Umaima",
    };
    setuserName(data.name);

  },[])
    return (
      <Provider store={appstore}>
      <Usercontext.Provider value={{loggedInuser:userName}}>
        <div >
          <Header />
          <Outlet />
        </div>
        </Usercontext.Provider>
        </Provider>
    )
}
const Grocery =lazy(()=>import("./component/Grocery"));
const approuter=createBrowserRouter(
 [ {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Body />,
        
      },
      {
        path:"/about",
        element:<About />,
        
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={
          <Shimmerui />
        }><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"cart",
        element:<Cart />,
      },
    ],
    errorElement:<Err/>
  },
  
])

// const heading=React.createElement("h1",{},"heelo guys");
const root=REACTDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);