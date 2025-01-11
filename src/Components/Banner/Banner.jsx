import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_row">
            <div className="banner_main_part">
              <div className="banner_text_col">
                <h1>Your Food court at home</h1>
                <div className="banner_button">
                <button>Delivery <p className="font-normal text-[12px]">Order in</p></button>
                <button>Takeout <p className="font-normal text-[12px]">Grab and go</p></button>

                </div>
                
              </div>
              <div className="banner_img_col">
                <img src="Images/banner_img.png" alt="banner_photo" />
              </div>
            </div>
            <div className="banner_delivery_part">

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
