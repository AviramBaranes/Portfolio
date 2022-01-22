import { FC } from 'react';

import classes from '../styles/contact/contact.module.scss';
import Contact from '../components/contact/Contact';
import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';
import { motion } from 'framer-motion';
import { pageVariant } from '../utils/pageAnimation';

interface contact {}

const contact: FC<contact> = () => {
  return (
    <motion.div
      variants={pageVariant}
      animate='visible'
      initial='hidden'
      exit='exit'
      className={classes.ContactPage}
    >
      <MainTitle title='Contact Me' />
      <SubTitle title="Let's keep in touch" />
      <Contact />
    </motion.div>
  );
};

export default contact;
