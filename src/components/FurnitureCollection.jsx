import { motion } from 'framer-motion';
import { FURNITURE } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const lineGrow = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease, delay: 0.3 } },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function FurnitureCollection() {
  return (
    <section id="furniture" className="section-y bg-cream">
      <div className="wrap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={headerContainer}
          className="section-head"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-3">
            Furniture
          </motion.p>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="heading-section max-w-lg">
              <motion.span variants={fadeUp} className="block">
                Curated
              </motion.span>
              <motion.span variants={fadeUp} className="block italic text-gold">
                Collections
              </motion.span>
            </h2>
            <motion.p variants={fadeUp} className="max-w-sm font-body text-sm leading-relaxed text-ink/50">
              Scroll through bespoke pieces — each designed to anchor a room in quiet, enduring luxury.
            </motion.p>
          </div>

          <motion.div variants={lineGrow} className="mt-5 line-gold max-w-xs origin-left opacity-50" />
        </motion.div>

        {/* Vertical editorial stack — natural page scroll */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={listContainer}
          className="flex flex-col gap-8 md:gap-10"
        >
          {FURNITURE.map((piece, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.article
                key={piece.title}
                variants={cardReveal}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease }}
                className={`group relative grid items-center gap-5 md:grid-cols-12 md:gap-8 ${
                  isEven ? '' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden shadow-editorial md:col-span-7 ${
                    isEven ? '' : 'md:col-start-6 md:row-start-1'
                  }`}
                >
                  <div className="aspect-[16/10] min-h-[220px] overflow-hidden md:min-h-[280px] lg:min-h-[320px]">
                    <motion.img
                      src={piece.image}
                      alt={piece.title}
                      data-view-space
                      className="img-grade h-full w-full object-cover"
                      initial={{ scale: 1.06 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease }}
                      whileHover={{ scale: 1.04 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent md:hidden" />
                  <div className="absolute inset-x-0 bottom-0 p-5 md:hidden">
                    <p className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{piece.tag}</p>
                    <h3 className="font-display text-xl font-medium text-cream">{piece.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-cream/85">{piece.description}</p>
                  </div>
                </div>

                <div
                  className={`relative z-10 md:col-span-5 ${
                    isEven ? 'md:pl-4' : 'md:col-start-1 md:row-start-1 md:pl-4 lg:pl-8'
                  }`}
                >
                  <span className="index-number mb-3 block font-display text-4xl leading-none md:text-5xl lg:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="eyebrow mb-3 font-semibold">{piece.tag}</p>
                  <h3 className="font-display text-2xl font-medium text-dark lg:text-3xl">
                    {piece.title}
                  </h3>
                  <p className="mt-4 font-body text-base leading-[1.75] text-ink/85">
                    {piece.description}
                  </p>
                  <div className="mt-6 h-px w-12 bg-gold/70 transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
