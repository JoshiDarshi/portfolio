import React from 'react'
import home from './home.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {TbChevronsDown} from 'react-icons/tb'
function Home() {
  return (
    <section id='home' className='home section'>
      {/* <div className="leftIcons">
          <div className='socials grid'>
             <a href="" target='_blank'>
              <AiFillGithub className='icon'/>
             </a>
             <a href="" target='_blank'>
              <AiOutlineTwitter className='icon'/>
             </a>
             <a href="" target='_blank'>
              <AiOutlineYoutube className='icon'/>
             </a>
          </div>
      </div> */}
      <div className="container homeContainer">
       <span className="introText">
        Hi my name is,
       </span>
       <h1 className="title">
        Darshi Joshi
       </h1>
       <span className='subTitle'>
        I Develop Scalable Web Based Applications & Websites 
       </span>
       <p className="homeParagraph">
        I code within required coding standards and styles to serve exact need
       </p>
       <div className="lowerHomeSection">
        <button className='containerBtn'>
        <a href="#contact" className="flex">
           Contact me<TbArrowBigRightLines className='icon'/>
        </a>
        </button>
        <div className="scrollDiv">
          <a href="#about" className="flex">
            <h6 className='scroll'>Scroll Down</h6>
            <TbChevronsDown className='icon'/>
          </a>
        </div>
       </div>
      </div>
      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://malito:darshi373@gmail.com" target='_blank'>
              darshi373@gmail.com
            </a>
          </div>
        </div>
        <div className='line'></div>
      </div>
    </section>
  )
}

export default Home