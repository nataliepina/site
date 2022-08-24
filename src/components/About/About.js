import './About.css'

import {
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

import { about } from '../../portfolio'

const About = () => {
  const { name, role, description, roleDescription, social } = about

  return (
    <div className='about'>
      {name && (
        <h1>
          <span className='about-small code'>Hi, I&#39;m</span>
          <span className='about__name gradient-text'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role code'>{role}</h2>}
      {roleDescription && <p className='about__desc'>{roleDescription}</p>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact'>
        {social && (
          <>
            {social.freecodecamp && (
              <a
                href={social.freecodecamp}
                aria-label='freecodecamp'
                className='link link--icon'
              >
                <FaFreeCodeCamp />
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                aria-label='twitter'
                className='link link--icon'
              >
                <FaTwitter />
              </a>
            )}

            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedinIn />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
