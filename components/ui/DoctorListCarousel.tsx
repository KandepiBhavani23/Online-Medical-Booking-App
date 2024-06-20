"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorCard from "./DoctorCard";
export default function CategoryCarousel({
  doctor,
  isInPerson,
}: {
  doctor: any;
  isInPerson?: boolean;
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 746 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 745, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      showDots={true}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={}
      dotListClass="custom-dot-list-style"
      itemClass="px-4 py-8">
      {doctor.map((doctor: any) => {
        return <DoctorCard key={doctor.id} isInPerson={isInPerson} />;
      })}
    </Carousel>
  );
}
