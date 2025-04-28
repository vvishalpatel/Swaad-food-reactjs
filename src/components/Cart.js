import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())

  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
    <h1 className="font-bold text-4xl text-center mb-6 text-gray-800">Cart items ({cartItems.length})</h1>

    <button
      className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300 ease-in-out mb-6 block mx-auto"
      onClick={() => handleClearCart()}
    >
      Clear Cart
    </button>

    <div className="flex flex-wrap gap-6 justify-center">
      {cartItems.map((item) => (
        <FoodItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
};


export default Cart;
