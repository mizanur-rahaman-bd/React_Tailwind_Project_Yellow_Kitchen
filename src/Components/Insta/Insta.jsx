import React from 'react'
import './Insta.css'

const Insta = () => {
  return (
    <>
    <section className='insta'>
        <div className="container">
            <div className="insta_heading">
            <h2>#YellowKitchens <span className='text-[#9093A6]'>in instagram</span> </h2>

            </div>
            <div className="insta_img">
                <div>
                    <img src="Images/insta_1.png" alt="insta" />
                </div>
                <div>
                    <img src="Images/insta_2.png" alt="insta" />
                </div>
                <div>
                    <img src="Images/insta_3.png" alt="insta" />
                </div>
                <div>
                    <img src="Images/insta_4.png" alt="insta" />
                </div>
            </div>
            
        </div>

    </section>
    
    </>
  )
}

export default Insta