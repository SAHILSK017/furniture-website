import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageLoader({ onComplete }) {
  const rootRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (doneRef.current) return;
          doneRef.current = true;
          onComplete?.();
        },
      });

      tl.fromTo(
        '.loader-line',
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.4, ease: 'power3.inOut' }
      )
        .fromTo(
          '.loader-logo-main',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.loader-logo-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .to('.loader-counter', { opacity: 1, duration: 0.4 }, '-=0.3')
        .to('.loader-screen', {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          delay: 0.6,
        });
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={rootRef}
      className="loader-screen fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-dark"
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 md:px-16">
        <div className="loader-line mx-auto mb-12 h-px w-full max-w-xl bg-gold" />
        <div className="text-center">
          <p className="loader-logo-main font-display text-4xl font-medium text-cream md:text-6xl">
            Amara <span className="italic text-gold">Living</span>
          </p>
          <p className="loader-logo-sub mt-4 font-body text-[11px] uppercase tracking-[0.45em] text-cream/40">
            Luxury Interiors · Est. 2010
          </p>
        </div>
      </div>
      <p className="loader-counter absolute bottom-10 font-body text-[10px] uppercase tracking-[0.4em] text-gold/50 opacity-0">
        Loading Experience
      </p>
    </div>
  );
}
