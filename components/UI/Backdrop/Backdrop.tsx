import { FC, SetStateAction } from 'react';

interface Backdrop {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const Backdrop: FC<Backdrop> = ({ setShowModal }) => {
  return <div onClick={() => setShowModal(false)}></div>;
};

export default Backdrop;
