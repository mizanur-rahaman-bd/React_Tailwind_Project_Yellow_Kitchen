import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className="container">
            <div className="footer_row">
                <div className="logo_col">

                </div>
                <div className="about_us_col">

                </div>
                <div className="get_help_col">

                </div>
                <div className="contact_us_col">

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
                        <Link to={''}>Privacy Policy</Link>
                    </div>
                    <div>
                        <Link to={''}>Terms</Link>
                    </div>
                    <div>
                        <p>© 2020 Yellow kitchen</p>
                    </div>

                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Footer