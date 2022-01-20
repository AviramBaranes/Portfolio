import { FC } from 'react';
import FrameWorks from '../components/skills/FrameWorks';
import Languages from '../components/skills/Languages';
import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';

interface skills {}

const skills: FC<skills> = () => {
  return (
    <div>
      <MainTitle title='My Skills' />
      <SubTitle title='Programming Languages' />
      <Languages />
      <SubTitle title='Frame-Works, Libraries & Packages' />
      <FrameWorks />
    </div>
  );
};

export default skills;
