import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-1 bg-black/80 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
