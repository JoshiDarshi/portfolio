import React from 'react'
import about from './about.css'
import bnrimg from './bnr-img.png'
import {TbCloudDownload} from 'react-icons/tb'
function About() {
  return (
    <section id='about' className='about section container'>
      <div className="sectionTitle">
        <span className='titleNumber'>01.</span>
        <h5 className='titleText'>
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>

      </div>
      <div className="sectionContent grid">
        <div className="textSection">
          <h4 className='hcontent'>
            I have experience in HTML,CSS,JS,React Js to build web applications.
            Ability to deliver quality results within the time.
            <br />
            A passionate person willing to learn more technologies to become a better developer then yesterday. Determined & Result Oriented
            </h4>
            <div className="aboutBtn">
              <a href="Darshi's Resume (2).pdf" download="Darshi's Resume (2).pdf" className="flex">
                Download CV <TbCloudDownload className='icon'/>
              </a>
            </div>
        </div>
        <div className="aboutImgdiv">
          <img src={bnrimg} alt="Darshi Joshi" className='aboutImg'/>
        </div>
      </div>
    </section>
  )
}

export default About