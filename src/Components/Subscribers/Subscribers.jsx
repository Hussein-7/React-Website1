import React , {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Subscribers = () => {

  useEffect(() =>{
    Aos.init({duration : 2000})
    }, [])

  return (
    <div  className='subscribe section'>
      <div  data-Aos='fade-up' data-aos-duration='1500' className="sectionContainer">
        <h2>Subscribe Newsletters & get Lastest News</h2>
        <div className="inputDiv flex">
          <input type="email" placeholder='Enter your email address' />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
