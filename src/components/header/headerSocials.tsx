import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
 

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a className='scroll-btn header_social' href="https://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>        
        <a className='scroll-btn header_social' href="https://github.com" target="_blank" rel="noreferrer"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials 