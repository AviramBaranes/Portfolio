import Link from 'next/link';
import { FC, useState } from 'react';

import classes from '../../../styles/Navigation/SideNav.module.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideNav: FC = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <div className={classes.SideNav}>
      <Backdrop setShowModal={setShouldDisplay} />
      <div>
        <button onClick={() => setShouldDisplay((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {shouldDisplay && (
          <div>
            <div>
              <Link href='/'></Link>
            </div>
            <ul>
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
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/aviram-baranes/'
                  target='_blank'
                >
                  linked in
                </a>
              </li>
              <li>
                <a href='https://github.com/AviramBaranes' target='_blank'>
                  github
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
