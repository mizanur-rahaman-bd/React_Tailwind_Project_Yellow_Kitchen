import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer_row">
            <div className="logo_col">
                <div>
                    <img src="Images/Footer_Logo.png" alt="logo" />
                </div>
                <div>
                    <span className="w-[296px] h-[1px] bg-white block my-[48px]"></span>
                </div>
                <div>
                    <button className="mr-[8px]"><img src="Images/play_store.png" alt="google" /></button>
                    <button><img src="Images/app_store.png" alt="apple" /></button>
                </div>
            </div>
            <div className="footer_content_col">
              <div className="about_us_col">
                <h3>About us</h3>
                <ul>
                    <li><Link to={''}>Concept</Link></li>
                    <li><Link to={''}>Franchise</Link></li>
                    <li><Link to={''}>Business</Link></li>
                    <li><Link to={''}>Restaurant signup</Link></li>
                    <li><Link to={''}>For Investors</Link></li>
                </ul>
              </div>
              <div className="get_help_col">
                <h3>Get help</h3>
                <ul>
                    <li><Link to={''}>Read FAQs</Link></li>
                    <li><Link to={''}>Restaurants</Link></li>
                    <li><Link to={''}>Specialities</Link></li>
                    <li><Link to={''}>Sign up to deliver</Link></li>
                </ul>
              </div>
              <div className="contact_us_col">
                <h3>Contact us</h3>
                <ul>
                    <li><p>Yellow kitchen Paris 11</p></li>
                    <li><p>69 avenue de la Republique 75011 Paris</p></li>
                    <li><p>0800 111 126</p></li>
                    <li><p>contact@yellowkitchens.com</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="social_row">
            <div className="icon_row">
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebook />
              </div>
            </div>
            <div className="privacy_row">
              <div>
                <Link to={""}>Privacy Policy</Link>
              </div>
              <div>
                <Link to={""}>Terms</Link>
              </div>
              <div>
                <p>© 2020 Yellow kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
