import React from 'react'
import project from './project.css'
import cook1 from './cook1.png'
import travel from './travel.png'
import dtech from './dtech.png'
import cynthia from './cynthia.png'
import {FiGithub} from 'react-icons/fi'
function Project() {
  const data = [
  {
   id : 1,
   img : cook1,
   livelink : 'https://peppy-dango-68b5dc.netlify.app/',
   github :'https://github.com/JoshiDarshi/Bootstrap_sir_design',
   title : 'Alfresco Cooking',
   description : 'A Cooking Website Template with Recepie.',
   tech1 : 'HTML',
   tech2 : 'CSS'
  },
  {
    id : 2,
    img : travel,
    livelink : 'https://eclectic-praline-cf4553.netlify.app/',
    github :'https://github.com/JoshiDarshi/Travelling',
    title : 'DTravel',
    description : 'A Travelling Website which help people to visit there destination.',
    tech1 : 'React JS',
    tech2 : 'SCSS'
   },
   {
    id : 3,
    img : dtech,
    livelink : 'https://dtechnostar.netlify.app/',
    github :'https://github.com/JoshiDarshi/Dtechnostar',
    title : 'DTechnostar',
    description : 'A Company website demo.',
    tech1 : 'React JS',
    tech2 : ''
   },
   {
    id : 4,
    img : cynthia,
    livelink : 'https://app.netlify.com/sites/cynthiad/overview',
    github :'https://github.com/JoshiDarshi/Cynthia',
    title : 'Cynthia',
    description : 'A Attractive website using HTML CSS JS.',
    tech1 : 'HTML CSS',
    tech2 : 'Javascript'
   },
   
]
  return (
    <section id='project' className='projects container section'>
       <div className="sectionTitle">
        <span className='titleNumber'> 
             03
        </span>
        <h5 className='titleText'>
              Projects
              <div className="underline">
                <span></span>
              </div>
        </h5>
      </div>
      <div className="projectContainer grid">
        {
          data.map(({id,img,livelink,github,title,description,tech1,tech2})=>{
            return(
              <div key={id} className="singleProject">
                 <div className="externalLinks flex">
                   <div className="githubIcon">
                     <a href={github} target='_blank'>
                      <FiGithub className='icon'/>
                     </a>
                   </div>
                 </div>
                 <div className="imgDiv">
                  <a href={livelink} target='_blank'>
                    <img src={img} alt={title} />
                  </a>
                 </div>
                 <div className="projectTitle">
                  <h3>{title}</h3>
                 </div>
                 <div className="desc">
                  {description}
                 </div>
                 <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                 </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Project