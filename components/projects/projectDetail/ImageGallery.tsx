import Image from 'next/image';
import { FC, useState } from 'react';

interface ImageGallery {
  photosPaths: string[];
}

const ImageGallery: FC<ImageGallery> = ({ photosPaths }) => {
  const [currentImage, setCurrentImage] = useState(
    photosPaths[Math.floor(photosPaths.length / 2)]
  );

  return (
    <div>
      <Image src={currentImage} width={300} height={200} />
    </div>
  );
};

export default ImageGallery;
