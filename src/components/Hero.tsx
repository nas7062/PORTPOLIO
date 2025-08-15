// components/Hero.tsx
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
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
  show: { opacity: 1, x: 0, transition: { duration: 2.1 } },
};

// 오른쪽에서 등장
const fromRight = {
  hidden: { opacity: 0, x: 700 },
  show: { opacity: 1, x: 0, transition: { duration: 2.1 } },
};

export default function Hero() {
  const navigate = useNavigate();
  return (
    <motion.section
      className="min-h-[80svh] flex flex-col items-center justify-center text-center space-y-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 className="text-8xl font-bold tracking-widest text-gray-700" variants={fromLeft}>
        FRONTEND DEVELOPER
      </motion.h2>
      <motion.h2
        className="mt-4 text-8xl font-bold  tracking-widest text-gray-700"
        variants={fromRight}
      >
        USER EXPERIENCE
      </motion.h2>
      <motion.h2 className="text-8xl font-bold tracking-widest text-gray-700" variants={fromLeft}>
        COMMUNICATION
      </motion.h2>
      <motion.h2
        className="mt-4 text-8xl font-bold tracking-widest  text-gray-700"
        variants={fromRight}
      >
        CREATIVITY
      </motion.h2>
      <motion.div className="mt-8" variants={container}>
        <button
          className="px-6 py-3 rounded-xl bg-black text-white cursor-pointer"
          onClick={() => navigate('/work')}
        >
          View Work
        </button>
      </motion.div>
    </motion.section>
  );
}
