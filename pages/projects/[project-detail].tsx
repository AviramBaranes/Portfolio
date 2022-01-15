import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises';

import { FC } from 'react';

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
      {/* <ProjectDetailHeader
        name={name}
        description={shortDescription}
        links={links}
      />
      <ImageGallery photoPaths={photosPaths} />
      <ProjectDetailFooter
        description={description}
        technologies={technologies}
      /> */}
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
