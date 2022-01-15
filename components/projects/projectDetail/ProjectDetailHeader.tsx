import { FC } from 'react';

interface ProjectDetailHeader {
  name: string;
  shortDescription: string;
  links: string[];
}

const ProjectDetailHeader: FC<ProjectDetailHeader> = ({
  name,
  shortDescription,
  links,
}) => {
  return <div></div>;
};

export default ProjectDetailHeader;
