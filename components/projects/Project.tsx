import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import SubTitle from '../UI/Titles/SubTitle';

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
          <SubTitle title={name} />
          <Image src={src} alt={alt} width={375} height={240} />
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
