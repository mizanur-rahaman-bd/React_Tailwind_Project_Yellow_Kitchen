import React from 'react'
import './Restaurant.css'
import Slider from '../Slider/Slider'


const Restaurant = () => {
  return (
    <>
    <section className='restaurant'>
        <div className="container">
            <div className="restaurant_row">
                <div className="restaurant_text_row">
                    <div>
                    <h2>Restaurants</h2>

                    </div>
                    <div>
                        <button>show all</button>
                    </div>
                    
                </div>
                <div className="restaurant_slider_row">
                    <Slider />
                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Restaurant