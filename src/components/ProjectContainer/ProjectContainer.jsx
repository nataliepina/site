import './ProjectContainer.css';

import { FaGithub } from 'react-icons/fa';
import { MdOutlineOpenInNew } from 'react-icons/md';
import uniqid from 'uniqid';

import stoicGif from './assets/stoic.gif';
import uiKitGif from './assets/ui-kit.gif';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <div className='project__img-container'>
      {project.name === 'UI Kit' ? (
        <img className='project__gif' src={uiKitGif} alt={project.name} />
      ) : (
        <img className='project__gif' src={stoicGif} alt={project.name} />
      )}
    </div>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithub />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MdOutlineOpenInNew />
      </a>
    )}
  </div>
);

export default ProjectContainer;
