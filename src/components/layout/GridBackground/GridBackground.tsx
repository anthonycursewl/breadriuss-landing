import { useEffect } from 'react';
import gsap from 'gsap';
import styles from './GridBackground.module.css';

const STAR_COUNT = 8;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createStreak(container: HTMLDivElement, theme: string) {
  const streak = document.createElement('div');
  streak.className = styles.streak;

  const startX = randomBetween(50, 100);
  const startY = randomBetween(-20, 20);
  const angle = randomBetween(140, 160);
  const angleRad = angle * (Math.PI / 180);
  const distance = randomBetween(500, 900);
  const duration = randomBetween(1, 1.8);
  const delay = randomBetween(0, 3);

  container.appendChild(streak);

  gsap.set(streak, {
    left: `${startX}%`,
    top: `${startY}%`,
    rotation: angle,
    x: 0,
    y: 0,
    opacity: 0,
  });

  const targetX = Math.cos(angleRad) * distance;
  const targetY = Math.sin(angleRad) * distance;

  const tl = gsap.timeline({
    delay,
    onComplete: () => {
      streak.remove();
      createStreak(container, theme);
    },
  });

  tl.to(streak, {
    x: targetX,
    y: targetY,
    duration,
    ease: 'none',
  }, 0);

  tl.to(streak, {
    opacity: 1,
    duration: duration * 0.1,
    ease: 'power2.out',
  }, 0);

  tl.to(streak, {
    opacity: 0,
    duration: duration * 0.3,
    ease: 'power2.in',
  }, duration * 0.7);
}

export function GridBackground() {
  useEffect(() => {
    const container = document.querySelector('.' + styles.stars) as HTMLDivElement;
    if (!container) return;

    for (let i = 0; i < STAR_COUNT; i++) {
      setTimeout(() => {
        createStreak(container, 'dark');
      }, i * randomBetween(1500, 3000));
    }
  }, []);

  return (
    <div className={styles.gridBackground}>
      <div className={styles.gridPattern} />
      <div className={`${styles.zone} ${styles.zone1}`} />
      <div className={`${styles.zone} ${styles.zone2}`} />
      <div className={`${styles.zone} ${styles.zone3}`} />
      <div className={`${styles.zone} ${styles.zone4}`} />
      <div className={`${styles.zone} ${styles.zone5}`} />
      <div className={`${styles.zone} ${styles.zone6}`} />
      <div className={`${styles.zone} ${styles.zone7}`} />
      <div className={styles.stars} />
    </div>
  );
}