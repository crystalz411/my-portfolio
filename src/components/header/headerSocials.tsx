import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
 

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a className='scroll-btn header_social' href="https://www.linkedin.com/in/crystal-y-649170124/"><AiFillLinkedin/></a>        
        <a className='scroll-btn header_social' href="https://gitlab.com/CrystalYal"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials 