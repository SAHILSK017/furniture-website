import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.divider-line', {
        scaleX: 0,
        duration: 1.4,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      });
      gsap.from('.divider-diamond', {
        scale: 0,
        rotation: 45,
        duration: 0.6,
        delay: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: ref.current, start: 'top 90%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="wrap py-3 md:py-4" aria-hidden="true">
      <div className="flex items-center gap-6">
        <div className="divider-line h-px flex-1 origin-left bg-gradient-to-r from-transparent via-gold/50 to-gold/20" />
        <div className="divider-diamond h-2 w-2 rotate-45 border border-gold/60" />
        <div className="divider-line h-px flex-1 origin-right bg-gradient-to-l from-transparent via-gold/50 to-gold/20" />
      </div>
    </div>
  );
}
