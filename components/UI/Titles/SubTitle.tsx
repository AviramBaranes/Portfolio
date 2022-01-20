import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../../styles/UI/Titles/Titles.module.scss';

interface SubTitle {
  title: string;
}

const SubTitle: FC<SubTitle> = ({ title }) => {
  return (
    <h3 className={classes.SubTitle}>
      {title.split('').map((char, i) => (
        <motion.span
          key={char + i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.1, delay: i * 0.075 }}
        >
          {char}
        </motion.span>
      ))}
    </h3>
  );
};
export default SubTitle;
