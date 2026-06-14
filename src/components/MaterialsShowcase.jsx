import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { MATERIALS, IMG } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function MaterialsShowcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const material = MATERIALS[active];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mat-intro', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
      });
      gsap.from('.mat-panel', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        scrollTrigger: { trigger: '.mat-panel', start: 'top 78%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="materials" className="section-y-sm bg-dark text-cream">
      <div className="wrap mat-intro section-head">
        <p className="eyebrow mb-3">Materials</p>
        <h2 className="font-display text-section font-medium max-w-2xl">
          Surfaces, Form<br /><span className="italic text-gold">&amp; Finish</span>
        </h2>
      </div>

      <div className="wrap mat-panel grid gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Image panel */}
        <div className="relative overflow-hidden lg:col-span-7 lg:min-h-[400px]">
          <div className="absolute inset-0 border border-cream/10" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.div
              key={material.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={material.image}
                alt={material.title}
                data-view-space
                className="img-grade h-full w-full object-cover"
                onError={(e) => { e.currentTarget.src = IMG.granite; }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/15 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={material.id}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                <p className="eyebrow mb-2">{material.subtitle}</p>
                <h3 className="font-display text-2xl md:text-3xl">{material.title}</h3>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute left-0 top-8 h-16 w-px bg-gold animate-shimmer" aria-hidden="true" />
        </div>

        {/* Accordion */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="mb-5 font-body text-sm leading-relaxed text-cream/40">
            Explore our material disciplines — each selection shapes the character of a room.
          </p>

          <div className="space-y-3">
            {MATERIALS.map((item, i) => {
              const isActive = active === i;
              return (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`relative w-full cursor-default overflow-hidden border text-left transition-all duration-500 ${
                    isActive
                      ? 'border-gold/40 bg-cream/[0.04] pl-6 shadow-glow-sm'
                      : 'border-cream/10 bg-transparent pl-4 hover:border-gold/20 hover:pl-5'
                  }`}
                >
                  <div
                    className={`absolute bottom-0 left-0 top-0 w-0.5 transition-all duration-500 ${
                      isActive ? 'bg-gold' : 'bg-transparent'
                    }`}
                  />

                  <div className="py-5 pr-5 md:py-6">
                    <div className="flex items-center gap-4">
                      <span className={`font-body text-[10px] tracking-[0.35em] ${isActive ? 'text-gold' : 'text-cream/30'}`}>
                        0{i + 1}
                      </span>
                      <span className={`h-px flex-1 transition-colors duration-500 ${isActive ? 'bg-gold/50' : 'bg-cream/10'}`} />
                    </div>

                    <h4 className={`mt-3 font-display text-xl transition-colors duration-400 md:text-2xl ${isActive ? 'text-gold' : 'text-cream/75'}`}>
                      {item.title}
                    </h4>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden font-body text-sm leading-relaxed text-cream/55"
                        >
                          <span className="block pt-3">{item.description}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
