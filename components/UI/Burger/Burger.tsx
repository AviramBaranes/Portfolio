import { FC } from 'react';
import { motion } from 'framer-motion';

interface Burger {
  shouldDisplay: boolean;
}

const Burger: FC<Burger> = ({ shouldDisplay }) => {
  const burgerVariant_top = {
    animate: { rotate: 45, originX: 0 },
    default: { rotate: 0 },
  };
  const burgerVariant_middle = {
    animate: { opacity: 0 },
    default: { opacity: 1 },
  };
  const burgerVariant_bottom = {
    animate: { rotate: -45, originX: 0, y: 0, x: -1 },
    default: { rotate: 0 },
  };
  return (
    <>
      <motion.div
        variants={burgerVariant_top}
        animate={shouldDisplay ? 'animate' : 'default'}
        initial={shouldDisplay ? 'default' : 'animate'}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      ></motion.div>
      <motion.div
        variants={burgerVariant_middle}
        animate={shouldDisplay ? 'animate' : 'default'}
        initial={shouldDisplay ? 'default' : 'animate'}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div
        variants={burgerVariant_bottom}
        animate={shouldDisplay ? 'animate' : 'default'}
        initial={shouldDisplay ? 'default' : 'animate'}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      ></motion.div>
    </>
  );
};

export default Burger;
