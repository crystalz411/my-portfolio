import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
  
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>💻 Software Engineering Skills</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon' size={40}/>
            <p>
            Web Development: 
            ReactJS, Javascript, NodeJS, Python, Flask, HTML, CSS, REST APIs.            </p>
          </li>
          <li>
            <BiCheck className='service_list-icon' size={40}/>
            <p>
            Database management: 
            MariaDB, MySQLWorkbench, AWS.
            </p>
          </li> 
        </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>📚 Soft Skills</h3>
        </div>

        <ul className='service_list'>
        <li>
            <BiCheck className='service_list-icon' size={50}/>
            <p>
              Effective communication, Attention to detail, Ability to learn quickly.
            </p>
          </li> 
          <li>
            <BiCheck className='service_list-icon' size={50}/>
            <p>
              Strong presentation and networking skills. Takes the intiative to learn and build on skill sets outside of work
            </p>
          </li> 
        </ul>
        </article>
        {/* end of UX */}<article className='service'>
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
        </div>

        <ul className='service_list'>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>
          <li>
            <BiCheck className='service_list-icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li> <li>
            <BiCheck className='service_list-icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li> <li>
            <BiCheck className='service_list-icon'/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </li>
        </ul>
        </article>
        {/* end of UX */}
      </div>
    </section>
  )
}

export default Services