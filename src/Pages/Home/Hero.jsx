import React from "react";
import coverImg from "../../assets/home/banner.jpg"
const Hero = () => {
  return (
    <div>
      <div
        className="hero "
        style={{
          backgroundImage:
            `url(${coverImg})`,
        }}
      >
       
        <div className="hero-content bg-white p-30 px-62 mt-20 mb-20 text-neutral-content text-center">
          <div className="max-w-md bg-white text-gray-700">
            <h1 className="mb-5 text-5xl font-bold uppercase">Cafe Ali</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
