import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
}; // FadeIN 애니메이션

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}; // 올라오게끔 하는 애니메이션

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start end', 'end start']
  });

  // 스프링 효과로 부드러운 애니메이션
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yBg = useTransform(smoothProgress, [0, 1], [0, -120]);
  const yFg = useTransform(smoothProgress, [0, 1], [0, 60]);

  return (
    <motion.section
      ref={ref}
      id="about" // 헤더 클릭 시 about으로 가게끔
      className="relative h-svh overflow-clip snap-start  "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.35, once: true }}
    >
      <motion.div 
        style={{ y: yBg, willChange: 'transform' }} 
        className="absolute inset-0 -z-10 bg-neutral-50"
      />
      <div className="sticky top-0 h-[90svh] sm:h-[105svh] flex flex-col items-center justify-center px-6 md:px-10">
        <motion.h2
          variants={fadeUp}
          style={{ y: yFg, willChange: 'transform' }}
          className="mb-6 text-center text-4xl font-bold text-neutral-900 md:mb-10 md:text-5xl absolute top-20"
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{ y: yFg, willChange: 'transform' }}
          className="mb-10 text-center text-2xl font-semibold text-neutral-800 md:mb-12 md:text-4xl"
        >
          안녕하세요 저는 프론트엔드 개발자 김민석입니다.
        </motion.p>

        <motion.div
  variants={fadeUp}
  className="flex flex-col md:flex-row w-full max-w-4xl items-center justify-center gap-6 md:gap-12"
>
<p className="w-full text-sm sm:text-base md:text-2xl leading-relaxed text-neutral-700 text-center md:text-left px-4 md:px-0">
<span className="text-blue-500 font-semibold">사용자 경험</span>을 중요하게 생각하는 프론트엔드 개발자입니다.
<span className="text-blue-500 font-semibold"> 새로운 기술</span>을 배우고 적용하는 것을 좋아하며  
해커톤과 팀 프로젝트를 통해 <span className="text-blue-500 font-semibold">협업 능력</span>과 실전 경험을 쌓아왔습니다.  
꾸준한 학습을 통해 <span className="text-blue-500 font-semibold">지속적인 성장</span>을 추구하고 있습니다.
</p>

  <div className="h-40 w-40 sm:h-56 sm:w-56 md:h-80 md:w-80 overflow-hidden rounded-full flex-shrink-0 shadow-lg">
    <img
      src={profileImage}
      alt="김민석 프로필 사진"
      loading="lazy"
      className="h-full w-full object-cover"
    />
  </div>
</motion.div>
      </div>
    </motion.section>
  );
}
