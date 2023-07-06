import React , {useEffect} from 'react'

import multiPlane from '../../imges/mult-plane.png'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Support = () => {
  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])



  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div  data-Aos='fade-up' data-aos-duration='1600' className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem eveniet ab! Fuga, voluptatum? Recusandae.</p>
        </div>

<div className="infoDiv grid">

  <div className="textDiv grid">

    <div  data-Aos='fade-down' data-aos-duration='2000' className="singleInfo">
      <span className='number'>01</span>
      <h4>Travel requirements for Dubai</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis numquam aperiam, qui nemo laudantium ullam illo consequatur placeat modi quibusdam at eligendi!</p>
    </div>
    <div  data-Aos='fade-down' data-aos-duration='3200' className="singleInfo">
      <span className='number colorOne'>02</span>
      <h4>Chauffeur services at your arrival</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis numquam aperiam, qui nemo laudantium ullam illo consequatur placeat modi quibusdam at eligendi!</p>
    </div>
    <div  data-Aos='fade-down' data-aos-duration='4400' className="singleInfo">
      <span className='number colorTwo'>03</span>
      <h4>Multi-risk travel insurance</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis numquam aperiam, qui nemo laudantium ullam illo consequatur placeat modi quibusdam at eligendi!</p>
    </div>
   


  </div>

<div className="imgDiv">
  <img  data-Aos='fade-left' data-aos-duration='1600' src={multiPlane} alt="imgDiv" />
</div>

</div>

      </div>
    </div>
  )
}

export default Support
