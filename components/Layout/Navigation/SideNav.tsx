import Link from 'next/link';
import Image from 'next/image';
import { FC, useState } from 'react';

import classes from '../../../styles/Navigation/SideNav.module.scss';
import me from '../../../public/Me/aviram.jpg';
import linkedInIcon from '../../../public/icons/linkedin-icon.svg';
import githubIcon from '../../../public/icons/github-icon.svg';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavBar from './NavBar';

const SideNav: FC = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <div className={classes.SideNav}>
      <Backdrop setShowModal={setShouldDisplay} />
      <div>
        <div
          className={classes.Burger}
          onClick={() => setShouldDisplay((prev) => !prev)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {shouldDisplay && (
          <div className={classes.NavigationSec}>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
