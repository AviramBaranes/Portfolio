import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import classes from '../styles/About/about.module.scss';
import AnimatedTitle from '../components/UI/Titles/MainTitle';
import { motion } from 'framer-motion';
import { pageVariant } from '../utils/pageAnimation';

interface about {}

const about: FC<about> = () => {
  return (
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.Main}
    >
      <div>
        <AnimatedTitle title='About Me' />
        <p>
          I am a full stack web developer, with experience building websites and
          web applications. I specialize in TypeScript, JavaScript, Node and
          React.
        </p>
        <p>
          Ambitious and motivated autodidact with boundless enthusiasm and
          passion to enrich and develop new skills and knowledge. I love
          challenging myself with things that matter and to keep learning new
          things.
        </p>
        <p>
          Besides programming I love to do sport primarily MMA (black belt in
          Karate) and calisthenics.
        </p>
        <Link href='/contact'>
          <button className='contact-btn'>Sounds Good!</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default about;
