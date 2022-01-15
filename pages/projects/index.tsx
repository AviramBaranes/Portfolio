import { FC } from 'react';
import CoursesProjects from '../../components/projects/CoursesProjects';
import MyProjects from '../../components/projects/MyProjects';

interface projects {}

const projects: FC<projects> = () => {
  return (
    <>
      <MyProjects />
      <CoursesProjects />
    </>
  );
};

export default projects;
