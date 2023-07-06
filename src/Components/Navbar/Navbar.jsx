import React , {useState} from 'react'
import {BsAirplane} from 'react-icons/bs'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'


import logo from '../../imges/logo.png'


const Navbar = () => {

    const [nav , setNav] = useState('navBarMenu')

const showNav = () =>{
    setNav('navBarMenu showNav')
}
const closeNav = () =>{
    setNav('navBarMenu')
}

// add color to 2 navbar 

    const [noBg , setNoBg] = useState('navBarTwo')

const addBgColor = () =>{
    if(window.scrollY >= 10){
        setNoBg('navBarTwo navbar-With-Bg')

    }else{
         setNoBg('navBarTwo')
    }
   
}
window.addEventListener('scroll' ,addBgColor )

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
            <BsAirplane className='icon'/>
        </div>

    <div className="none flex">
        <li className="flex"> <BsPhoneVibrate className='icon'/> Support</li>
        <li className="flex"> <AiOutlineGlobal className='icon'/>  Languages</li>
    </div>

    <div className="atb flex">
    <span>Sign In</span>
    <span>Sign Out</span>

    </div>

      </div>

      <div className={noBg}>

        <div className="logoDiv">
            <img src= {logo} alt="logo" className='logo' />
        </div>

    <div className={nav}>
    <ul className="menu flex">
    <li onClick={closeNav} className="listItem">Home</li>
    <li onClick={closeNav} className="listItem">About</li>
    <li onClick={closeNav} className="listItem">Offers</li>
    <li onClick={closeNav} className="listItem">Seats</li>
    <li onClick={closeNav} className="listItem">Destination</li>

    </ul>

    <div onClick={closeNav} className="closeMenu">
        <AiOutlineClose className='icon' />
    </div>

    <button onClick={closeNav} className="btn flex btnOne">Contact</button>

    </div>
        <button className="btn flex btnTwo">Contact</button>

<div onClick={showNav} className="toggleIcon">
<HiOutlineMenuAlt3 className='icon'/>
</div>

      </div>
    </div>
  )
}

export default Navbar
