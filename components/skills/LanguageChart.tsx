import { FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import classes from '../../styles/skills/skills.module.scss';

interface LanguageChart {
  skillLevel: number;
  name: string;
  color: string;
  index: number;
}

const LanguageChart: FC<LanguageChart> = ({
  name,
  skillLevel,
  color,
  index,
}) => {
  const [chartWidth, setChartWidth] = useState(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current)
      setChartWidth(chartContainerRef.current.offsetWidth * skillLevel);
  }, [chartContainerRef]);

  return (
    <div>
      <p>{name}</p>
      <div className={classes.LanguageChartContainer} ref={chartContainerRef}>
        <motion.div
          animate={{ width: chartWidth }}
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: 'anticipate', delay: 0.2 * index }}
          style={{
            width: chartWidth,
            height: 1,
            backgroundColor: color,
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default LanguageChart;
