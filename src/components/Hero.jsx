import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO_SLIDES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const SLIDE_INTERVAL = 3000;

export default function Hero({ loaded }) {
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!loaded) return undefined;

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(id);
  }, [loaded]);

  useEffect(() => {
    HERO_SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-accent', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.15,
      });

      gsap.from('.hero-label', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.35,
      });

      gsap.from('.hero-heading-line', {
        yPercent: 105,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.45,
      });

      gsap.from('.hero-body', {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.85,
      });

      gsap.to(imgWrapRef.current, {
        scale: 1.06,
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-[100dvh] min-h-screen w-full overflow-hidden bg-dark"
    >
      <div className="absolute inset-0 h-full w-full">
        <div ref={imgWrapRef} className="absolute inset-0 h-full w-full will-change-transform">
          {HERO_SLIDES.map((src, index) => (
            <img
              key={`hero-slide-${index}`}
              src={src}
              alt=""
              draggable={false}
              data-view-space={index === activeIndex ? true : undefined}
              className={`img-grade absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1.2s] ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dark/85 to-transparent" />
      </div>

      <div className="wrap relative z-10 flex h-full w-full flex-col justify-center pb-20 pt-24 md:pb-24 md:pt-28">
        <div className="relative w-full">
          <div className="max-w-3xl lg:max-w-4xl">
            <div className="hero-accent mb-6 h-px w-16 bg-gold md:mb-8 md:w-20" />

            <p className="hero-label eyebrow mb-5 text-gold/90 md:mb-7">
              Premium Interiors Since 2010
            </p>

            <h1 className="overflow-hidden">
              <span className="hero-heading-line block font-display text-hero font-medium text-cream">
                Crafting Luxury
              </span>
              <span className="hero-heading-line block font-display text-hero font-medium italic text-gold">
                Spaces
              </span>
            </h1>

            <p className="hero-body mt-7 max-w-xl font-body text-base font-light leading-[1.75] text-cream/70 md:mt-9 md:text-lg">
              Luxury granite, premium furniture, and timeless interior concepts designed for sophisticated living.
            </p>

            <div className="hero-body mt-9 flex flex-wrap gap-4 md:mt-11">
              <a href="#materials" className="btn-solid">Explore Materials</a>
              <a href="#calculator" className="btn-gold border-cream/25 text-cream">
                <span>Estimate Investment</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-body text-[10px] uppercase tracking-[0.4em] text-cream/30">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 md:flex lg:right-10">
        {HERO_SLIDES.map((src, index) => (
          <button
            key={`hero-dot-${index}`}
            type="button"
            aria-label={`Show hero slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-1 transition-all duration-500 ${
              index === activeIndex ? 'w-8 bg-gold' : 'w-3 bg-cream/30 hover:bg-cream/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
