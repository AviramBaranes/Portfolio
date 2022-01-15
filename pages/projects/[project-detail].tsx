import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises';

import ProjectDetailHeader from '../../components/projects/projectDetail/ProjectDetailHeader';
import ImageGallery from '../../components/projects/projectDetail/ImageGallery';
import ProjectDetailFooter from '../../components/projects/projectDetail/ProjectDetailFooter';

interface DetailProject {
  name: string;
  shortDescription: string;
  links: string[];
  photosPaths: string[];
  description: string;
  technologies: string[];
}

const DetailProject: FC<DetailProject> = ({
  name,
  shortDescription,
  links,
  photosPaths,
  description,
  technologies,
}) => {
  return (
    <>
      <ProjectDetailHeader
        name={name}
        shortDescription={shortDescription}
        links={links}
      />
      <ImageGallery photosPaths={photosPaths} />
      <ProjectDetailFooter
        description={description}
        technologies={technologies}
      />
    </>
  );
};

export default DetailProject;

export const getStaticPaths: GetStaticPaths = async () => {
  const dataDirPath = path.join(process.cwd(), 'data');
  const paths = (await fs.readdir(dataDirPath)).map((fileName) => ({
    params: { 'project-detail': fileName.split('.json')[0] },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const currentPath = `${params!['project-detail']}.json`;
  const dataFilePath = path.join(process.cwd(), 'data', currentPath);
  console.log(dataFilePath);

  const jsonData = await fs.readFile(dataFilePath);

  const props = JSON.parse(jsonData.toString());
  return { props };
};
