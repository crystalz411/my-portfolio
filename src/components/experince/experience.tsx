import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Technical skills</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon' />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>3+ years experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>2+ years experience</small>

                            </div>
                        </article>

                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>2+ years experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>3+ years experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*  */}
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>Python</h4>
                            <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>NodeJS</h4>
                            <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>SQL</h4>
                            <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsPatchCheckFill className='experience_details-icon'/>
                            <div>
                            <h4>AWS</h4>
                            <small className='text-light'>1+ years experience</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Experience