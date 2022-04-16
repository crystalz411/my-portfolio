import React, { useRef }  from 'react'
import {MdOutlineMail} from 'react-icons/md'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
    const myform = useRef(null) 
      
    const sendEmail = (e: any) => {
        e.preventDefault()
    
        emailjs.sendForm('service_fcq8k1o', 'template_lzxmnn5', myform.current || '', 'Men7ipr1hQAJWp7EL')
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <MdOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>myemail@email.com</h5>
                        <a href="mailto:some@email.com">
                            Send a meaasage
                        </a>
                    </article>
                </div>
                <form ref={myform} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' id='' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact