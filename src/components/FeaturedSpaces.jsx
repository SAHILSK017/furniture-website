import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SPACES } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const dominant = SPACES.find((s) => s.dominant);
const supporting = SPACES.filter((s) => !s.dominant);

export default function FeaturedSpaces() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.space-intro > *', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      });

      gsap.from('.space-dominant', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.space-dominant', start: 'top 82%' },
      });

      gsap.from('.space-support', {
        y: 32,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.space-grid', start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="spaces" className="section-y-lg bg-cream">
      <div className="wrap space-intro section-head">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">Featured Spaces</p>
            <h2 className="heading-section">
              Curated<br /><span className="italic text-gold">Environments</span>
            </h2>
          </div>
          <p className="font-body text-sm leading-relaxed text-ink/50 lg:col-span-5 lg:col-start-8">
            One featured composition with two supporting scenes — editorial pacing, generous whitespace, and layered depth.
          </p>
        </div>
        <div className="mt-5 line-gold max-w-xs opacity-60" />
      </div>

      <div className="wrap space-grid">
        <div className="relative grid gap-6 lg:grid-cols-12 lg:gap-6">
          {/* Featured — ~30% shorter than before */}
          <div className="space-dominant relative lg:col-span-7">
            <div className="group relative overflow-hidden shadow-editorial">
              <div className="aspect-[5/4] max-h-[340px] md:max-h-[380px] lg:aspect-auto lg:max-h-[430px]">
                <img
                  src={dominant.image}
                  alt={dominant.title}
                  data-view-space
                  className="img-grade h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/5 to-transparent" />
            </div>

            <div className="float-card relative z-10 -mt-10 ml-4 mr-4 max-w-md p-6 md:-mt-12 md:ml-8 md:p-7 lg:absolute lg:bottom-6 lg:left-8 lg:ml-0 lg:mr-0 lg:-mt-0">
              <p className="eyebrow mb-2">{dominant.tag}</p>
              <h3 className="font-display text-xl text-dark md:text-2xl">{dominant.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/55">{dominant.description}</p>
            </div>
          </div>

          {/* Supporting */}
          <div className="flex flex-col gap-5 lg:col-span-5 lg:justify-center lg:gap-6">
            {supporting.map((space, i) => (
              <article key={space.id} className="space-support group relative">
                <div className={`relative ${i === 1 ? 'lg:-ml-6' : ''}`}>
                  <div className="overflow-hidden shadow-editorial">
                    <div className="aspect-[16/9] max-h-[200px] md:max-h-[220px]">
                      <img
                        src={space.image}
                        alt={space.title}
                        data-view-space
                        className="img-grade h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="float-card relative z-10 -mt-8 mx-3 p-4 md:mx-5 md:max-w-[90%] md:p-5">
                    <p className="font-body text-[10px] uppercase tracking-[0.28em] text-gold">{space.tag}</p>
                    <h3 className="mt-1 font-display text-lg text-dark">{space.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
