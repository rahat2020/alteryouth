"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation } from "swiper/modules";
import { MapPin } from "react-feather";

const ImageSlider = ({ perSlide = 4, data = [], from = "", spaces = 0 }) => {
  const renderSlides = () => {
    if (from === "community_impact") {
      return data?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section className="w-full h-[60vh]">
            <Image
              src={slide?.avatar || "/assets/mohuya_community_3.jpg"}
              alt="Hero Image"
              width={300}
              height={300}
              loading="lazy"
              className="object-contain w-[400px] h-[340px]"
            />
          </section>
        </SwiperSlide>
      ));
    }

    if (from === "schools_nation_wide") {
      return data?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section className="w-full h-[60vh]">
            <Image
              src={slide?.avatar || "/assets/mohuya_community_3.jpg"}
              alt="Hero Image"
              width={200}
              height={200}
              loading="lazy"
              className="object-cover w-[300px] h-[240px] rounded-lg"
            />
            <div className="flex flex-col py-2">
              <strong className="text-border-dark text-14">
                {slide?.schools_name}
              </strong>
              <p className="flex justify-start items-center gap-2 py-2">
                <MapPin className="text-brand w-5 h-5" />{" "}
                <span className="text-border-regular font-medium">
                  {slide?.location}
                </span>
              </p>
            </div>
          </section>
        </SwiperSlide>
      ));
    }

    // Fallback if no matching condition
    return null;
  };

  return (
    <div className="h-full w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={perSlide}
        navigation
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          468: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: spaces,
          },
          1024: {
            slidesPerView: perSlide,
            spaceBetween: spaces,
          },
        }}
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
