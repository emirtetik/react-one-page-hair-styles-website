import React from 'react'
import kesim from "./images/hair-cut.jpg"
import yıkama from "./images/hair-wash.jpg"
import bakım from './images/hair-care.jpg'
import "./Services.css"
function Services() {
  return (
    <div className='services' id='services'>
        <div className='container' >
            <h2>Hizmetlerimiz</h2>
            <span className='line'></span>
            <div className='content'>
            <div className='card'>
                <img src={kesim} alt="kesim" />
                <p><span>Saç Kesimi</span></p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus delectus iusto dolor est molestiae quaerat, reprehenderit quibusdam laboriosam</p>
            </div>
         
            <div className='card'>
                <img src={yıkama} alt="yıkama" />
                <p><span>Saç Yıkama</span></p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus delectus iusto dolor est molestiae quaerat, reprehenderit quibusdam laboriosam</p>
            </div>

            <div className='card'>
                <img src={bakım} alt="bakım" />
                <p><span>Saç Bakımı</span></p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus delectus iusto dolor est molestiae quaerat, reprehenderit quibusdam laboriosam</p>
            </div>
            </div>
        </div>   
        <hr/> 
    </div>
  )
}

export default Services