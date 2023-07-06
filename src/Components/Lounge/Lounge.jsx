import React , {useEffect} from 'react'

import insidePlane from '../../imges/insidePlane.png'


import Aos from 'aos'
import 'aos/dist/aos.css'


const Lounge = () => {

  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])

  return (
    <div className='lounge container section'>
      <div className="textDiv">
      <h2  data-Aos='fade-right' data-aos-duration='1600'>Unaccompanied Minor Lounge</h2>
    </div>
      <div className="sectionContainer grid">

      <div className="imgDiv">
        <img  data-Aos='fade-right' data-aos-duration='2600' src={insidePlane} alt="insidePlane" />
        </div>

    

    <div className="grids grid">

      <div  data-Aos='fade-right' data-aos-duration='3000' className="singleGrid">
        <span className='gridTitle'>Help through the airpot</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quasi velit quibusdam, eaque laborum obcaecati. Accusantium?</p>
      </div>
      <div  data-Aos='fade-right' data-aos-duration='3000' className="singleGrid">
        <span className='gridTitle'>Priority Boording</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quasi velit quibusdam, eaque laborum obcaecati. Accusantium?</p>
      </div>
      <div  data-Aos='fade-left' data-aos-duration='3500' className="singleGrid">
        <span className='gridTitle'>Core on the flight</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quasi velit quibusdam, eaque laborum obcaecati. Accusantium?</p>
      </div>
      <div  data-Aos='fade-left' data-aos-duration='3500' className="singleGrid">
        <span className='gridTitle'>Chouffour-drive service</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quasi velit quibusdam, eaque laborum obcaecati. Accusantium?</p>
      </div>

    

    </div>

      </div>
    </div>
  )
}

export default Lounge
