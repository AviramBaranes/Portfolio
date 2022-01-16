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
      <p>{shortDescription}</p>
      <ul>
        {links.website && (
          <li>
            <a href={links.website} target='_blank'>
              {name} (url)
            </a>
          </li>
        )}
        <li>
          <a href={links.github} target='_blank'>
            Git repo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDetailHeader;
