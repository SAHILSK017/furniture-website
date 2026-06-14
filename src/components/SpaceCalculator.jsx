import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const RATE = 250;

function fmt(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

export default function SpaceCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const sectionRef = useRef(null);

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const area = l * w;
  const cost = area * RATE;
  const ready = l > 0 && w > 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.calc-wrap', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="calculator" className="section-y-lg relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -left-16 top-1/4 h-48 w-48 rounded-full border border-gold/8" aria-hidden="true" />

      <div className="wrap calc-wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5 lg:pt-2">
            <p className="eyebrow mb-3">Investment</p>
            <h2 className="heading-section">
              Estimate Your<br /><span className="italic text-gold">Surface Investment</span>
            </h2>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ink/70">
              Premium surface planning — enter dimensions for an instant estimate refined during your private consultation.
            </p>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative overflow-hidden border border-cream/10 bg-dark p-6 shadow-editorial md:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-3 -top-3 h-14 w-14 border border-gold/40" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-8 w-8 bg-gold/25" aria-hidden="true" />

              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-cream/10 pb-5">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-cream/80">
                  Surface Calculator
                </p>
                <span className="inline-flex items-center rounded-sm border border-gold/35 bg-gold/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {fmt(RATE)} / sq ft
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="len" className="mb-2 block font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Length (ft)
                  </label>
                  <div className="relative">
                    <input
                      id="len"
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="calc-input w-full rounded-sm border border-cream/20 bg-cream/[0.06] px-4 py-3.5 pr-10 font-display text-3xl text-cream outline-none transition-all placeholder:text-cream/25 focus:border-gold focus:bg-cream/[0.1] focus:ring-1 focus:ring-gold/30 md:text-4xl"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-body text-xs uppercase tracking-widest text-cream/45">
                      ft
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="wid" className="mb-2 block font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Width (ft)
                  </label>
                  <div className="relative">
                    <input
                      id="wid"
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="0"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="calc-input w-full rounded-sm border border-cream/20 bg-cream/[0.06] px-4 py-3.5 pr-10 font-display text-3xl text-cream outline-none transition-all placeholder:text-cream/25 focus:border-gold focus:bg-cream/[0.1] focus:ring-1 focus:ring-gold/30 md:text-4xl"
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-body text-xs uppercase tracking-widest text-cream/45">
                      ft
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-cream/10 bg-cream/[0.04] p-5 md:p-6">
                <AnimatePresence mode="wait">
                  {ready ? (
                    <motion.div
                      key="on"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="grid gap-6 sm:grid-cols-2"
                    >
                      <div>
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/60">
                          Total Area
                        </p>
                        <motion.p
                          key={area}
                          initial={{ opacity: 0.4, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 font-display text-3xl text-cream md:text-4xl"
                        >
                          {area.toLocaleString('en-US', { maximumFractionDigits: 1 })}
                          <span className="ml-2 font-body text-sm text-cream/50">sq ft</span>
                        </motion.p>
                      </div>
                      <div>
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/60">
                          Estimated Investment
                        </p>
                        <motion.p
                          key={cost}
                          initial={{ opacity: 0.4, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 font-display text-3xl text-gold md:text-4xl"
                        >
                          {fmt(cost)}
                        </motion.p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="off"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[72px] items-center"
                    >
                      <p className="font-body text-sm text-cream/55">
                        Enter length and width above to calculate your surface area and investment estimate.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contact"
                className="btn-solid mt-6 block w-full text-center sm:inline-block sm:w-auto"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
