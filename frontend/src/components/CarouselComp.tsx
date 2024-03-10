"use client"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function CarouselComp(){

    return (
        <div className="mx-auto max-w-[1200px]">
            <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="/banner/1.png" alt="" />
                </div>
                <div>
                    <img src="/banner/2.png" alt="" />
                </div>
                
            </Carousel>


        </div>
    )
}