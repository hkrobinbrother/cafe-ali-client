import React from "react";
import FoodCard from "../../Components/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const totalCard = 6;
  const page = [];
  for (let i = 0; i < items.length; i += totalCard) {
    page.push(items.slice(i, i + totalCard));
  }
  return (
    <div className="w-full">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {page.map((pagesItem, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {pagesItem.map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
