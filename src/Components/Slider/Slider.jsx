import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

import Slider from "react-slick";

const Res_Slider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50px', background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: '50px', background: "gray" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="slider_row">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img src="Images/res_1.png" alt="res" />
                </div>
                <div>
                  <img src="Images/res_2.png" alt="res" />
                </div>
                <div>
                  <img src="Images/res_3.png" alt="res" />
                </div>
                <div>
                  <img src="Images/res_4.png" alt="res" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Res_Slider;
