import React from "react";
import { Products } from "../assets/constant";
import ProductCard from "./ProductCard";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const Home = () => {

  const dispatch = useDispatch();

  const handleClick = ({ id, name, price, image }) => {
    toast.success("added to cart");
    dispatch(addToCart({ id, name, price, image , quantity:1 }))

  };

  return (
    <section className="py-8">
      <div className=" text-center ">
        <h1 className="text-4xl font-youngtext-secondary mb-4">
          Welcome to the
        </h1>
        <h1 className="text-6xl font-robotoc text-secondary-dark">
          E-Commerce Store
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        {Products.map((product) => (
          <ProductCard key={product.id} {...product} addbutton={handleClick} />
        ))}
      </div>
    </section>
  );
};

export default Home;
