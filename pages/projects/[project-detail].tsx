import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';
import fs from 'fs/promises';

import classes from '../../styles/projects/detail-project.module.scss';
import ProjectDetailHeader from '../../components/projects/projectDetail/ProjectDetailHeader';
import ImageGallery from '../../components/projects/projectDetail/ImageGallery';
import ProjectDetailFooter from '../../components/projects/projectDetail/ProjectDetailFooter';
import { motion } from 'framer-motion';
import { pageVariant } from '../../utils/pageAnimation';

interface DetailProject {
  name: string;
  shortDescription: string;
  links: {
    github: string;
    website?: string;
  };
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
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.ProjectDetailPage}
    >
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
    </motion.div>
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

  const jsonData = await fs.readFile(dataFilePath);

  const projectDetailData = JSON.parse(jsonData.toString());
  const props = { ...projectDetailData };

  const photosDirPath = path.join(
    process.cwd(),
    'public',
    'projects',
    props.photosDirName
  );
  const photosPaths = (await fs.readdir(photosDirPath)).map(
    (fileName) => `/projects/${props.photosDirName}/${fileName}`
  );
  delete props.photoDirName;
  props.photosPaths = photosPaths;
  return { props };
};
