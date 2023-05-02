import React from 'react'
import CountUp from 'react-countup';
import './styles.scss'

export default function About() {
  return (
    <div className='about-wrapper' id="about">
        <div className='about-container'>
            <div>
              <div><CountUp end={1000}  duration= {2} enableScrollSpy/><h6>+</h6></div>              
              <p>Customers</p>
            </div> 
            <div>
              <div><CountUp end={50000} duration= {2} enableScrollSpy/><h6>+</h6></div>
              <p>Money Spent</p>
            </div>
            <div>
              <div><CountUp end={4200} duration= {2} enableScrollSpy/><h6>+</h6></div>
              <p>Active IPs</p>
            </div>
        </div>
    </div>
  )
}
