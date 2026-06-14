import { useEffect, useState, useRef } from 'react';

export default function ImageViewHint() {
  const [visible, setVisible] = useState(false);
  const hintRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1023px)').matches) return;

    const onMove = (e) => {
      const onImage = e.target.closest('[data-view-space]');
      if (onImage && hintRef.current) {
        hintRef.current.style.transform = `translate3d(${e.clientX + 18}px, ${e.clientY + 18}px, 0)`;
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={hintRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden border border-gold/30 bg-dark/90 px-4 py-2 backdrop-blur-sm lg:block"
      style={{ transform: 'translate3d(0,0,0)' }}
    >
      <span className="font-body text-[10px] font-medium uppercase tracking-[0.32em] text-gold">
        View Space
      </span>
    </div>
  );
}
