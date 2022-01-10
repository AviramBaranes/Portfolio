import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href='/'>logo</Link>
        </div>
        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/skills'>My Skills</Link>
          </li>
          <li>
            <Link href='/projects'>projects</Link>
          </li>
          <li>
            <Link href='/contact'>contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/aviram-baranes/'
              target='_blank'
            ></a>
          </li>
          <li>
            <a href='https://github.com/AviramBaranes' target='_blank'></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
