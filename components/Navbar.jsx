'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-8 relative text-black`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <img
        src="/ElizerrL.svg"
        alt="Elizerr Logo"
        className="w-[190px] h-[40px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
