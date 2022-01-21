import { FC } from 'react';

import classes from '../../styles/projects/projects.module.scss';
import CoursesProjects from '../../components/projects/CoursesProjects';
import MyProjects from '../../components/projects/MyProjects';
import MainTitle from '../../components/UI/Titles/MainTitle';

interface projects {}

const projects: FC<projects> = () => {
  return (
    <div className={classes.ProjectsPage}>
      <MainTitle title='My Projects' />
      <MyProjects />
      <MainTitle title='Courses Projects' />
      <CoursesProjects />
    </div>
  );
};

export default projects;
