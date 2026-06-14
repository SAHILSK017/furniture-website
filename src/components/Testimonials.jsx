import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/5 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
      Verified Client
    </span>
  );
}

function TestimonialCard({ testimonial }) {
  const { name, location, projectType, category, quote, rating, avatar } = testimonial;

  return (
    <article className="testimonial-card group h-full">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="h-px w-10 bg-gold/80 transition-all duration-500 group-hover:w-14" />
        <span className="font-display text-4xl leading-none text-gold/20" aria-hidden="true">&ldquo;</span>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2.5">
        <span className="rounded-sm border border-stone/80 bg-stone/30 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/55">
          {category}
        </span>
        <VerifiedBadge />
      </div>

      <p className="mb-6 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
        {projectType}
      </p>

      <blockquote className="font-display text-lg font-light leading-relaxed text-dark md:text-xl md:leading-relaxed">
        {quote}
      </blockquote>

      <div className="mt-8 flex items-center gap-4 border-t border-stone/60 pt-6">
        <img
          src={avatar}
          alt=""
          className="h-11 w-11 shrink-0 rounded-full border border-gold/30 object-cover"
        />
        <div className="min-w-0 flex-1">
          <Stars count={rating} />
          <p className="mt-2 font-body text-sm font-semibold text-dark">{name}</p>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-ink/45">{location}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const updateActiveFromScroll = useCallback(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  const scrollToIndex = useCallback((index) => {
    const container = scrollerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const left = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
    container.scrollTo({ left, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const goNext = useCallback(() => {
    scrollToIndex((activeIndex + 1) % total);
  }, [activeIndex, scrollToIndex, total]);

  const goPrev = useCallback(() => {
    scrollToIndex((activeIndex - 1 + total) % total);
  }, [activeIndex, scrollToIndex, total]);

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return undefined;

    container.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    window.addEventListener('resize', updateActiveFromScroll);

    return () => {
      container.removeEventListener('scroll', updateActiveFromScroll);
      window.removeEventListener('resize', updateActiveFromScroll);
    };
  }, [updateActiveFromScroll]);

  return (
    <section id="testimonials" className="section-y border-t border-stone/50 bg-cream">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={headerVariants}
          className="section-head mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            Client Voices
          </motion.p>
          <motion.h2 variants={fadeUp} className="heading-section text-balance">
            Trusted By Homeowners,
            <br />
            <span className="italic text-gold">Designers & Businesses</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="mx-auto mt-4 line-gold max-w-xs opacity-60" />
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-ink/55">
            Real feedback from clients who chose Amara for granite, marble, furniture, and complete interior finishes.
          </motion.p>
        </motion.div>

        <div className="mb-4 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center border border-ink/15 text-ink/60 transition-all hover:border-gold hover:text-gold"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center border border-ink/15 text-ink/60 transition-all hover:border-gold hover:text-gold"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-cream to-transparent md:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-cream to-transparent md:w-16" />

        <div
          ref={scrollerRef}
          className="testimonial-track scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:gap-6 md:px-10 lg:px-14"
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="w-[min(88vw,520px)] shrink-0 snap-center md:w-[480px] lg:w-[520px]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="wrap mt-6 flex items-center justify-center gap-3">
        {TESTIMONIALS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`View review from ${item.name}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-1 transition-all duration-500 ${
              index === activeIndex ? 'w-10 bg-gold' : 'w-5 bg-ink/15 hover:bg-ink/30'
            }`}
          />
        ))}
        <span className="ml-4 font-body text-xs text-ink/40">
          {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
