import React , {useEffect} from 'react'

import sky from '../../imges/video/sky.mp4'
import plane from '../../imges/plane.png'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
useEffect(() =>{
Aos.init({duration : 2000})
}, [])



  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-Aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>

<div className="homeImages flex">

  <div className="videoDiv">

    <video data-Aos='fade-up' data-aos-duration='2700' src={sky} className='video' autoPlay muted loop></video>

  </div>

<img data-Aos='fade-down' data-aos-duration='2900' src={plane} alt="plane" className='plane' />

</div>


    </div>
  )
}

export default Home
