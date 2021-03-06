import { FC } from 'react';

import classes from '../../styles/projects/projects.module.scss';
import HlifeMainPhoto from '../../public/projects/Hlife/home-page.png';
import ReminderAppMainPhoto from '../../public/projects/ReminderApp/main.png';
import TaskManagerMainPhoto from '../../public/projects/TimeManager/main.png';
import Project from './Project';

interface MyProjects {}

const MyProjects: FC<MyProjects> = () => {
  const projects = [
    {
      src: HlifeMainPhoto,
      alt: 'hlife-main-photo',
      name: 'Hlife',
      path: 'hlife',
      description:
        'By far my biggest project, you should definitely check it out.',
    },
    {
      src: ReminderAppMainPhoto,
      alt: 'reminderApp-main-photo',
      name: 'Reminder App',
      path: 'reminder-app',
      description:
        'A MERN stack typescript app with real time TCP server and high level animation using framer motion.',
    },
    {
      src: TaskManagerMainPhoto,
      alt: 'taskManager-main-photo',
      name: 'Task Manager',
      path: 'time-manager',
      description:
        'A vanilla javascript (but with typescript) App for managing tasks and time.',
    },
  ];
  return (
    <div className={classes.ProjectsSec}>
      {projects.map((project, i) => (
        <div key={project.alt}>
          <Project
            src={project.src}
            alt={project.alt}
            name={project.name}
            path={project.path}
            index={i}
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
