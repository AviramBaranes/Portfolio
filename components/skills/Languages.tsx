import { FC } from 'react';

import classes from '../../styles/skills/skills.module.scss';
import LanguageChart from './LanguageChart';

interface Languages {}

const Languages: FC<Languages> = () => {
  const languages = [
    { name: 'JavaScript', color: '#F7E018', skillLevel: 0.95 },
    { name: 'TypeScript', color: '#3178C6', skillLevel: 0.9 },
    { name: 'Java', color: '#EB2829', skillLevel: 0.6 },
    { name: 'Python', color: '#FFD340', skillLevel: 0.5 },
  ];
  return (
    <div className={classes.Languages}>
      {languages.map((language, index) => (
        <div key={language.name}>
          <LanguageChart
            name={language.name}
            color={language.color}
            skillLevel={language.skillLevel}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default Languages;
