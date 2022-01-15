import { FC } from 'react';

interface ProjectDetailHeader {
  name: string;
  shortDescription: string;
  links: {
    github: string;
    website?: string;
  };
}

const ProjectDetailHeader: FC<ProjectDetailHeader> = ({
  name,
  shortDescription,
  links,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h6>{shortDescription}</h6>
      {links.website && (
        <a href={links.website} target='_blank'>
          {name}
        </a>
      )}
      <a href={links.github} target='_blank'>
        Github
      </a>
    </div>
  );
};

export default ProjectDetailHeader;
