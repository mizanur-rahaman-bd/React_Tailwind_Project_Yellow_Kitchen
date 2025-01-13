import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Speciality_slider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50px",
          background: "gray",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
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
      <section>
        <div className="container">
          <div className="slider_row">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <img src="Images/spec_1.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_2.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_3.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_4.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_5.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_6.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_7.png" alt="res" />
                </div>
                <div>
                  <img src="Images/spec_8.png" alt="res" />
                </div>
                
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Speciality_slider;
