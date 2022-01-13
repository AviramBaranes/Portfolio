import Link from 'next/link';
import { motion } from 'framer-motion';

import classes from '../../../styles/Navigation/NavBar.module.scss';
import me from '../../../public/Me/aviram.jpg';
import linkedInIcon from '../../../public/icons/linkedin-icon.svg';
import githubIcon from '../../../public/icons/github-icon.svg';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <motion.header
      animate={{ x: 0 }}
      initial={{ x: '-100%' }}
      transition={{ duration: 0.4 }}
      className={classes.NavBar}
    >
      <nav>
        <div>
          <Link href='/'>
            <div className={classes.Logo}>
              <Image src={me} width={100} height={100} />
              <h6>Aviram Baranes</h6>
              <p>Web Developer</p>
            </div>
          </Link>
        </div>
        <ul className={classes.Links}>
          <Link href='/about'>
            <li>About</li>
          </Link>
          <Link href='/skills'>
            <li>My Skills</li>
          </Link>
          <Link href='/projects'>
            <li>Projects</li>
          </Link>
          <Link href='/contact'>
            <li>Contact</li>
          </Link>
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
      </nav>
    </motion.header>
  );
};

export default NavBar;
