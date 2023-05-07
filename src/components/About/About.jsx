import './About.css';

import {
  FaEnvelope,
  FaFreeCodeCamp,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

import { about } from '../../portfolio';

const About = () => {
  const { name, role, description, roleDescription, social } = about;

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
            {Object.keys(social).map((key) => {
              const Icon = {
                email: FaEnvelope,
                freecodecamp: FaFreeCodeCamp,
                twitter: FaTwitter,
                github: FaGithub,
                linkedin: FaLinkedinIn,
              }[key];

              return (
                Icon &&
                social[key] && (
                  <a
                    href={social[key]}
                    aria-label={key}
                    className='link link--icon'
                    key={key}
                  >
                    <div className='social'>
                      <Icon />
                    </div>
                  </a>
                )
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
