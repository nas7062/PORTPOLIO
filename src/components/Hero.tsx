import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// 왼쪽에서 등장 → 중앙으로(요소의 원래 위치: Tailwind relative left/right 유지)
const fromLeft = {
  hidden: { opacity: 0, x: -700 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

// 오른쪽에서 등장 → 중앙으로(요소의 원래 위치: Tailwind relative left/right 유지)
const fromRight = {
  hidden: { opacity: 0, x: 700 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

function Title({
  children,
  direction = 'left',
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (inView) controls.start('show');
    else controls.start('hidden');
  }, [inView, controls]);

  const variants = direction === 'left' ? fromLeft : fromRight;

  return (
    <motion.h2
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.h2>
  );
}

export default function Hero() {
  return (
    <motion.section
      className="min-h-[80svh] flex flex-col items-center justify-center text-center space-y-3"
      variants={container}
      initial="hidden"
      animate="show"
      id="home"
    >
      <Title
        direction="left"
        className="text-8xl font-bold tracking-widest text-gray-700 relative right-48"
      >
        FRONTEND DEVELOPER
      </Title>

      <Title
        direction="right"
        className="mt-4 text-8xl font-bold tracking-widest text-gray-700 relative left-72"
      >
        USER EXPERIENCE
      </Title>

      {/* Tailwind에는 right-90 유틸리티가 없습니다 → px 단위로 보정 */}
      <Title
        direction="left"
        className="text-8xl font-bold tracking-widest text-gray-700 relative right-[375px]"
      >
        COMMUNICATION
      </Title>

      <Title
        direction="right"
        className="mt-4 text-8xl font-bold tracking-widest text-gray-700 relative left-[490px]"
      >
        CREATIVITY
      </Title>
    </motion.section>
  );
}
