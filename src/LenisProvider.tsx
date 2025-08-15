import { useEffect, type PropsWithChildren } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return children;
}
