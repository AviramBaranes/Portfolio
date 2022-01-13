import { FC } from 'react';
import LanguageChart from './LanguageChart';

interface Languages {}

const Languages: FC<Languages> = () => {
  return (
    <div>
      <LanguageChart
        color='blue'
        name='TypeScript'
        skillLevel={0.8}
        index={0}
      />
    </div>
  );
};

export default Languages;
