import { FC } from 'react';
import CoursesProjects from '../../components/projects/CoursesProjects';
import MyProjects from '../../components/projects/MyProjects';
import MainTitle from '../../components/UI/Titles/MainTitle';

interface projects {}

const projects: FC<projects> = () => {
  return (
    <>
      <MainTitle title='My Projects' />
      <MyProjects />
      <MainTitle title='Courses Projects' />
      <CoursesProjects />
    </>
  );
};

export default projects;
