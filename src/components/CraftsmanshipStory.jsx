import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TIMELINE, IMG } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

export default function CraftsmanshipStory() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.craft-head', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.8,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '.craft-track', start: 'top 70%', end: 'bottom 60%', scrub: 1 },
      });

      gsap.utils.toArray('.craft-step').forEach((step) => {
        gsap.from(step, {
          x: -30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: { trigger: step, start: 'top 82%' },
        });
      });

      gsap.from('.craft-visual', {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.4,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '.craft-visual', start: 'top 78%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="story" className="section-y bg-stone/40">
      <div className="wrap">
        <div className="craft-head section-head grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">Our Legacy</p>
            <h2 className="heading-section">
              16 Years of<br /><span className="italic text-gold">Craftsmanship</span>
            </h2>
          </div>
          <p className="font-body text-sm leading-relaxed text-ink/55 lg:col-span-5 lg:col-start-8 lg:pt-4">
            From raw quarry to finished room — a journey measured in material integrity, artisan skill, and the patience of true luxury.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="craft-track relative lg:col-span-5">
            <div ref={lineRef} className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gold md:left-[11px]" />
            <div className="space-y-6 md:space-y-8">
              {TIMELINE.map((step, i) => (
                <div key={step.title} className="craft-step relative flex gap-6 md:gap-8">
                  <div className="relative z-10 mt-1 h-[15px] w-[15px] shrink-0 border border-gold bg-cream md:h-[23px] md:w-[23px]" />
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-[0.35em] text-gold/60">
                      Phase {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-dark md:text-2xl">{step.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="craft-visual relative lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <img src={IMG.craft} alt="Craftsmanship" className="img-grade h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 to-transparent" />
            </div>
            <div className="float-card absolute -bottom-4 left-6 right-6 p-5 md:left-8 md:max-w-xs md:p-6 lg:-left-6">
              <p className="font-display text-5xl font-light text-gold">16</p>
              <p className="mt-1 font-body text-xs uppercase tracking-[0.3em] text-ink/45">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
