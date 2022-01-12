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
          I am a Full Stack developer, with experience building websites and web
          applications. I specialize in TypeScript, JavaScript, Node and React.
        </p>
        <p>
          I am an ambitious and motivated autodidact developer with boundless
          enthusiasm and passion to enrich and develop new skills and knowledge.
          <br />I love challenging my self with things that matters and to keep
          learning new things.
        </p>
        <p>
          Besides programming I love to do sport primarily MMA (black belt in
          Karate) and calisthenics.
        </p>
        <Link href='/contact'>Sounds Good!</Link>
      </div>
      <Image
        src='/about-page-image.jpg'
        width={350}
        height={450}
        alt='web-development-image'
      />
    </>
  );
};

export default about;
