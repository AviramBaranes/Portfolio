import { FC } from 'react';

import classes from '../styles/skills/skills.module.scss';
import FrameWorks from '../components/skills/FrameWorks';
import Languages from '../components/skills/Languages';
import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';
import { motion } from 'framer-motion';
import { pageVariant } from '../utils/pageAnimation';

interface skills {}

const skills: FC<skills> = () => {
  return (
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.Skills}
    >
      <MainTitle title='My Skills' />
      <SubTitle title='Programming Languages' />
      <Languages />
      <SubTitle title='Frame-Works, Libraries & Packages' />
      <br />
      <FrameWorks />
    </motion.div>
  );
};

export default skills;
