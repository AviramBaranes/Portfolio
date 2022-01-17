import { FC } from 'react';
import Contact from '../components/contact/Contact';

interface contact {}

const contact: FC<contact> = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default contact;
