import React from 'react'
import me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ years of experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Industry</h5>
              <small>Investment Banking<br/> Risk Management</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
          </div>
          <p>
          I'm a Software engineer with a foundation in software engineering and programming principles across multiple platforms.<br/>  
          Experienced in object-oriented programming, <br/>
          FrontEnd and Backend; <br/>
          Developing, testing and debugging code;<br/> 
          Designing interfaces; <br/>
          Administering systems and networks.<br/> 
          <br/>
          <br/>
          💻 Software Engineering Skills.<br/>
          ➤ Web Development: ReactJS, Javascript, NodeJS, Python, Flask, HTML, CSS, REST APIs.<br/>
          ➤ Database management: MariaDB, MySQLWorkbench, AWS.<br/>
          ➤ Effective communication, Attention to detail, Ability to learn quickly.
          <br/>
          <br/>
          Little more about me: <br/>

            - I have a Degree in Fashion Design, have a background in Arts/Music/Languages (Currently learning Japanese)🎌<br/>
            - I have about 30 plants ( proud plant mum )🪴<br/>
            - I'm a Crypto Enthusiast🪙<br/>
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About