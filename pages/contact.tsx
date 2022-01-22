import { FC } from 'react';

import classes from '../styles/contact/contact.module.scss';
import Contact from '../components/contact/Contact';
import MainTitle from '../components/UI/Titles/MainTitle';
import SubTitle from '../components/UI/Titles/SubTitle';

interface contact {}

const contact: FC<contact> = () => {
  return (
    <div className={classes.ContactPage}>
      <MainTitle title='Contact Me' />
      <SubTitle title="Let's keep in touch" />
      <Contact />
    </div>
  );
};

export default contact;
