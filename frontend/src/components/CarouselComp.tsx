"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  return (
    <div className="mx-auto">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={25000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src="/banner/carousel2.jpg" alt="" />
        </div>
        <div>
          <img src="/banner/carousel3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
