import { useEffect, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    setLenis(instance);
    instance.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      instance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      instance.destroy();
      setLenis(null);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
