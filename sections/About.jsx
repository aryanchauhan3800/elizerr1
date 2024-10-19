'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Cohourt" textStyles="text-center" />

      <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
>
  <span className="font-extrabold text-white">Cohorts</span> are a new
  way to learn, where you can gain skills while collaborating with others.
  Working in a cohort makes learning feel more real, as you exchange ideas,
  solve problems together, and experience different perspectives. This is
  really the{' '}
  <span className="font-extrabold text-white">power of teamwork</span>{' '}
  today. With the guidance of{' '}
  <span className="font-extrabold text-white">mentors</span>, you can
  easily enhance your learning experience, turning challenges into growth.
  Let's{' '}
  <span className="font-extrabold text-white">explore</span> the benefits
  of cohorts by scrolling down.
</motion.p>



      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
