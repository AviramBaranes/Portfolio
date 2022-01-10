import type { NextPage } from 'next';
import Link from 'next/link';
import classes from '../styles/Home/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={classes.Main}>
      <h1>
        Welcome !
        <br />
        I'm Aviram Baranes,
        <br />A Full stack developer
      </h1>
      <h4>Front End (React.js) / Back End (Node.js) / TypeScript</h4>
      <Link href='contact'>
        <button>Contact Me</button>
      </Link>
    </div>
  );
};

export default Home;
