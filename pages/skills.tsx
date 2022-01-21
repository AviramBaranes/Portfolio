import { FC } from 'react';

import classes from '../styles/skills/skills.module.scss';
import FrameWorks from '../components/skills/FrameWorks';
import Languages from '../components/skills/Languages';
import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';

interface skills {}

const skills: FC<skills> = () => {
  return (
    <div className={classes.Skills}>
      <MainTitle title='My Skills' />
      <SubTitle title='Programming Languages' />
      <Languages />
      <SubTitle title='Frame-Works, Libraries & Packages' />
      <br />
      <FrameWorks />
    </div>
  );
};

export default skills;
