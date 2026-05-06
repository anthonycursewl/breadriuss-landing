import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../../ui/Button';
import { Link } from '../../ui/Link';
import styles from './FinalCTA.module.css';

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const elements = titleRef.current.querySelectorAll('[data-animate]');
    if (elements.length === 0) return;

    gsap.fromTo(
      elements,
      { filter: 'blur(12px)', opacity: 0 },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2,
      }
    );
  }, []);

  return (
    <section className={styles.section} id="contact">
      <div className={styles.bg}>
        <div className={styles.glow} />
        <div className={styles.glowPurple} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Get Started</span>

          <h2 ref={titleRef} className={styles.titleWrapper}>
            <span data-animate className={styles.title}>Ready to Secure</span>
            <span className={styles.titleRow}>
              <span data-animate className={styles.titleOutline}>Your&nbsp;</span>
              <span data-animate className={styles.titleOutline}>Infra?</span>
            </span>
          </h2>

          <p className={styles.subtitle}>
            Enterprise-grade cybersecurity built for the challenges ahead. Partner with us to safeguard your infrastructure.
          </p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://nakomi.studio', '_blank')}
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
              iconPosition="right"
            >
              Schedule Assessment
            </Button>

            <Link href="https://nakomi.studio" external variant="subtle">
              Learn More
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Enterprises</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>99.99%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}