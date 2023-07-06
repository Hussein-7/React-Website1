import React , {useEffect} from 'react'


import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Info = () => {

  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])


  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2  data-Aos='fade-right' data-aos-duration='1600'>Traval to make memories all around the world</h2>
          <button  data-Aos='fade-left' data-aos-duration='1600' className='btn'>View All</button>
        </div>

    <div className="cardsDiv grid">
      <div  data-Aos='fade-down' data-aos-duration='1200' className="singleCard grid">

        <div className="iconDiv flex">
        <RxCalendar className='icon'/>
        </div>
    <span className="cardTitle">Book & Relax</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus provident porro.</p>
      </div>
      <div  data-Aos='fade-down' data-aos-duration='3400' className="singleCard grid">

        <div className="iconDiv flex colorOne">
        <BsShieldCheck className='icon'/>
        </div>
    <span className="cardTitle">Smart Checklist</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus provident porro.</p>
      </div>
      <div  data-Aos='fade-down' data-aos-duration='5600' className="singleCard grid">

        <div className="iconDiv flex colorTwo">
        <BsBookmarkCheck className='icon'/>
        </div>
    <span className="cardTitle">Book & Relax</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus provident porro.</p>
      </div>
   

    </div>

      </div>


    </div>
  )
}

export default Info
