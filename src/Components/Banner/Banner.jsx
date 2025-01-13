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
              <div className="banner_delivery_time">
                <div className="delivery_img">
                  <img src="Images/delivery_time.png" alt="time" />

                </div>
                <div className="delivery_text">
                  <p>delivery in all paris in less than 30 minutes</p>

                </div>

              </div>
              <div className="banner_delivery_car">
              <div className="delivery_img">
                  <img src="Images/delivery_car.png" alt="time" />

                </div>
                <div className="delivery_text">
                  <p>Free delivery from 29 euros</p>

                </div>

              </div>
              <div className="banner_delivery_french">
              <div className="delivery_img">
                  <img src="Images/delivery_paris.png" alt="time" />

                </div>
                <div className="delivery_text">
                  <p>Only fresh and French products</p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
