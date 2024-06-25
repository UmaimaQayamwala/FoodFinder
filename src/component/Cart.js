import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../cartslice";

const Cart = () => {
  const cartitems = useSelector((store) => store.cart.items);
  const dispatch =useDispatch();
  const handlclearcart=()=>{
 dispatch (clearcart())
  }
  return (
    <div className=" pt-[2px]  ">
      <h1 className="text-2xl w-[40px] m-auto font-bold mb-[20px]">Cart</h1>

      <div className="flex-col align-center text-center mb-[20px]">
        <button className="border-[0.5px] border-black rounded-lg  m-4 px-4 py-2"
        onClick={handlclearcart}>
          Clear Cart
        </button>
        {
         cartitems.length==0 && <h1>YOUR CART IS EMPTY</h1>
        }
      </div>

      <div className="w-6/12  m-auto  shadow-lg shadow-gray-800 rounded-lg    border-[0.5px] border-gray-300">
        <Itemlist items={cartitems} />
      </div>
    </div>
  );
};

export default Cart;
