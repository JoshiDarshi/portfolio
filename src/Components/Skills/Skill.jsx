import React from 'react'
import skill from './skill.css'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {FaHtml5} from 'react-icons/fa'
import {DiJava} from 'react-icons/di'
import {BsGithub} from 'react-icons/bs'
import {SiCanva} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiYoutubestudio} from 'react-icons/si'
function Skill() {
  return (
    <section id='skill' className='skills container section'>
      <div className="sectionTitle">
        <span className='titleNumber'> 
             02
        </span>
        <h5 className='titleText'>
              Skills
              <div className="underline">
                <span></span>
              </div>
        </h5>
      </div>
        <div className="skillscontainer grid">
             <div className="skillGroup">
              <div className="groupTitle">
                <h2>Web Development</h2>
                <span className="subTitle">
                  7 Months of Experience
                </span>
              </div>
              <div className="generalSkills">
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <TbBrandReactNative className='icon'/>
                  </div>
                  <span className="skillName">React</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <IoLogoJavascript className='icon'/>
                  </div>
                  <span className="skillName">Javascript</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <SiCss3 className='icon'/>
                  </div>
                  <span className="skillName">CSS</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <BsBootstrap className='icon'/>
                  </div>
                  <span className="skillName">Bootstrap</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <FaHtml5 className='icon'/>
                  </div>
                  <span className="skillName">HTML</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <DiJava className='icon'/>
                  </div>
                  <span className="skillName">Core Java</span>

                </div>
              </div>
             </div>
             <div className="skillGroup">
              <div className="groupTitle">
                <h2>Other Skills</h2>
                <span className="subTitle">
                  1.5 Years of Experience
                </span>
              </div>
              <div className="generalSkills">
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <BsGithub className='icon'/>
                  </div>
                  <span className="skillName">Github</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <SiCanva className='icon'/>
                  </div>
                  <span className="skillName">Canva</span>

                </div>
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <SiMysql className='icon'/>
                  </div>
                  <span className="skillName">MySql</span>

                </div>
                
                <div className="singleSkill">
                  <div className="iconBox flex">
                    <SiYoutubestudio className='icon'/>
                  </div>
                  <span className="skillName">YouTube <br /> Editing</span>

                </div>
                
              </div>
             </div>
        </div>
    </section>
  )
}

export default Skill