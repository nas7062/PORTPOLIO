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
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const navigate = useNavigate();
  return (
    <motion.section
      className="min-h-[80svh] flex flex-col items-center justify-center text-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-5xl font-bold" variants={item}>
        Frontend Developer
      </motion.h1>
      <motion.p className="mt-4 text-lg text-neutral-600" variants={item}>
        React • TypeScript • Tailwind
      </motion.p>
      <motion.div className="mt-8" variants={item}>
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
