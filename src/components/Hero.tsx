import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

function useMdUp() {
  const [mdUp, setMdUp] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handler = () => setMdUp(mql.matches);
    handler();
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return mdUp;
}

const baseDuration = 1.2;

function Title({
  children,
  direction = 'left',
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const mdUp = useMdUp();

  // ✅ 관찰 전용 래퍼(정적 요소)
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(sentinelRef, { amount: 0.15, margin: '-12% 0% -12% 0%' });

  // ✅ 모바일은 vw로 짧게, 데스크톱은 px로 살짝 줄인 거리
  const variants = useMemo(() => {
    const xBig = direction === 'left' ? -550 : 550; // 700 → 550로 완화
    const xSmall = direction === 'left' ? '-40vw' : '40vw';
    return {
      hidden: { opacity: 0, x: mdUp ? xBig : xSmall },
      show: { opacity: 1, x: 0, transition: { duration: mdUp ? baseDuration : 0.9 } },
    };
  }, [direction, mdUp]);

  useEffect(() => {
    if (inView) controls.start('show');
    else controls.start('hidden');
  }, [inView, controls]);

  return (
    <div ref={sentinelRef}>
      <motion.h2 className={className} variants={variants} initial="hidden" animate={controls}>
        {children}
      </motion.h2>
    </div>
  );
}

export default function Hero() {
  return (
    <motion.section
      className="min-h-[80svh] flex flex-col items-center justify-center text-center space-y-3 overflow-x-hidden"
      variants={container}
      initial="hidden"
      animate="show"
      id="home"
    >
      <Title
        direction="left"
        className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:right-48 md:right-20 text-3xl font-bold tracking-widest text-gray-700 relative"
      >
        FRONTEND DEVELOPER
      </Title>

      <Title
        direction="right"
        className="mt-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:left-72 md:left-20 text-3xl font-bold tracking-widest text-gray-700 relative"
      >
        USER EXPERIENCE
      </Title>

      <Title
        direction="left"
        className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl md:right-20 text-3xl font-bold tracking-widest text-gray-700 relative xl:right-[375px]"
      >
        COMMUNICATION
      </Title>

      <Title
        direction="right"
        className="mt-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl xl:left-[490px] md:left-20 text-3xl font-bold tracking-widest text-gray-700 relative"
      >
        CREATIVITY
      </Title>
    </motion.section>
  );
}
