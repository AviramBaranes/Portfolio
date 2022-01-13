import { FC } from 'react';
import LanguageChart from './LanguageChart';

interface Languages {}

const Languages: FC<Languages> = () => {
  const languages = [
    { name: 'HTML', color: '#FF7C00', skillLevel: 0.95 },
    { name: 'CSS', color: '#379AD5', skillLevel: 0.95 },
    { name: 'JavaScript', color: '#F7E018', skillLevel: 0.9 },
    { name: 'TypeScript', color: '#3178C6', skillLevel: 0.85 },
    { name: 'Java', color: '#EB2829', skillLevel: 0.6 },
    { name: 'Python', color: '#FFD340', skillLevel: 0.55 },
  ];
  return (
    <div>
      {languages.map((language, index) => (
        <LanguageChart
          name={language.name}
          color={language.color}
          skillLevel={language.skillLevel}
          index={index}
        />
      ))}
    </div>
  );
};

export default Languages;
