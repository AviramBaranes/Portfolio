import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Project {
  src: StaticImageData;
  alt: string;
  name: string;
  description: string;
  path: string;
  index: number;
}

const Project: FC<Project> = ({ src, alt, name, path, index, description }) => {
  return (
    <div>
      <Link href={`projects/${path}`}>
        <div>
          <h3>{name}</h3>
          <Image src={src} alt={alt} width={375} height={240} />
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
