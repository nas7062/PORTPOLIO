import { motion } from 'framer-motion';
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// 왼쪽에서 등장
const fromLeft = {
  hidden: { opacity: 0, x: -700 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

// 오른쪽에서 등장
const fromRight = {
  hidden: { opacity: 0, x: 700 },
  show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

export default function Hero() {
  return (
    <motion.section
      className="min-h-[80svh] flex flex-col items-center justify-center text-center space-y-3 "
      variants={container}
      initial="hidden"
      animate="show"
      id="home"
    >
      <motion.h2
        className="text-8xl font-bold tracking-widest text-gray-700 relative right-48"
        variants={fromLeft}
      >
        FRONTEND DEVELOPER
      </motion.h2>
      <motion.h2
        className="mt-4 text-8xl font-bold  tracking-widest text-gray-700 relative left-72"
        variants={fromRight}
      >
        USER EXPERIENCE
      </motion.h2>
      <motion.h2
        className="text-8xl font-bold tracking-widest text-gray-700 relative right-[375px]"
        variants={fromLeft}
      >
        COMMUNICATION
      </motion.h2>
      <motion.h2
        className="mt-4 text-8xl font-bold tracking-widest  text-gray-700 relative left-[490px]"
        variants={fromRight}
      >
        CREATIVITY
      </motion.h2>
    </motion.section>
  );
}
