import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../../styles/skills/skills.module.scss';
import nodeJsIcon from '../../public/icons/skills/node-js-icon.jpg';
import expressJsIcon from '../../public/icons/skills/express-icon.png';
import mongoDBIcon from '../../public/icons/skills/mongo-db-icon.png';
import reactJsIcon from '../../public/icons/skills/react-icon.png';
import nextJsIcon from '../../public/icons/skills/next-js-icon.png';
import reduxIcon from '../../public/icons/skills/redux-icon.png';
import jestIcon from '../../public/icons/skills/jest-icon.png';
import socketIOIcon from '../../public/icons/skills/socket-io-icon.svg';
import D3Icon from '../../public/icons/skills/d3-icon.png';
import Image from 'next/image';

interface FrameWorks {}

//prettier-ignore
const frameWorks = [
    {src:nodeJsIcon,alt:'node-js-icon' ,link:'https://en.wikipedia.org/wiki/Node.js'},
    {src:expressJsIcon,alt:'express-js-icon' ,link:'https://en.wikipedia.org/wiki/Express.js',white:true},
    {src:mongoDBIcon,alt:'mongo-db-icon' ,link:'https://en.wikipedia.org/wiki/MongoDB',white:true},
    {src:reactJsIcon,alt:'react-js-icon' ,link:'https://en.wikipedia.org/wiki/React_(JavaScript_library)'},
    {src:nextJsIcon,alt:'next-js-icon' ,link:'https://en.wikipedia.org/wiki/Next.js',white:true},
    {src:reduxIcon,alt:'redux-icon' ,link:'https://en.wikipedia.org/wiki/Redux_(JavaScript_library)',white:true},
    {src:jestIcon,alt:'jest-icon' ,link:'https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)'},
    {src:socketIOIcon,alt:'socket-io-icon' ,link:'https://en.wikipedia.org/wiki/Socket.IO'},
    {src:D3Icon,alt:'d3-icon' ,link:'https://en.wikipedia.org/wiki/D3.js'},
]

const FrameWorks: FC<FrameWorks> = () => {
  return (
    <div className={classes.FrameWorks}>
      {frameWorks.map((frameWork, i) => (
        <motion.div
          className={frameWork.white ? classes.White : ''}
          animate={{ y: 0, x: 0, opacity: 1 }}
          initial={{ y: '-100%', x: '-100%', opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 * i + 0.5 }}
          key={frameWork.alt}
        >
          <a href={frameWork.link} target='_blank'>
            <Image
              src={frameWork.src}
              width={75}
              height={75}
              alt={frameWork.alt}
            />
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default FrameWorks;
