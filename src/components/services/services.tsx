import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h2>My Skills</h2>
  
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>💻 Web Development</h3>
        </div>

        <ul className='service_list'>
          <li>
            <p>
            FrontEnd:
            <br/>
            ReactJS, Javascript, TypeScript, HTML, CSS.
            <br/>
            React Native, Xcode,
            Storybook, Jest, Enzyme, React Testing library.
            <br/><br/>  
            BackEnd:
            <br/>
            Python, Rest APIs, AWS.
            </p>
          </li>
          <li>
            <p>
            Database management: 
            <br/>
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
            <p>
              Effective communication, Attention to detail, Ability to learn quickly.
            </p>
          </li> 
          <li>
            <p>
              Strong presentation and networking skills. 
              <br/>
              Takes the intiative to learn and build on skill sets outside of work.
            </p>
          </li> 
        </ul>
        </article>
      </div>
    </section>
  )
}

export default Services