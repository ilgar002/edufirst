import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainBanner.scss";

const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="banner-slider">
      <Slider {...settings}>
        <div className="slider-item">
          <div className="item-content">
            <h1 style={{ color: "#fff" }}>EduFirst 1</h1>
          </div>
        </div>
        <div className="slider-item">
          <div className="item-content">
            <h1 style={{ color: "#fff" }}>EduFirst 2</h1>
          </div>
        </div>
        <div className="slider-item">
          <div className="item-content">
            <h1 style={{ color: "#fff" }}>EduFirst 3</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainBanner;
