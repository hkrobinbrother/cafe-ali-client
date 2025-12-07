import React from "react";
import Cover from "../../Shared/Cover";
import contactCover from "../../assets/contact/banner.jpg";
import SectionTitle from "../../Components/SectionTitle";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import ContactInput from "./ContactInput";
import { Title } from "react-head";

const Contact = () => {
  return (
    <div className="">
      <Title>CAFE-ALI | Contact</Title>
      <Cover bennerImg={contactCover} bennerTitle="Contact US"></Cover>
      <SectionTitle
        hading={"OUR LOCATION"}
        subheading={"VISITE US"}
      ></SectionTitle>
      <div className="px-2 md:flex justify-around mb-4">
        <div className="border-gray-400 border-2">
          <div className="flex justify-center items-center bg-amber-600 py-6">
            <FaPhoneAlt />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-20 bg-gray-100">
            <h1 className="uppercase font-bold text-2xl">Phone</h1>
            <p>++088 012345789</p>
          </div>
        </div>
        <div className="border-gray-400 border-2">
          <div className="flex justify-center items-center bg-amber-600 py-6">
            <FaLocationDot />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-20 bg-gray-100">
            <h1 className="uppercase font-bold text-2xl"> Address</h1>
            <p>++088 012345789</p>
          </div>
        </div>
        <div className="border-gray-400 border-2">
          <div className="flex justify-center items-center bg-amber-600 py-6">
            <MdAccessTimeFilled />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center p-20 bg-gray-100">
            <h1 className="uppercase font-bold ">Working Hours</h1>
            <p>MOn-Fri:08:00-22:00</p>
            <p>Sat-sun: 10:00-23:00</p>
          </div>
        </div>
      </div>
      <ContactInput></ContactInput>
    </div>
  );
};

export default Contact;
