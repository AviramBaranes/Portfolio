import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classes from '../../../styles/Navigation/SideNav.module.scss';
import me from '../../../public/Me/aviram.jpg';
import linkedInIcon from '../../../public/icons/linkedin-icon.svg';
import githubIcon from '../../../public/icons/github-icon.svg';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Burger from '../../UI/Burger/Burger';

const SideNav: FC = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  const transition = {
    duration: 0.54,
    ease: 'easeInOut',
  };

  const navigationVariant = {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition,
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      {shouldDisplay && <Backdrop setShowModal={setShouldDisplay} />}
      <div className={classes.SideNav}>
        <div
          className={classes.Burger}
          onClick={() => setShouldDisplay((prev) => !prev)}
        >
          <Burger shouldDisplay={shouldDisplay} />
        </div>
        <AnimatePresence>
          {shouldDisplay && (
            <motion.div
              variants={navigationVariant}
              animate='visible'
              initial='hidden'
              exit='exit'
              className={classes.NavigationSec}
            >
              <div>
                <Link href='/'>
                  <div className={classes.Logo}>
                    <Image src={me} width={100} height={100} />
                    <h6>Aviram Baranes</h6>
                    <p>Web Developer</p>
                  </div>
                </Link>
              </div>
              <ul
                className={classes.Links}
                onClick={(e) => {
                  if ((e.target as any).tagName === 'A') {
                    setShouldDisplay(false);
                  }
                }}
              >
                <li>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <Link href='/skills'>My Skills</Link>
                </li>
                <li>
                  <Link href='/projects'>Projects</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
              <ul className={classes.Icons}>
                <li>
                  <a
                    href='https://www.linkedin.com/in/aviram-baranes/'
                    target='_blank'
                  >
                    <Image src={linkedInIcon} width={30} height={30} />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/AviramBaranes' target='_blank'>
                    <Image src={githubIcon} width={30} height={30} />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SideNav;
