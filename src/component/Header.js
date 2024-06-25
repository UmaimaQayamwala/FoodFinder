import { createBrowserRouter } from "react-router-dom";
import logo from "../../logo.jpg";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header = () => {
  useEffect(() => {
    // console.log("useeffect is called");
  });
  const [btnname, setbtnname] = useState("login");
  const onlinestatus = useOnlinestatus();
  const { loggedInuser } = useContext(Usercontext);

  // selector
  // subscribing to the store using selector
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);

  return (
    <div className="flex justify-between mb-[30px] shadow-lg sticky top-0 bg-white z-50 ">
      <div className="logocontainer">
        <img className="w-[156px] h-[116px]" src={logo} alt="logo" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-6  m-4">
          <li className="px-4 text-xl">
            online status :{onlinestatus ? "tick" : "cross"}
          </li>
          <li className="px-4 text-xl">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl cursor-pointer ">
          <Link to="/cart">🛒({cartitems.length})</Link>
            
          </li>
          <button
            className="text-l ml-4 p-1 pt-0 bg-slate-200  border border-solid border-black rounded-md"
            onClick={() => {
              btnname === "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </button>

          <li className="px-4 font-bold">{loggedInuser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
