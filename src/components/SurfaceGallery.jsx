import { useState } from 'react';
import { motion } from 'framer-motion';
import { SURFACES, IMG } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const tileReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease, staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease, delay: 0.12 } },
};

function SurfaceImage({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      draggable={false}
      className={className}
      onError={() => setImgSrc(IMG.granite)}
    />
  );
}

export default function SurfaceGallery() {
  return (
    <section id="surfaces" className="section-y-sm overflow-hidden bg-dark text-cream">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerContainer}
          className="section-head"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            Surface Gallery
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-section font-medium">
            Granite · Marble · Tiles
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mt-4 line-gold max-w-sm origin-left"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={gridContainer}
          className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[200px] lg:gap-4"
        >
          {SURFACES.map((item) => (
            <motion.article
              key={item.name}
              variants={tileReveal}
              className={`surface-tile group relative overflow-hidden rounded-sm border border-cream/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow-sm ${item.span}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <SurfaceImage
                  src={item.image}
                  alt={item.name}
                  className="surface-tile-img img-grade h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/20 transition-opacity duration-500 group-hover:from-dark group-hover:via-dark/75"
                aria-hidden="true"
              />

              <motion.div
                variants={textReveal}
                className="absolute inset-0 flex flex-col justify-end"
              >
                <div className="border-t border-cream/10 bg-dark/55 p-5 backdrop-blur-[2px] transition-colors duration-500 group-hover:border-gold/25 group-hover:bg-dark/70 md:p-6">
                  <span className="mb-2 inline-flex w-fit rounded-sm border border-gold/35 bg-dark/60 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                    {item.type}
                  </span>
                  <h3 className="font-display text-xl text-cream md:text-2xl">{item.name}</h3>
                  {item.description && (
                    <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-cream/85">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="h-px w-12 bg-gold transition-all duration-500 group-hover:w-16" />
                    <span className="font-body text-[10px] uppercase tracking-[0.24em] text-cream/40 transition-colors duration-500 group-hover:text-gold/80">
                      View Material
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
