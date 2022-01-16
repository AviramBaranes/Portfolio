import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

interface ImageGallery {
  photosPaths: string[];
}

const ImageGallery: FC<ImageGallery> = ({ photosPaths }) => {
  const [currentImage, setCurrentImage] = useState(
    photosPaths.find((path) => path.endsWith('.gif')) ||
      photosPaths[Math.floor(photosPaths.length / 2)]
  );

  return (
    <div>
      <Link href={process.env.BASE_URL + currentImage}>
        <Image src={currentImage} width={830} height={400} />
      </Link>
      <br />
      {photosPaths.map((src) => {
        if (src !== currentImage) {
          return (
            <Image
              onClick={() => setCurrentImage(src)}
              src={src}
              width={276.6}
              height={133.3}
            />
          );
        }
      })}
    </div>
  );
};

export default ImageGallery;
