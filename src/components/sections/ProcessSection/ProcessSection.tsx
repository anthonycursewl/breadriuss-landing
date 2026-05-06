import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedText } from '../../ui/AnimatedText';
import styles from './ProcessSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep analysis of your infrastructure, threat landscape, and performance requirements.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Custom design patterns engineered for your specific scale and security posture.',
  },
  {
    num: '03',
    title: 'Deployment',
    desc: 'Zero-downtime implementation with continuous validation and monitoring.',
  },
  {
    num: '04',
    title: 'Evolution',
    desc: 'Ongoing optimization and threat intelligence updates to stay ahead of risks.',
  },
];

const ERROR_MESSAGES = [
  "Br3ad.exe has stopped working",
  "Error 0x4E45. Brd.exe is busy fixing things",
  "Warning: Brd has encountered a anomaly",
  "Brd.exe - System Exception",
  "CRITICAL: Brd is rebooting...",
];

const NORMAL_DELAY = 4000;
const GLITCH_DELAY = 3500;
const ERROR_DISPLAY_TIME = 1500;
const RESET_DELAY = 600;

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const phaseRef = useRef<'normal' | 'glitch' | 'error'>('normal');
  const timeoutRef = useRef<number | null>(null);

  const resetNums = () => {
    const nums = numRefs.current.filter(Boolean);
    gsap.set(nums, { color: 'rgba(107, 107, 107, 0.12)', textShadow: 'none' });
    nums.forEach(num => {
      if (!num) return;
      num.classList.remove(styles.lightGlow, styles.darkGlow);
    });
  };

  const glowNum = (num: HTMLSpanElement, isDark: boolean, delay = 0) => {
    gsap.to(num, {
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(107, 107, 107, 0.7)',
      textShadow: isDark
        ? '0 0 12px rgba(255, 255, 255, 0.4), 0 0 24px rgba(255, 255, 255, 0.2), 0 0 36px rgba(255, 255, 255, 0.1)'
        : '0 0 12px rgba(107, 107, 107, 0.3), 0 0 24px rgba(107, 107, 107, 0.15)',
      duration: 0.3,
      ease: 'power2.out',
      delay,
      onComplete: () => {
        const glowClass = isDark ? styles.darkGlow : styles.lightGlow;
        if (glowClass) num.classList.add(glowClass);
      },
    });
  };

  const normalSequence = (isDark: boolean, onComplete?: () => void) => {
    const nums = numRefs.current.filter(Boolean);
    nums.forEach((num, i) => {
      if (!num) return;
      num.classList.remove(styles.lightGlow, styles.darkGlow);
      glowNum(num, isDark, i * 0.15);
    });
    if (onComplete) {
      setTimeout(onComplete, 600 + steps.length * 150);
    }
  };

  const glitchSequence = (isDark: boolean, onComplete?: () => void) => {
    const nums = numRefs.current.filter(Boolean);
    const patterns = [
      [0, 2, 1, 3],
      [3, 1, 2, 0],
      [2, 0, 3, 1],
      [1, 3, 0, 2],
      [0, 3, 2, 1],
      [2, 1, 3, 0],
    ];
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];

    pattern.forEach((idx, i) => {
      if (!nums[idx]) return;
      nums[idx].classList.remove(styles.lightGlow, styles.darkGlow);
      glowNum(nums[idx], isDark, i * 0.1);
    });

    if (onComplete) {
      setTimeout(onComplete, 600 + pattern.length * 100);
    }
  };

  const runCycle = () => {
    if (phaseRef.current !== 'normal') return;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    normalSequence(isDark, () => {
      timeoutRef.current = window.setTimeout(() => {
        if (phaseRef.current !== 'normal') return;
        phaseRef.current = 'glitch';

        glitchSequence(isDark, () => {
          timeoutRef.current = window.setTimeout(() => {
            setErrorMsg(ERROR_MESSAGES[Math.floor(Math.random() * ERROR_MESSAGES.length)]);
            setShowError(true);

            timeoutRef.current = window.setTimeout(() => {
              setShowError(false);
              resetNums();

              timeoutRef.current = window.setTimeout(() => {
                phaseRef.current = 'normal';
                runCycle();
              }, RESET_DELAY);
            }, ERROR_DISPLAY_TIME);
          }, GLITCH_DELAY);
        });
      }, NORMAL_DELAY);
    });
  };

  useEffect(() => {
    const nums = numRefs.current.filter(Boolean);
    if (nums.length === 0) return;

    gsap.set(nums, { color: 'rgba(107, 107, 107, 0.12)' });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        runCycle();
      },
    });

    return () => {
      trigger.kill();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="process">
      {showError && (
        <div className={styles.errorModal}>
          <div className={styles.errorContent}>
            <div className={styles.errorIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <p className={styles.errorTitle}>{errorMsg}</p>
            <p className={styles.errorSubtitle}>Brd is currently fixing this issue...</p>
            <div className={styles.loadingBar}>
              <div className={styles.loadingProgress} />
            </div>
          </div>
        </div>
      )}

      <div className={styles.container}>
        <AnimatedText as="h2" className={styles.title} animation="blur" delay={0.1} duration={1}>
          How we work
        </AnimatedText>

        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.numWrapper}>
                <span
                  ref={(el) => { numRefs.current[i] = el; }}
                  className={styles.num}
                >
                  {step.num}
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}