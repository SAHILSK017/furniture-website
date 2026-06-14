import { useRef, useEffect } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



export default function ContactFooter() {

  const ref = useRef(null);



  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from('.foot-line', {

        scaleX: 0,

        transformOrigin: 'left',

        duration: 1.2,

        scrollTrigger: { trigger: ref.current, start: 'top 85%' },

      });

      gsap.from('.foot-item', {

        y: 24,

        opacity: 0,

        duration: 0.8,

        stagger: 0.08,

        scrollTrigger: { trigger: ref.current, start: 'top 82%' },

      });

      gsap.from('.foot-brand', {

        y: 32,

        opacity: 0,

        duration: 0.9,

        scrollTrigger: { trigger: ref.current, start: 'top 88%' },

      });

    }, ref);

    return () => ctx.revert();

  }, []);



  return (

    <footer ref={ref} id="contact" className="relative bg-dark text-cream">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(212,175,55,0.07),transparent_55%)]" aria-hidden="true" />



      <div className="wrap relative py-10 md:py-12 lg:py-14">

        <div className="foot-brand">

          <div className="foot-line mb-5 h-px w-full max-w-xs bg-gold/40" />



          <div className="grid gap-8 lg:grid-cols-12 lg:gap-6 lg:items-start">

            <div className="lg:col-span-4">

              <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl lg:text-[2.75rem]">

                Amara <span className="italic text-gold">Living</span>

              </h2>

              <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-cream/45">

                Sixteen years of granite, tiles, furniture, and luxury spaces — crafted in Chennai & Madurai.

              </p>

            </div>



            <div className="foot-item grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-6">

              <div>

                <p className="eyebrow mb-3">Studios</p>

                <p className="font-body text-sm text-cream/55">Chennai, Tamil Nadu</p>

                <p className="mt-1 font-body text-sm text-cream/55">Madurai, Tamil Nadu</p>

              </div>

              <div>

                <p className="eyebrow mb-3">Expertise</p>

                <ul className="space-y-1 font-body text-sm text-cream/55">

                  {['Granite', 'Marble', 'Tiles', 'Furniture', 'Luxury Spaces'].map((s) => (

                    <li key={s}>{s}</li>

                  ))}

                </ul>

              </div>

              <div>

                <p className="eyebrow mb-3">Contact</p>

                <a href="mailto:hello@amaraliving.com" className="block font-body text-sm text-cream/55 transition-colors hover:text-gold">

                  hello@amaraliving.com

                </a>

                <a href="tel:+914412345678" className="mt-1 block font-body text-sm text-cream/55 transition-colors hover:text-gold">

                  +91 44 1234 5678

                </a>

              </div>

              <div>

                <p className="eyebrow mb-3">Social</p>

                <div className="flex gap-2.5">

                  {['In', 'Li', 'Pi'].map((s) => (

                    <a

                      key={s}

                      href="#"

                      className="flex h-9 w-9 items-center justify-center border border-cream/15 text-[10px] uppercase text-cream/40 transition-all hover:border-gold hover:text-gold hover:shadow-glow-sm"

                    >

                      {s}

                    </a>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>



        <div className="foot-item mt-6 flex flex-col justify-between gap-3 border-t border-cream/10 pt-4 md:flex-row md:items-center">

          <p className="font-body text-xs text-cream/25">&copy; {new Date().getFullYear()} Amara Living</p>

          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-cream/20">Handcrafted Luxury Since 2010</p>

        </div>

      </div>

    </footer>

  );

}


