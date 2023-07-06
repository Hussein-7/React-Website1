import React , {useEffect} from 'react'

import {AiOutlineCopyright} from 'react-icons/ai'


import logo from '../../imges/logo.png'

import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])


  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div  data-Aos='fade-up' data-aos-duration='500' className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="logo" />
          </div>
          <p>Your mind should be stronger than your feeling , fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiOutlineInstagram className='icon' />
            <AiOutlineYoutube className='icon' />
          </div>
        </div>

<div  data-Aos='fade-up' data-aos-duration='2000' className="footerLink">
  <span className="linkTitle">Information</span>
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">Explore</a>
  </li>
  <li>
    <a href="#">Travale</a>
  </li>
  <li>
    <a href="#">Floght Status</a>
  </li>
  <li>
    <a href="#">Check In</a>
  </li>
  <li>
    <a href="#">Manage your booking</a>
  </li>






</div>
<div  data-Aos='fade-up' data-aos-duration='3500' className="footerLink">
  <span className="linkTitle">Quick Guide</span>
  <li>
    <a href="#">FAQ</a>
  </li>
  <li>
    <a href="#">How to</a>
  </li>
  <li>
    <a href="#">Featyres</a>
  </li>
  <li>
    <a href="#">Route Map</a>
  </li>
  <li>
    <a href="#">Baggage</a>
  </li>
  <li>
    <a href="#">Our Communities</a>
  </li>






</div>
<div  data-Aos='fade-up' data-aos-duration='5000' className="footerLink">
  <span className="linkTitle">Quick Guide</span>
  <li>
    <a href="#">FAQ</a>
  </li>
  <li>
    <a href="#">How to</a>
  </li>
  <li>
    <a href="#">Featyres</a>
  </li>
  <li>
    <a href="#">Route Map</a>
  </li>
  <li>
    <a href="#">Baggage</a>
  </li>
  <li>
    <a href="#">Our Communities</a>
  </li>






</div>




      </div>


<div className="copyRight flex">
  Courtesy Design | Developed Hussein Shammala<AiOutlineCopyright />2023
</div>


    </div>
  )
}

export default Footer
