import { FC } from 'react';

import classes from '../../styles/skills/skills.module.scss';
import { TECHNOLOGIES } from '../../utils/frameworksList';
import Technology from '../UI/Technology/Technology';

interface FrameWorks {}

const FrameWorks: FC<FrameWorks> = () => {
  const technologiesToNotDisplay = ['html', 'css', 'scss', 'typescript'];
  const frameWorks = TECHNOLOGIES.filter(
    (tech) => !technologiesToNotDisplay.includes(tech.name)
  );
  return (
    <div className={classes.FrameWorks}>
      {frameWorks.map((frameWork, i) => (
        <div key={frameWork.alt}>
          <Technology
            index={i}
            alt={frameWork.alt}
            src={frameWork.src}
            white={frameWork.white}
            link={frameWork.link}
          />
        </div>
      ))}
    </div>
  );
};

export default FrameWorks;
