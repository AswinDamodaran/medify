import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./MedicalSpecialist.module.css";
import image from "../../images/downloadimage.svg";
import image2 from "../../images/patientcaring.svg";
import doc1 from "../../images/doc1.svg";
import doc2 from "../../images/doc2.svg";
import doc3 from "../../images/doc3.svg";

// const doctors = [doc1, doc2];

function MedicalSpecialists() {
  return (
    <div className={styles.container}>
      <h1>Our Medical Specialist</h1>
      <Swiper
        className={styles.swipermain}
        slidesPerView={4}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc1} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc2} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc3} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc1} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc2} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc3} alt="doctor image" />
        </SwiperSlide>
        <SwiperSlide className={styles.slidermain}>
          <img className={styles.slideimage} src={doc1} alt="doctor image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MedicalSpecialists;
