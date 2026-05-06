import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AnimatedText } from '../../ui/AnimatedText';
import styles from './PhilosophySection.module.css';

const principles = [
  {
    title: 'Security First',
    text: 'Every architecture decision begins with threat modeling. We assume breach, design for resilience, and build systems that contain damage when incidents occur.',
  },
  {
    title: 'Performance by Default',
    text: 'Speed is a feature. Our infrastructure optimizes for latency from the ground up, not as an afterthought. Sub-50ms responses aren\'t aspirational—they\'re baseline.',
  },
  {
    title: 'Scale Without Compromise',
    text: 'Growth should never degrade security or reliability. Our systems scale linearly, maintaining consistency across thousands of concurrent operations.',
  },
];

const INTERVAL_DURATION = 4000;

export function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const timer = setTimeout(() => {
      animateToIndex(1, false);
    }, 500);
    return () => clearTimeout(timer);
  }, [isDesktop]);

  const animateToIndex = (newIndex: number, resetInterval = true) => {
    if (!isDesktop) return;

    const cards = cardsRef.current;
    cards.forEach((card, i) => {
      if (!card) return;

      const distance = Math.abs(i - newIndex);
      const isActive = i === newIndex;

      if (isActive) {
        gsap.to(card, {
          scale: 1.05,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.6,
          ease: 'power2.out',
        });
        card.classList.add(styles.principleActive);
      } else if (distance === 1) {
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.4,
          filter: 'blur(2px)',
          duration: 0.6,
          ease: 'power2.out',
        });
        card.classList.remove(styles.principleActive);
      } else {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.15,
          filter: 'blur(6px)',
          duration: 0.6,
          ease: 'power2.out',
        });
        card.classList.remove(styles.principleActive);
      }
    });

    setActiveIndex(newIndex);

    if (resetInterval && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(goToNext, INTERVAL_DURATION) as unknown as number;
    }
  };

  const goToNext = () => {
    animateToIndex((activeIndex + 1) % principles.length);
  };

  const goToPrev = () => {
    animateToIndex((activeIndex - 1 + principles.length) % principles.length);
  };

  useEffect(() => {
    if (!isDesktop) return;

    intervalRef.current = setInterval(goToNext, INTERVAL_DURATION) as unknown as number;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isDesktop]);

  return (
    <section className={styles.section} id="philosophy">
      <div className={styles.inner}>
        <AnimatedText as="h2" className={styles.heading} animation="blur" delay={0.1} duration={1}>
          We build what others won&apos;t attempt.
        </AnimatedText>

        <AnimatedText as="p" className={styles.subheading} animation="fade" delay={0.2} duration={0.8}>
          Three principles that guide every decision we make.
        </AnimatedText>

        <div className={styles.divider} />

        <div className={styles.carousel}>
          <button
            className={styles.navArrow}
            onClick={goToPrev}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className={styles.principles}>
            {principles.map((principle, i) => (
              <div
                key={principle.title}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`${styles.principle} ${i === 1 ? styles.principleActive : ''}`}
                onClick={() => animateToIndex(i)}
              >
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleText}>{principle.text}</p>
              </div>
            ))}
          </div>

          <button
            className={styles.navArrow}
            onClick={goToNext}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.navigation}>
          {principles.map((_, i) => (
            <button
              key={i}
              className={`${styles.navDot} ${i === activeIndex ? styles.navDotActive : ''}`}
              onClick={() => animateToIndex(i)}
              aria-label={`Go to principle ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}