import { FC } from 'react';

import classes from '../../styles/projects/projects.module.scss';
import CoursesProjects from '../../components/projects/CoursesProjects';
import MyProjects from '../../components/projects/MyProjects';
import MainTitle from '../../components/UI/Titles/MainTitle';
import { motion } from 'framer-motion';
import { pageVariant } from '../../utils/pageAnimation';

interface projects {}

const projects: FC<projects> = () => {
  return (
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.ProjectsPage}
    >
      <MainTitle title='My Projects' />
      <MyProjects />
      <MainTitle title='Courses Projects' />
      <CoursesProjects />
    </motion.div>
  );
};

export default projects;
