import { FC } from 'react';

import SocialMediaAppMainPhoto from '../../public/projects/SocialMediaApp/main.png';
import MusicAppMainPhoto from '../../public/projects/MusicApp/main.png';
import MovieAppMainPhoto from '../../public/projects/MoviesApp/main.png';
import Project from './Project';

interface CoursesProjects {}

const CoursesProjects: FC<CoursesProjects> = () => {
  const projects = [
    {
      src: SocialMediaAppMainPhoto,
      alt: 'social-media-app-main-photo',
      name: 'Social Media App',
      path: 'social-media-app',
      description:
        'A MERN stack application with made by next as a full stack framework.',
    },
    {
      src: MusicAppMainPhoto,
      alt: 'music-app-main-photo',
      name: 'Music App',
      path: 'music-app',
      description:
        "A simple react application for playing a narrow set of music plays stored in the app's file itself.",
    },
    {
      src: MovieAppMainPhoto,
      alt: 'movies-app-main-photo',
      name: 'Movies App',
      path: 'movies-app',
      description:
        'A react application with a simple search engine for searching for movies and display their content via 3th party API.',
    },
  ];
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
            description={project.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CoursesProjects;
