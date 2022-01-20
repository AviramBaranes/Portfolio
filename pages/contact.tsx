import { FC } from 'react';
import Contact from '../components/contact/Contact';
import MainTitle from '../components/UI/Titles/MainTitle';

interface contact {}

const contact: FC<contact> = () => {
  return (
    <>
      <MainTitle title="Let's Keep In Touch" />
      <Contact />
    </>
  );
};

export default contact;
