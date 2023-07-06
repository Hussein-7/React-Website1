import React , {useEffect} from 'react'


import imgOne from '../../imges/one.jpg'
import perOne from '../../imges/perOne.jpg'

import imgTwo from '../../imges/two.jpg'
import perTwo from '../../imges/perTwo.jpg'

import imgThree from '../../imges/three.jpg'
import perThree from '../../imges/perThree.jpg'

import imgFour from '../../imges/four.jpg'
import perFour from '../../imges/perFour.jpg'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Travelers = () => {

  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2  data-Aos='fade-up' data-aos-duration='1200'>Top travelers of this month !</h2>

<div className="travelersContainer grid">


  <div  data-Aos='fade-up' data-aos-duration='500' className="singleTreavelers">
    <img src={imgOne} className='destinationImage' alt='imgOne' />
    <div className="travelersDetails">
      <div className="travelersPicture">
        <img src={perOne} className='travelerImage' alt='perOne' />
      </div>
      <div className="travelerName">
        <h2>Hussein</h2>
        <p>husseinshammala@gmail.com</p>
      </div>
    </div>
  </div>


  <div data-Aos='fade-up' data-aos-duration='1800' className="singleTreavelers">
    <img src={imgTwo} className='destinationImage' alt='imgOne' />
    <div className="travelersDetails">
      <div className="travelersPicture">
        <img src={perTwo} className='travelerImage' alt='perOne' />
      </div>
      <div className="travelerName">
        <h2>Hussein</h2>
        <p>husseinshammala@gmail.com</p>
      </div>
    </div>
  </div>


  <div data-Aos='fade-up' data-aos-duration='3200' className="singleTreavelers">
    <img src={imgThree} className='destinationImage' alt='imgOne' />
    <div className="travelersDetails">
      <div className="travelersPicture">
        <img src={perThree} className='travelerImage' alt='perOne' />
      </div>
      <div className="travelerName">
        <h2>Hussein</h2>
        <p>husseinshammala@gmail.com</p>
      </div>
    </div>
  </div>


  <div data-Aos='fade-up' data-aos-duration='4600' className="singleTreavelers">
    <img src={imgFour} className='destinationImage' alt='imgOne' />
    <div className="travelersDetails">
      <div className="travelersPicture">
        <img src={perFour} className='travelerImage' alt='perOne' />
      </div>
      <div className="travelerName">
        <h2>Hussein</h2>
        <p>husseinshammala@gmail.com</p>
      </div>
    </div>
  </div>


</div>

      </div>
      
    </div>
  )
}

export default Travelers
