import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const BannerCarousel = ({ CarouselData }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    CarouselData.map((value, index) => (
                        <div key={index}>
                            <img src={value.Imgsrc} alt={value.Imgsrc} className="bannerCarouselImg"/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
