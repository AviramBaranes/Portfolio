import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../../styles/UI/Titles/Titles.module.scss';

interface SubTitle {
  title: string;
  fast?: boolean;
}

const SubTitle: FC<SubTitle> = ({ title, fast = false }) => {
  const duration = fast ? 0.03 : 0.1;
  const delayFactor = fast ? 0.03 : 0.075;
  return (
    <h3 className={classes.SubTitle}>
      {title.split('').map((char, i) => (
        <motion.span
          key={char + i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration, delay: i * delayFactor }}
        >
          {char}
        </motion.span>
      ))}
    </h3>
  );
};
export default SubTitle;
