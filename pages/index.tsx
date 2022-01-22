import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';
import classes from '../styles/Home/home.module.scss';
import { pageVariant } from '../utils/pageAnimation';

const Home: NextPage = () => {
  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1.25 },
    },
  };

  return (
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.Main}
    >
      <MainTitle title='Welcome!' />
      <div className={classes.Content}>
        <div className={classes.SubTitles}>
          <SubTitle
            title="I'm Aviram Baranes, A full stack web developer"
            fast
          />
        </div>
        <motion.h4 variants={contentVariant} initial='hidden' animate='visible'>
          Front End (React.js) / Back End (Node.js) / TypeScript
        </motion.h4>
        <Link href='contact'>
          <motion.button
            className='contact-btn'
            variants={contentVariant}
            initial='hidden'
            animate='visible'
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
