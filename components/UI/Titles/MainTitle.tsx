import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../../styles/UI/Titles/MainTitle.module.scss';

interface MainTitle {
  title: string;
}

const MainTitle: FC<MainTitle> = ({ title }) => {
  return (
    <h1>
      <span className={classes.Space}></span>
      {title.split('').map((char, i) => (
        <motion.span
          key={char + i}
          whileHover={{
            fontSize: '6vh',
            transition: { type: 'spring', stiffness: 400 },
          }}
          initial={{ opacity: 0, fontSize: '4vh' }}
          animate={{
            fontSize: '4vh',
            opacity: 1,
          }}
          className={classes.Char}
          transition={{ duration: 0.14, delay: i * 0.075 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default MainTitle;
