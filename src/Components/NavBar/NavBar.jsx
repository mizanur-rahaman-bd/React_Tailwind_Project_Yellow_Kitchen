import React from 'react'
import './NavBar.css'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
    <nav className='nav'>
      <div className="container">
        <div className="navRow">
          <div className="navLogo">
            <img src="Images/Logo.png" alt="logo" />

          </div>
          <div className="navContent">
            <div className="navUser">
            <FaRegUser />
            <p>Log in</p>

            </div>
            <div className="navCart">
            <MdOutlineShoppingCart />
            <p>0</p>
            </div>
            <div className="navMenuBar">
            <CiMenuBurger />
            </div>
            


          </div>
        </div>

      </div>
    </nav>
    
    </>
  )
}

export default NavBar