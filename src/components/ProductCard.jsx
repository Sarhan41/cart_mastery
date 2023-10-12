import React from "react";

const ProductCard = ({ id, name, image, price , addbutton }) => {
  return (
    <div className="bg-white rounded-md m-4 overflow-hidden shadow-md lg:w-[30vw] ml-32">
      <div className="h-[300px] object-cover m-2  ">
        <img src={image} alt={name} className="w-full h-full rounded-lg" />
      </div>
      <div className="p-4 flex flex-row ">
        <h1 className="text-4xl text-secondary-dark font-young flex-1">
          {name}
        </h1>
        <p className="text-2xl text-secondary-dark font-robotoc">${price}</p>
      </div>
      <div className="flex-center">
        <button
          className="bg-secondary-dark  text-white font-robotoc text-lg rounded-md px-4 py-2 my-4 hover:bg-secondary-light hover:text-text hover:font-young "
          onClick={()=> addbutton({id,name,price,image})}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
