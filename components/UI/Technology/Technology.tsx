import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import classes from '../../../styles/skills/skills.module.scss';

interface Technology {
  index: number;
  src: StaticImageData;
  alt: string;
  link: string;
  white?: boolean;
}

const Technology: FC<Technology> = ({ white, src, alt, link, index }) => {
  return (
    <motion.div
      className={white ? classes.White : ''}
      animate={{ y: 0, x: 0, opacity: 1 }}
      initial={{ y: '-100%', x: '-100%', opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.1 * index + 0.5 }}
      key={alt}
    >
      <a href={link} target='_blank'>
        <Image src={src} width={75} height={75} alt={alt} />
      </a>
    </motion.div>
  );
};

export default Technology;
