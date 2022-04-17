import React from 'react'
import {AiFillMediumSquare} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>CodeByCrystal</a>

            <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#servces">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="medium"><AiFillMediumSquare/></a>
                <a href="linkedIn"><AiFillLinkedin/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; CodeByCrystal. All rights reserved.</small>
            </div>
        </footer>
    )

}

export default Footer