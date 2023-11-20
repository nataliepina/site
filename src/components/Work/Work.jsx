import './Work.css';

import uniqid from 'uniqid';

import { work } from '../../portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const Work = () => {
  if (!work.length) return null;

  return (
    <section id="work" className="section work">
      <h2 className="section__title">Work</h2>

      <div className="projects__grid">
        {work.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
