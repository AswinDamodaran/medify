import React from "react";
import ad1 from "../../images/advertisment/ad1.svg";
import ad2 from "../../images/advertisment/ad2.svg";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function advertisment() {
  const data = [ad1, ad2, ad1, ad2, ad1];

  return (
    <Swiper
    style={{ width: "90%", margin: "auto", minHeight:"250px" }}
    breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 }, // mobile
        640: { slidesPerView: 2, spaceBetween: 15 }, // tablet
        1024: { slidesPerView: 3, spaceBetween: 20 }, // desktop
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx} >
          <img src={item} alt="advertisment" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default advertisment;
