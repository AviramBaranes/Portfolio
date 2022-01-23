import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import classes from '../../../styles/projects/detail-project.module.scss';

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

  function getStaticImageSrc(src: string) {
    if (src.endsWith('.gif')) {
      src = src.replace('projects', 'gifs');
      src = src.replace('.gif', '.png');
    }
    return src;
  }

  return (
    <div className={classes.ImageGallery}>
      <Link
        href={`https://aviram-portfolio.vercel.app${photosPaths[startIndex]}`}
      >
        <a>
          <Image
            src={photosPaths[startIndex]}
            width={830}
            height={400}
            alt='project-image'
          />
        </a>
      </Link>
      <br />
      <div className={classes.ImagesList}>
        {photosPaths.length > 3 && (
          <button
            className={classes.LeftBtn}
            onClick={() => buttonClickHandler('backward')}
          >
            {'<'}
          </button>
        )}
        {getPartialArr().map((src) => {
          return (
            <div
              key={src}
              className={
                src === photosPaths[startIndex]
                  ? `${classes.CurrentImage} ${classes.Image}`
                  : classes.Image
              }
            >
              <Image
                onClick={() => setStartIndex(photosPaths.indexOf(src))}
                src={getStaticImageSrc(src)}
                width={276.6}
                height={133.3}
                alt='project-image'
              />
            </div>
          );
        })}
        {photosPaths.length > 3 && (
          <button
            className={classes.RightBtn}
            onClick={() => buttonClickHandler('forward')}
          >
            {'>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
