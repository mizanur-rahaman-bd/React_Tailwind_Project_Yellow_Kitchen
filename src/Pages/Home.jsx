import React from 'react'
import Banner from '../Components/Banner/Banner'
import Restaurant from '../Components/Restaurant/Restaurant'
import Nearest_Res from '../Components/Nearest_Res/Nearest_Res'
import Speciality from '../Components/Speciality/Speciality'
import Map from '../Components/Map/Map'
import Insta from '../Components/Insta/Insta'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Banner />
    <Restaurant />
    <Nearest_Res />
    <Speciality />
    <Map />
    <Insta />
    <Footer />
    
    </>
  )
}

export default Home