import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';
export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120]); // 배경 위로
  const yFg = useTransform(scrollYProgress, [0, 1], [0, 60]); // 전경 아래로

  return (
    <section ref={ref} className="relative h-[160svh] overflow-clip">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-neutral-100" />
      <div className="sticky top-0 h-[100svh] grid place-items-center">
        <motion.h2 style={{ y: yFg }} className="text-4xl font-bold">
          About Me
        </motion.h2>
        <motion.div className="flex gap-2 justify-center items-center">
          <motion.p style={{ y: yFg }} className="text-4xl font-bold">
            sdsadsadsad
          </motion.p>
          <motion.p style={{ y: yFg }} className="text-4xl font-bold">
            sdsadsadsad
          </motion.p>
          <div className="overflow-hidden rounded-full w-80 h-80">
            <img src={profileImage} alt="이미지" width={80} height={80} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
