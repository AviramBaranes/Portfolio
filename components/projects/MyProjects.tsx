import { FC } from 'react';

import HlifeMainPhoto from '../../public/projects/Hlife/home-page.png';
import ReminderAppMainPhoto from '../../public/projects/ReminderApp/main.png';
import TaskManagerMainPhoto from '../../public/projects/TimeManager/main.png';
import Project from './Project';

interface MyProjects {}

const MyProjects: FC<MyProjects> = () => {
  //prettier-ignore
  const projects = [
        {src:HlifeMainPhoto, alt:'hlife-main-photo', name:'Hlife',path:'hlife'},
        {src:ReminderAppMainPhoto, alt:'reminderApp-main-photo', name:'Reminder App',path:'reminder-app'},
        {src:TaskManagerMainPhoto, alt:'taskManager-main-photo', name:'Task Manager',path:'time-manager'},
    ]
  return (
    <div>
      {projects.map((project, i) => (
        <div key={project.alt}>
          <Project
            src={project.src}
            alt={project.alt}
            name={project.name}
            path={project.path}
            index={i}
          />
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
