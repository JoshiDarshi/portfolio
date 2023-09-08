import React, { useState } from 'react'
import navbar from './navbar.css'
import {SiCreativetechnology} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
function Navbar() {
  const [active , setActive] = useState('navBar')
const showNavBar = ()=>{
  setActive('navBar activeNavbar')
}
const removeNavBar = ()=>{
  setActive('navBar')
}
  return (
    <header className='header'>
      <div className="logoDiv">
        <h1 className='logo'><a href="" style={{display:'flex',alignItems:'center'}}>Dj. <SiCreativetechnology fontSize={80}/></a></h1>
      </div>
      <div className={active}>
        <ul className="navLists">
          <li className="navItem">
            <a href="#about" className="navLink"><span className='headerNumber'>1.</span><span>About</span> </a>
          </li>
          <li className="navItem">
            <a href="#skill" className="navLink"><span className='headerNumber'>2.</span><span>Skills</span> </a>
          </li>
          <li className="navItem">
            <a href="#project" className="navLink"><span className='headerNumber'>3.</span><span>Projects</span> </a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink"><span className='headerNumber'>4.</span><span>Contact</span> </a>
          </li>
          <button className='btn'>
            <a href="Darshi's Resume (2).pdf" download="Darshi's Resume (2).pdf">Resume</a>
          </button>
        </ul>
        <div className="closeNavBar">
          <AiFillCloseCircle onClick={removeNavBar} className='icon'/>
        </div>
      </div>
      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className='icon'/>
      </div>
    </header>
  )
}

export default Navbar