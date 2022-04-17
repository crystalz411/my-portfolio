import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'
import {AiOutlineLineChart} from 'react-icons/ai'

import { useState } from 'react'
import './nav.css'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" 
            className={activeNav === '#' ? 'active' : ''}>
                <AiOutlineHome /></a>
    
            <a href="#about" 
            className={activeNav === '#about' ? 'active' : ''}
            onClick={() => setActiveNav('#about')}>
                <AiOutlineUser /></a>

            <a href="#experience"
            className={activeNav === '#experience' ? 'active' : ''}
            onClick={() => setActiveNav('#experience')}>
                <BiBook /></a>

            {/* <a href="#services"
            className={activeNav === '#services' ? 'active' : ''}
            onClick={() => setActiveNav('#services')}>
                <RiServiceLine /></a> */}

            <a href="#portfolio"
            className={activeNav === '#portfolio' ? 'active' : ''}
            onClick={() => setActiveNav('#portfolio')}>
                <AiOutlineLineChart /></a>

            <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}
            onClick={() => setActiveNav('#contact')}>
                <BiMessageSquareDots /></a>
        </nav>
    )

}

export default Nav