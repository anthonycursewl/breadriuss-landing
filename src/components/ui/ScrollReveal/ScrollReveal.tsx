import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ScrollReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const getInitialState = () => {
      switch (animation) {
        case 'slide-up':
          return { y: 60, opacity: 0 };
        case 'slide-left':
          return { x: -60, opacity: 0 };
        case 'slide-right':
          return { x: 60, opacity: 0 };
        case 'scale':
          return { scale: 0.9, opacity: 0 };
        default:
          return { opacity: 0 };
      }
    };

    const getFinalState = () => {
      switch (animation) {
        case 'slide-up':
        case 'slide-left':
        case 'slide-right':
          return { x: 0, y: 0, opacity: 1 };
        case 'scale':
          return { scale: 1, opacity: 1 };
        default:
          return { opacity: 1 };
      }
    };

    const initial = getInitialState();
    const final = getFinalState();

    gsap.set(element, initial);

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(element, {
          ...final,
          duration,
          delay,
          ease: 'power3.out',
        });
      },
      once,
    });

    return () => {
      trigger.kill();
      gsap.killTweensOf(element);
    };
  }, [animation, delay, duration, once]);

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </div>
  );
}