'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Spline from '@splinetool/react-spline/next';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Required for autoplay in most browsers
      video.autoplay = true;
      video.playsInline = true;
      video.load(); // Reload the video to ensure autoplay
    }
  }, []);

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Cohorts
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText}></div>
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[80px] -mt-[30px]"
        >
          <div className="absolute w-full h-[300px] rounded-tl-[140px] rounded-bl-[140px] z-[0] -top-[30px] sm:h-[100px]" />

          {/* Responsive Video */}
          <div className="relative w-full h-0 pb-[56.25%] rounded-tl-[140px] rounded-bl-[140px] overflow-hidden">
            <video
              ref={videoRef}
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source src="/welcome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
