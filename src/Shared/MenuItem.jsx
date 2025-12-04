import React from "react";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="flex space-x-4">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[120px]"
          src={image}
          alt=""
        />
        <div>
          <h3 className="text-xl">{name}---------------------</h3>
          <h1>{recipe}</h1>
        </div>
        <p className="text-yellow-500">${price}</p>
      </div>
      
    </div>
  );
};

export default MenuItem;
