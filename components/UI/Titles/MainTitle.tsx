import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../../styles/UI/Titles/Titles.module.scss';

interface MainTitle {
  title: string;
}

const MainTitle: FC<MainTitle> = ({ title }) => {
  return (
    <h1 className={classes.MainTitle}>
      <span className={classes.Space}></span>
      {title.split('').map((char, i) => (
        <motion.span
          key={char + i}
          whileHover={{
            fontSize: '70px',
            transition: { type: 'spring', stiffness: 400 },
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
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
