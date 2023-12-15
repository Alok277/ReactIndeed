import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { removeAllItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const clearCart = () => {
    console.log('called')
    dispatch(removeAllItems());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h2 className="text-2xl font-bold">Cart</h2>
      <div className=" w-8/12 m-auto">
        <button
          className="m-4 p-2 bg-black text-white rounded-lg "
          onClick={clearCart}
        >
          Clear All
        </button>
        {cartItems.length===0 && <h2>Cart is empty</h2>}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
