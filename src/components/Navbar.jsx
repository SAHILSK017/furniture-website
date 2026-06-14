import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from '../hooks/SmoothScroll';

const links = [
  { label: 'Spaces', href: '#spaces' },
  { label: 'Materials', href: '#materials' },
  { label: 'Story', href: '#story' },
  { label: 'Surfaces', href: '#surfaces' },
  { label: 'Contact', href: '#contact' },
];

const PAGE_SECTIONS = [
  'hero',
  'spaces',
  'materials',
  'story',
  'furniture',
  'surfaces',
  'calculator',
  'testimonials',
  'contact',
];

const NAV_IDS = new Set(['spaces', 'materials', 'story', 'surfaces', 'contact']);

function resolveNavSection(sectionId) {
  if (NAV_IDS.has(sectionId)) return sectionId;

  const idx = PAGE_SECTIONS.indexOf(sectionId);
  if (idx <= 0) return null;

  for (let i = idx - 1; i >= 0; i -= 1) {
    if (NAV_IDS.has(PAGE_SECTIONS[i])) return PAGE_SECTIONS[i];
  }

  return null;
}

export default function Navbar({ loaded }) {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const onHero = !scrolled;

  const updateScrollState = useCallback(() => {
    setScrolled(window.scrollY > 70);

    const trigger = window.innerHeight * 0.32;
    let currentSection = PAGE_SECTIONS[0];

    PAGE_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= trigger) {
        currentSection = id;
      }
    });

    setActiveSection(resolveNavSection(currentSection));
  }, []);

  useEffect(() => {
    if (!loaded) return undefined;

    updateScrollState();

    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    const lenisInstance = lenis;
    lenisInstance?.on('scroll', updateScrollState);

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      lenisInstance?.off('scroll', updateScrollState);
    };
  }, [loaded, lenis, updateScrollState]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!loaded) return null;

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ease-out ${
        scrolled ? 'border-b border-ink/5 bg-cream/40 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className={`flex w-full max-w-[100vw] items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'px-5 py-3 sm:px-8 md:px-10 md:py-3 lg:px-14 xl:px-16'
            : 'px-5 py-5 sm:px-8 md:px-10 md:py-6 lg:px-14 xl:px-16'
        }`}
      >
        <a href="#" className="group shrink-0">
          <span
            className={`block h-px bg-gold transition-all duration-500 group-hover:w-16 ${
              scrolled ? 'w-8 md:w-9' : 'w-10 md:w-12'
            }`}
          />
          <span
            className={`mt-2 block font-display font-medium transition-all duration-500 ${
              scrolled
                ? 'text-lg sm:text-xl md:text-[1.35rem] lg:text-[1.45rem]'
                : 'text-xl sm:text-2xl md:text-[1.65rem] lg:text-[1.85rem]'
            } ${onHero ? 'text-cream' : 'text-dark'}`}
          >
            Amara <span className="italic text-gold">Living</span>
          </span>
        </a>

        <ul
          className={`hidden items-center transition-all duration-500 lg:flex ${
            scrolled ? 'gap-5 xl:gap-8' : 'gap-7 xl:gap-11'
          }`}
        >
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1);

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative font-body font-medium uppercase tracking-[0.18em] transition-all duration-500 ${
                    scrolled ? 'text-[11px] md:text-xs lg:text-[13px]' : 'text-xs md:text-[13px] lg:text-sm'
                  } ${
                    isActive
                      ? onHero
                        ? 'text-gold'
                        : 'font-semibold text-gold'
                      : onHero
                        ? 'text-cream/75 hover:text-gold'
                        : 'text-ink/60 hover:text-gold'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button type="button" className="relative z-50 shrink-0 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block h-px w-8 transition-all ${open ? 'translate-y-1 rotate-45 bg-cream' : onHero ? 'bg-cream' : 'bg-dark'}`} />
          <span className={`my-1.5 block h-px w-6 transition-all ${open ? 'opacity-0' : onHero ? 'bg-cream/60' : 'bg-ink/50'}`} />
          <span className={`block h-px w-8 transition-all ${open ? '-translate-y-2 -rotate-45 bg-cream' : onHero ? 'bg-cream' : 'bg-dark'}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-dark lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((l) => {
                const isActive = activeSection === l.href.slice(1);

                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`font-display text-3xl transition-colors ${
                        isActive ? 'text-gold' : 'text-cream hover:text-gold'
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
