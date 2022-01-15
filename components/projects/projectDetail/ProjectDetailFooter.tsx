import { FC } from 'react';
import { TECHNOLOGIES } from '../../../utils/frameworksList';
import Technology from '../../UI/Technology/Technology';

interface ProjectDetailFooter {
  description: string;
  technologies: string[];
}

const ProjectDetailFooter: FC<ProjectDetailFooter> = ({
  description,
  technologies,
}) => {
  const technologiesToDisplay = TECHNOLOGIES.filter((tech) =>
    technologies.includes(tech.name)
  );
  return (
    <div>
      <p>{description}</p>
      {technologiesToDisplay.map((technology, i) => (
        <div key={technology.alt}>
          <Technology
            index={i}
            alt={technology.alt}
            src={technology.src}
            white={technology.white}
            link={technology.link}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailFooter;
