import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import cardImg from "../../assets/home/slide1.jpg"

const ChefRecommends = () => {
  return (
    <section className="mb-14">
      <SectionTitle
        hading={"Chef Recommends"}
        subheading={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className=
          "">
            <img
              src={cardImg}
              alt="Shoes"
              className=" w-full h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p className="text-xl">
             Lettuce,Eggs,Parmesan Cheese, chicken Breast Filets,
            </p>
            <div className="card-actions">
              <button className="btn bg-gray-100 text-amber-400 border-b-amber-400">ADD TO CART</button>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className=
          "">
            <img
              src={cardImg}
              alt="Shoes"
              className=" w-full h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p className="text-xl">
             Lettuce,Eggs,Parmesan Cheese, chicken Breast Filets,
            </p>
            <div className="card-actions">
              <button className="btn bg-blue-950 text-amber-400 border-b-amber-400">ADD TO CART</button>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className=
          "">
            <img
              src={cardImg}
              alt="Shoes"
              className=" w-full h-[300px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p className="text-xl">
             Lettuce,Eggs,Parmesan Cheese, chicken Breast Filets,
            </p>
            <div className="card-actions">
              <button className="btn bg-gray-100 text-amber-400 border-b-amber-400">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
