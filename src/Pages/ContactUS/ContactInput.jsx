import React from "react";
import SectionTitle from "../../Components/SectionTitle";

const ContactInput = () => {
  return (
    <div>
      <SectionTitle
        hading={"Contact From"}
        subheading={"Send Us A Message"}
      ></SectionTitle>
      <div className="px-2 md:bg-gray-300 p-12 space-y-4 mb-12
      ">
        <div className="flex gap-4 ">
          <div className="w-full">
            <label htmlFor="Name">Name</label>
            <input type="text" className="w-full py-2 bg-white border-gray-400 border-2 " placeholder="  Enter Your Name" />
          </div>
          <div className="w-full">
            <label htmlFor="Name">Email</label>
                    <input type="text" className="w-full bg-white  py-2 border-gray-400 border-2" placeholder='  Enter Your Email' />
          </div>
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" name="" id="" placeholder="  Enter Your Number" className="w-full py-2 bg-white  border-gray-400 border-2" />
        </div>
         <fieldset className="fieldset">
          <legend className="fieldset-legend">Message</legend>
          <textarea className="textarea w-full h-28" placeholder="Message"></textarea>
          
        </fieldset>
        <div className="flex gap-2 border-2 border-gray-500 w-fit p-2">
            <input type="checkbox" name="" id="" />
            <p>I am Not a Robot</p>
        </div>
        <div className="flex justify-center items-center">
            <button className="btn bg-amber-400 text-black font-bold text-center">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactInput;
