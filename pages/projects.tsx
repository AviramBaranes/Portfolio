import { FC } from 'react';
import CourseProjects from '../components/projects/CourseProjects';
import MyProjects from '../components/projects/MyProjects';

interface projects {}

const projects: FC<projects> = () => {
  return (
    <>
      <MyProjects />
      <CourseProjects />
    </>
  );
};

export default projects;
