import { FC } from 'react';
import MainTitle from '../../UI/Titles/MainTitle';
import SubTitle from '../../UI/Titles/SubTitle';

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
      <MainTitle title={name} />
      <p>{shortDescription}</p>
      <ul>
        {links.website && (
          <li>
            <a href={links.website} target='_blank'>
              {name} (website url)
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
