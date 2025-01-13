import React from 'react'
import './Speciality.css'
import Speciality_slider from '../Slider/Speciality_slider'

const Speciality = () => {
  return (
    <>
    <section className='speciality'>
        <div className="container">
        <div className="restaurant_row">
                <div className="restaurant_text_row">
                    <div>
                    <h2>Specialities</h2>

                    </div>
                    <div>
                        <button>show all</button>
                    </div>
                    
                </div>
                <div className="restaurant_slider_row">
                    <Speciality_slider />
                    
                </div>
            </div>

        </div>
    </section>
    
    </>
  )
}

export default Speciality