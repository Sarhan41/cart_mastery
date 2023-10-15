import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removefromCart,
} from "../redux/slices/CartSlice";

const calculateItemTotal = (product) => {
  return product.price * product.quantity;
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subTotal = cartItems.reduce(
    (total, product) => total + calculateItemTotal(product),
    0
  );

  const taxRate = 0.2;
  const tax = subTotal * taxRate;

  const shippingCost = subTotal > 4000 ? 0 : 80;

  const total = subTotal + tax + shippingCost;

  return (
    <section className="mt-6 p-4 max-xs:mt-4 max-xs:p-0">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 h-fit">
          {cartItems.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md overflow-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-24 w-24 object-cover">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">${product.price} each</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="bg-primary rounded-full h-8 w-8 flex items-center justify-center text-white font-bold"
                    onClick={() => dispatch(decrement({ id: product.id }))}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="bg-primary rounded-full h-8 w-8 flex items-center justify-center text-white font-bold"
                    onClick={() => dispatch(increment({ id: product.id }))}
                  >
                    +
                  </button>
                  <p className="text-xl font-bold">
                    ${calculateItemTotal(product)}
                  </p>
                  <button
                    className="text-primary cursor-pointer"
                    onClick={() => dispatch(removefromCart({ id: product.id }))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-center h-96">
          <h1 className="text-4xl font-bold text-primary-dark font-young">
            Your cart is empty
          </h1>
        </div>
      )}
      <section className=" w-full bg-white p-4 text-lg md:text-2xl lg:text-3xl font-extrabold mt-8 rounded-lg shadow-md ">
        <div className="text-primary-dark">SubTotal: ${subTotal}</div>
        <div className="text-primary-dark">Tax: ${tax}</div>
        <div className="text-primary-dark">Shipping: ${shippingCost}</div>
        <div className="mt-2 text-2xl lg:text-4xl font-bold text-primary">
          Total: ${total}
        </div>
      </section>
    </section>
  );
};

export default Cart;
