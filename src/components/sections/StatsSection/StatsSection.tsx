import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './StatsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  title: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: 500,
    suffix: '+',
    title: 'Global Enterprise Clients',
    label: 'Fortune 500 & Government',
    description: 'Leading organizations worldwide trust BREADRIUSS to protect their most critical infrastructure from advanced persistent threats.',
  },
  {
    value: 99.99,
    suffix: '%',
    title: 'Uptime Guarantee',
    label: 'SLA Commitment',
    description: 'Our distributed architecture ensures mission-critical systems remain operational even under massive DDoS attacks.',
  },
  {
    value: 12,
    suffix: 'B+',
    title: 'Threats Neutralized',
    label: '2024 Global Report',
    description: 'Advanced threat signatures identified and neutralized before impact. Average response time: 47 milliseconds.',
  },
  {
    value: 0,
    suffix: '',
    title: 'Data Violations',
    label: 'Since Inception',
    description: 'Zero successful breaches across all client environments. Our zero-trust architecture has never been compromised.',
  },
];

function Counter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * value;

      setDisplayValue(hasDecimal ? Math.round(current * 100) / 100 : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isVisible, value, hasDecimal]);

  return (
    <span className={styles.value}>
      {hasDecimal ? displayValue.toFixed(2) : displayValue}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [visibleStats, setVisibleStats] = useState<Set<number>>(new Set());

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      STATS.forEach((_, i) => {
        gsap.fromTo(
          `.stat-${i}`,
          {
            opacity: 0,
            y: 150,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: `.stat-${i}`,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    STATS.forEach((_, i) => {
      const el = document.querySelector(`.stat-${i}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleStats(prev => new Set([...prev, i]));
            } else {
              setVisibleStats(prev => {
                const next = new Set(prev);
                next.delete(i);
                return next;
              });
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div ref={headerRef} className={styles.header}>
          <p className={styles.label}>BY THE NUMBERS</p>
          <h2 className={styles.heading}>Impact at Scale</h2>
          <p className={styles.subheading}>
            Numbers that define enterprise security excellence
          </p>
        </div>

        <div className={styles.statsStack}>
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`stat-${i} ${styles.stat}`}>
              <div className={styles.statInner}>
                <span className={styles.title}>{stat.title}</span>
                <div className={styles.numberRow}>
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    isVisible={visibleStats.has(i)}
                  />
                </div>
                <span className={styles.labelText}>{stat.label}</span>
                <p className={styles.description}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}