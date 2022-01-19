import ReactDOM from 'react-dom';
import { FC } from 'react';

import classes from '../../../styles/contact/contact.module.scss';

interface Modal {
  text: string;
  className: string;
}

const Modal: FC<Modal> = ({ className, text }) => {
  return ReactDOM.createPortal(
    <div className={`${className} ${classes.Modal}`}>
      <h3>{text}</h3>
    </div>,
    document.getElementById('overlays')!
  );
};

export default Modal;
