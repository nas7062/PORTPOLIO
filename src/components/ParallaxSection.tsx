import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';
import { Link } from 'react-router-dom';
export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120]); // 배경 위로
  const yFg = useTransform(scrollYProgress, [0, 1], [0, 60]); // 전경 아래로

  return (
    <section ref={ref} className="relative h-[100svh] overflow-clip">
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 bg-neutral-50" />
      <div className="sticky top-0 h-[90svh] flex justify-center flex-col">
        <motion.h2 style={{ y: yFg }} className="text-4xl font-bold text-center relative bottom-32">
          About Me
        </motion.h2>
        <motion.p style={{ y: yFg }} className="text-3xl font-bold text-center w-5/6 ">
          안녕하세요, 저는 프론트엔드 개발자 김민석입니다.
        </motion.p>
        <motion.div className="flex gap-10 justify-center items-center">
          <motion.p style={{ y: yFg }} className="text-2xl font-bold w-1/3">
            저는 사용자 경험을 중요시 하며 빠르게 발전하는 프론트엔드 기술을 습득하는 과정에서 큰
            즐거움을 느낍니다 <br />
            또한 꾸준한 성장을 위해 노력하며 팀 활동에서는 <br />
            맡은 업무에 책임감을 갖고 구성원들과의 의사소통과 <br />
            협력을 최우선으로 생각합니다.
          </motion.p>

          <div className="overflow-hidden rounded-full w-80 h-80">
            <img src={profileImage} alt="이미지" />
          </div>
        </motion.div>
        <motion.p style={{ y: yFg }} className="text-2xl font-bold text-center">
          GibHub:{' '}
          <a
            href="https://github.com/nas7062"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800"
          >
            nas7062@naver.com
          </a>
          <br /> Email: nas7062@naver.com <br />
          P.H: 010-9314-7062 <br />
          Velog:{' '}
          <a
            href="https://velog.io/@10012/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-800"
          >
            nas7062@naver.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
