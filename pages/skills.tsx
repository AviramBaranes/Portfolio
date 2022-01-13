import { FC } from 'react';
import FrameWorks from '../components/skills/FrameWorks';
import Languages from '../components/skills/Languages';

interface skills {}

const skills: FC<skills> = () => {
  return (
    <div>
      <Languages />
      <FrameWorks />
    </div>
  );
};

export default skills;
