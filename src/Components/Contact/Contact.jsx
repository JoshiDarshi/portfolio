import React ,{useRef} from 'react'
import contact from './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
//email js

import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dy5v98k', 'template_daqyyhd', form.current, 'kmi_MAWmAPSV-ujqA')
      e.target.reset()
  };
  return (
    <section id='contact' className='contact section container'>
     <div className="sectionTitle">
        <span className='titleNumber'> 
             04
        </span>
        <h5 className='titleText'>
              Contact
              <div className="underline">
                <span></span>
              </div>
        </h5>
      </div>
      <div className="contactContainer grid">
        <div className="socialContact grid">
          <h3>Talk to me</h3>
          <div className="cards grid">
            <div className="card">
              <BsInstagram className='icon instaIcon'/>
            
            <h4>Instagram</h4>
            <span className="userName">
              @darshijoshi11
            </span>
            <div>
              <a href="https://www.instagram.com/darshijoshi11/"className='flex' target='_blank'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
              </div>
            </div>
          </div>
          <div className="cards grid">
            <div className="card">
              <AiFillLinkedin className='icon instaIcon'/>
            
            <h4>LinkedIn</h4>
            <span className="userName">
              Darshi Joshi
            </span>
            <div>
              <a href="https://www.linkedin.com/in/darshi-joshi/"className='flex' target='_blank'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
              </div>
            </div>
          </div>
          <div className="cards grid">
            <div className="card">
              <BsTwitter className='icon instaIcon'/>
            
            <h4>Twitter</h4>
            <span className="userName">
            @darshi_joshi
            </span>
            <div>
              <a href="https://twitter.com/darshi_joshi"className='flex' target='_blank'>
                Send Message <TbArrowBigRightLines className='icon'/>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail} id='form'>
            <input type="text" placeholder='Enter your Name' name='name'/>
            <input type="email" placeholder='Enter your Email' name='email' />
            <textarea name="message"  placeholder='Enter your message'>
            </textarea>
            <button className='formBtn' type='submit' name='submit'>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact