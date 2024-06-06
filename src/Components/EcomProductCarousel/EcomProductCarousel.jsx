import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryBanner } from '../CategoryBanner/CategoryBanner';

export const EcomProductCarousel = ({ BgImg, Data, Title }) => {

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
        <div className='row gx-0'>
            <div className="col-4 productCarouselcontainer" style={{ backgroundImage: `url(${BgImg})` }}>
                <p>{Title}</p>
                <button className="btn btn-primary rounded-1">View all</button>
            </div>
            <div className="col-8">
                <Slider {...settings}>
                    {Data.map((value, index) => (
                        <CategoryBanner 
                            key={index}
                            ImgSrc={value.ImgSrc}
                            CategoryName={value.CategoryName}
                            Brand={value.Brand}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}
