import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.div
      className='flex justify-center mt-8'
      //style={{ marginTop: '-20px' }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
    >
      <a
        href="/BülentOral_CV.pdf"
        download="BülentOral_CV.pdf"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Download CV
      </a>
    </motion.div>
  );
};

export default AnimatedButton;
