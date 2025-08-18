import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

// 서서히 나타나면서 자식 요소들을 순차 애니메이션
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
//  md인지 여부를 state로 관리
function useMdUp() {
  const [mdUp, setMdUp] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    const handler = () => setMdUp(mql.matches);
    handler(); // 최초 실행 시점에서 값 반영
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);
  return mdUp;
}

const baseDuration = 1.2; // 데스크탑 애니메이션 지속시간

function Title({
  children,
  direction = 'left', // 애니메이션 시작 방향
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
}) {
  const mdUp = useMdUp(); // 현재 화면이 md 이상인지 판별

  // 관찰 전용 ref
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  //애니메이션 제어 객체
  const controls = useAnimation();
  // 화면에 들어왔는지 여부 확인
  const inView = useInView(sentinelRef, { amount: 0.15, margin: '-12% 0% -12% 0%' });

  //  md 이상: 550px에서  모바일: 뷰포트 너비 40vw
  const variants = useMemo(() => {
    const xBig = direction === 'left' ? -550 : 550; // 700 → 550로 완화
    const xSmall = direction === 'left' ? '-40vw' : '40vw';
    return {
      hidden: { opacity: 0, x: mdUp ? xBig : xSmall },
      show: { opacity: 1, x: 0, transition: { duration: mdUp ? baseDuration : 0.9 } },
    };
  }, [direction, mdUp]);

  // 뷰포트에 들어오면 show, 벗어나면 hidden
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
