// BannerCarousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/BannerCarousel.css";
import banner01 from "../assets/banner/BannerRepo.png";
import banner02 from "../assets/banner/BannerYoutube.png";
import banner03 from "../assets/banner/BannerPrototipo.png";

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <a href="https://github.com/schandon/Projeto_DocesVivi" rel="noreferrer" target='_blank'>
                    <img src={banner01} alt="Repositório" />
                </a>
                <a href="https://www.youtube.com/watch?v=lJl7f1Gc1ms" target='_blank' rel="noreferrer">
                    <img src={banner02} alt="Youtube" />
                </a>
                <a href="https://www.figma.com/design/BjL8iLsyDna76re3zEdMM5/Protoripa%C3%A7%C3%A3o---Doces-Vivi?node-id=99-214&t=41wrGHj7cblg71Vn-1"  target='_blank' rel="noreferrer">
                    <img src={banner03} alt="Figma" />
                </a>
            </Slider>
        </div>
    );
}

export default BannerCarousel;
