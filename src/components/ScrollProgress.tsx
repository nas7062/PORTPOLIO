import { motion, useScroll, useTransform } from 'framer-motion';
import CharImage from '../assets/char.png';
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, (v) => `calc(${v * 100}vw - 35px)`);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[9999]">
      {/* 진행 바 */}
      <motion.div className="h-1.5 origin-left bg-black/90" style={{ scaleX: scrollYProgress }} />

      {/* 캐릭터 이미지 */}
      <motion.img
        src={CharImage}
        alt="character"
        className="absolute top-[-6px] h-10 w-10 select-none drop-shadow"
        style={{ x }}
        draggable={false}
      />
    </div>
  );
}
