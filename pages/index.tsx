import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';
import classes from '../styles/Home/Home.module.scss';

const Home: NextPage = () => {
  const contentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.25 },
    },
  };

  return (
    <div className={classes.Main}>
      <MainTitle title='Welcome !' />
      <SubTitle title="I'm Aviram Baranes," />
      <SubTitle title='A full stack developer' />
      <motion.h4 variants={contentVariant} initial='hidden' animate='visible'>
        Front End (React.js) / Back End (Node.js) / TypeScript
      </motion.h4>
      <Link href='contact'>
        <motion.button
          variants={contentVariant}
          initial='hidden'
          animate='visible'
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
