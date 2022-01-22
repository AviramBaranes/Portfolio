import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../styles/projects/projects.module.scss';
import SubTitle from '../UI/Titles/SubTitle';

interface Project {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  path: string;
  index: number;
}

const Project: FC<Project> = ({ src, alt, name, path, index, description }) => {
  return (
    <motion.div
      initial={{ translateY: '100%', translateX: '-100%', opacity: 0 }}
      animate={{ translateY: 0, translateX: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={classes.Project}
    >
      <Link href={`projects/${path}`}>
        <div>
          <SubTitle title={name} />
          <Image src={src} alt={alt} width={375} height={240} />
          <p>{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Project;
