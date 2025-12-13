import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaCommentAlt } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch("http://https://cafe-ali-server.vercel.app0/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        subheading={"What our client say"}
        hading={"Testimonials"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center mx-12 my-16 space-y-6 p-8">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaCommentAlt className="text-8xl " />
              <p>{review.details}</p>
              <h1 className="text-3xl font-bold text-orange-300">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
