import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: 'beforeChildren' },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative h-[100svh] overflow-clip"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.35, once: true }}
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-neutral-50" />
      <div className="sticky top-0 h-[90svh] flex flex-col items-center justify-center px-6 md:px-10">
        <motion.h2
          variants={fadeUp}
          style={{ y: yFg }}
          className="mb-6 text-center text-4xl font-bold text-neutral-900 md:mb-10 md:text-5xl absolute top-20"
        >
          ABOUT ME
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{ y: yFg }}
          className="mb-10 text-center text-2xl font-semibold text-neutral-800 md:mb-12 md:text-4xl"
        >
          안녕하세요, 저는 프론트엔드 개발자 김민석입니다.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex w-full max-w-5xl items-center justify-center gap-8 md:gap-12"
        >
          <p className="w-full max-w-xl text-base leading-relaxed text-neutral-700 md:text-2xl">
            저는 사용자 경험을 중요시 하며 빠르게 발전하는 프론트엔드 기술을 습득하는 과정에서 큰
            즐거움을 느낍니다. 또한 꾸준한 성장을 위해 노력하며 팀 활동에서는 맡은 업무에 책임감을
            갖고 기간 내 달성할 수 있으며 팀원들과의 의사소통과 협력을 최우선으로 생각합니다.
          </p>

          <div className="h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
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
