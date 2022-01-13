import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Project {
  src: StaticImageData;
  alt: string;
  name: string;
  path: string;
  index: number;
}

const Project: FC<Project> = ({ src, alt, name, path, index }) => {
  return (
    <div>
      <Link href={`projects/${path}`}>
        <div>
          <Image src={src} alt={alt} width={375} height={240} />
          <h6>{name}</h6>
        </div>
      </Link>
    </div>
  );
};

export default Project;
