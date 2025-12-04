import React from "react";
import { Parallax } from 'react-parallax';

const Cover = ({bennerImg,bennerTitle,}) => {
  return (
     <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={`${bennerImg}`}
        bgImageAlt="the cover"
        strength={-100}
    >
      <div className="hero-content  py-30 mt-20 mb-20 m-20 bg-black/30  text-neutral-content text-center">
        <div className="max-w-md   ">
          <h1 className="mb-5 text-5xl font-bold uppercase">{bennerTitle}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          
        </div>
      </div>
    </Parallax>
    
  );
};

export default Cover;
