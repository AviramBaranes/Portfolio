import Link from 'next/link';
import { motion } from 'framer-motion';

import classes from '../../../styles/Navigation/NavBar.module.scss';
import me from '../../../public/Me/app-icon.png';
import linkedInIcon from '../../../public/icons/contact/linkedin-icon.svg';
import githubIcon from '../../../public/icons/contact/github-icon.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
  const { pathname } = useRouter();
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
              <Image src={me} width={100} height={100} alt='Profile pic' />
              <h6>Aviram Baranes</h6>
              <p>Web Developer</p>
            </div>
          </Link>
        </div>
        <ul className={classes.Links}>
          <Link href='/about'>
            <li className={pathname === '/about' ? classes.Active : ''}>
              About
            </li>
          </Link>
          <Link href='/skills'>
            <li className={pathname === '/skills' ? classes.Active : ''}>
              My Skills
            </li>
          </Link>
          <Link href='/projects'>
            <li className={pathname === '/projects' ? classes.Active : ''}>
              Projects
            </li>
          </Link>
          <Link href='/contact'>
            <li className={pathname === '/contact' ? classes.Active : ''}>
              Contact
            </li>
          </Link>
        </ul>
        <ul className={classes.Icons}>
          <li>
            <a
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/aviram-baranes/'
              target='_blank'
            >
              <Image
                src={linkedInIcon}
                width={30}
                height={30}
                alt='linkedin-icon'
              />
            </a>
          </li>
          <li>
            <a
              rel='noopener noreferrer'
              href='https://github.com/AviramBaranes'
              target='_blank'
            >
              <Image
                src={githubIcon}
                width={30}
                height={30}
                alt='github-icon'
              />
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
