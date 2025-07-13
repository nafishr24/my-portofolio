import React, { useEffect, useRef } from 'react';

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Animasi = ({ children, delay = 200, buffer = 0.1 }) => {
  const sectionRef = useRef(null);
  const animationElements = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (animationElements.current.length === 0) {
        animationElements.current = Array.from(
          sectionRef.current.querySelectorAll('[data-animate]')
        );

        animationElements.current.forEach(el => {
          el.classList.add('opacity-0');
        });
      }

      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * buffer;
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const isSectionVisible =
        sectionRect.top < viewportHeight - triggerPoint &&
        sectionRect.bottom > triggerPoint;

      if (isSectionVisible && !hasAnimated.current) {
        animationElements.current.forEach((el, index) => {
          setTimeout(() => {
            el.classList.remove('opacity-0');
            el.classList.add('animate-fade-slide-up');
          }, index * delay);
        });
        hasAnimated.current = true;
      } else if (sectionRect.bottom < 0 || sectionRect.top > viewportHeight) {
        hasAnimated.current = false;
        animationElements.current.forEach(el => {
          el.classList.remove('animate-fade-slide-up');
          el.classList.add('opacity-0');
        });
      }
    };

    const debouncedScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [delay, buffer]);

  return <div ref={sectionRef}>{children}</div>;
};

export default Animasi;
