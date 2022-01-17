import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import classes from '../../../styles/projects/projects.module.scss';

interface ImageGallery {
  photosPaths: string[];
}

const ImageGallery: FC<ImageGallery> = ({ photosPaths }) => {
  const [startIndex, setStartIndex] = useState(0);

  function buttonClickHandler(direction: 'forward' | 'backward') {
    if (direction === 'backward')
      setStartIndex((prev) => (prev === 0 ? photosPaths.length - 1 : --prev));
    else
      setStartIndex((prev) => (prev === photosPaths.length - 1 ? 0 : ++prev));
  }

  function getPartialArr() {
    let result: string[] = [];
    if (photosPaths.length <= 3) return photosPaths;
    if (startIndex + 3 > photosPaths.length - 1) {
      result = photosPaths.slice(startIndex);
      let currentIndex = 0;
      while (result.length < 3) {
        result.push(photosPaths[currentIndex]);
        currentIndex++;
      }
      return result;
    }
    return [...photosPaths].splice(startIndex, 3);
  }

  return (
    <div>
      <Link href={process.env.BASE_URL + photosPaths[startIndex]}>
        <Image src={photosPaths[startIndex]} width={830} height={400} />
      </Link>
      <br />
      {photosPaths.length > 3 && (
        <button onClick={() => buttonClickHandler('backward')}>{'<'}</button>
      )}
      {getPartialArr().map((src) => {
        return (
          <div
            key={src}
            className={
              src === photosPaths[startIndex] ? classes.CurrentImage : ''
            }
          >
            <Image
              onClick={() => setStartIndex(photosPaths.indexOf(src))}
              src={src}
              width={276.6}
              height={133.3}
            />
          </div>
        );
      })}
      {photosPaths.length > 3 && (
        <button onClick={() => buttonClickHandler('forward')}>{'>'}</button>
      )}
    </div>
  );
};

export default ImageGallery;
