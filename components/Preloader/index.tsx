'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const Preloader = () => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);

  const cppCodeStrings = [
    '#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n    cout << "KeyGEnCoders";\n    return 0;\n}',
    '#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main() {\n    cout << "KeyGEnCoders";\n    return 0;\n}',
  ];

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (currentIndex < cppCodeStrings[currentStringIndex].length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + cppCodeStrings[currentStringIndex][currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentStringIndex((currentStringIndex + 1) % cppCodeStrings.length);
      }, 2000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, currentStringIndex]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  

  const lineColors = [
    'text-green-400',
    'text-blue-400',
    'text-yellow-400',
    'text-purple-400',
    'text-pink-400',
    'text-red-400',
    'text-cyan-400',
  ];

  const lines = displayText.split('\n');

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.div variants={opacity} initial="initial" animate="enter" className="text-white text-center z-20">
            {lines.map((line, i) => (
              <pre key={i} className={`${lineColors[i % lineColors.length]} font-mono whitespace-pre overflow-visible m-0`}>
                {line}
              </pre>
            ))}
          </motion.div>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;