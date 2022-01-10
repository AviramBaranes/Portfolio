import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface about {}

const about: FC<about> = () => {
  return (
    <>
      <div>
        <h3>About</h3>
        <p>
          I am an ambitious and motivated autodidact software developer with a
          passion to enrich and develop new skills and knowledge.
        </p>
        <p>
          A Full Stack developer, with experience building websites and web
          applications. I specialize in TypeScript and JavaScript, Node and
          React.
        </p>
        <p>
          Besides programming I love to do sport primarily MMA (black belt in
          Karate) and calisthenics.
        </p>
        <Link href='/contact'>Sounds Good!</Link>
      </div>
      {/* <Image src={} /> */}
    </>
  );
};

export default about;
