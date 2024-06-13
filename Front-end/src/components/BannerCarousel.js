// BannerCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/BannerCarousel.css";
import banner01 from "../assets/banner/BannerRepo.png";
import banner02 from "../assets/banner/BannerYoutube.png";

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={banner01} alt="Banner 1" />
                </div>
                <div>
                    <img src={banner02} alt="Banner 2" />
                </div>
            </Slider>
        </div>
    );
}

export default BannerCarousel;
