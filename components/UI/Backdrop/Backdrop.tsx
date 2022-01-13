import { FC, SetStateAction } from 'react';

import classes from '../../../styles/UI/backdrop/backdrop.module.scss';

interface Backdrop {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const Backdrop: FC<Backdrop> = ({ setShowModal }) => {
  return (
    <div className={classes.Backdrop} onClick={() => setShowModal(false)}></div>
  );
};

export default Backdrop;
