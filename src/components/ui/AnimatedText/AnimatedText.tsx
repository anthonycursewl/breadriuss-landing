import { useRef, useEffect, type ReactNode, type ElementType } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './AnimatedText.module.css';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: 'words' | 'chars' | 'lines';
  animation?: 'blur' | 'reveal' | 'fade' | 'slide' | 'scramble';
  triggerOnView?: boolean;
}

const scrambleChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Helper function to generate random text with the SAME length as the original
const generateScramble = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
  }
  return result;
};

export function AnimatedText({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  duration = 0.8,
  // For scramble, 'chars' usually looks much better, but will work with 'words' now
  splitBy = 'words',
  animation = 'blur',
  triggerOnView = true,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const allElements = Array.from(container.querySelectorAll<HTMLElement>('[data-animate]'));
    if (allElements.length === 0) return;

    const scramble = (targetElements: HTMLElement[]) => {
      // 1. Read text from data-original to avoid issues with React Strict Mode
      const originalTexts = targetElements.map(el => el.getAttribute('data-original') || '');
      const proxy = { progress: 0 };

      // 2. Initial state: symbols with opacity 0, respecting original length
      targetElements.forEach((el, i) => {
        const text = originalTexts[i];
        if (text.trim() !== '') {
          el.textContent = generateScramble(text.length);
          gsap.set(el, { opacity: 0, y: 8 });
        }
      });

      const tl = gsap.timeline({ delay });

      // 3. Fade in and slide up
      tl.to(targetElements, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: 'power2.out',
      });

      // 4. Scramble and reveal
      tl.to(proxy, {
        progress: 1,
        // Sumamos el tiempo del stagger para que el proxy no termine antes que el fade-in
        duration: duration + (targetElements.length * 0.02),
        ease: 'none',
        onUpdate: () => {
          const progress = proxy.progress;
          targetElements.forEach((el, i) => {
            const originalText = originalTexts[i];
            if (originalText.trim() === '') return;

            // Sequential reveal threshold
            const revealStart = (i / targetElements.length) * 0.6;
            const revealDuration = 0.3;

            if (progress >= revealStart + revealDuration) {
              const isLast = i === targetElements.length - 1;
              el.textContent = isLast ? originalText : originalText + ' ';
            } else if (progress >= revealStart) {
              // Active decipher phase
              el.textContent = generateScramble(originalText.length);
            } else {
              // Passive phase (slower decipher to avoid CPU saturation)
              if (Math.random() > 0.8) {
                el.textContent = generateScramble(originalText.length);
              }
            }
          });
        },
        onComplete: () => {
          targetElements.forEach((el, i) => {
            const word = originalTexts[i];
            const isLast = i === targetElements.length - 1;
            el.textContent = isLast ? word : word + ' ';
          });
        }
      }, "<"); // "<" hace que esto empiece al mismo tiempo que el fade-in

      return () => tl.kill();
    };

    const getVars = () => {
      switch (animation) {
        case 'blur': return { from: { filter: 'blur(12px)', opacity: 0 }, to: { filter: 'blur(0px)', opacity: 1 }, stagger: 0.08, ease: 'power3.out' };
        case 'reveal': return { from: { yPercent: 100, opacity: 0 }, to: { yPercent: 0, opacity: 1 }, stagger: 0.06, ease: 'power3.out' };
        case 'fade': return { from: { opacity: 0, y: 20 }, to: { opacity: 1, y: 0 }, stagger: 0.05, ease: 'power2.out' };
        case 'slide': return { from: { x: -40, opacity: 0 }, to: { x: 0, opacity: 1 }, stagger: 0.07, ease: 'power3.out' };
        default: return { from: { opacity: 0 }, to: { opacity: 1 }, stagger: 0.05, ease: 'power2.out' };
      }
    };

    if (animation === 'scramble') {
      if (triggerOnView) {
        const trigger = ScrollTrigger.create({
          trigger: container,
          start: 'top 85%',
          onEnter: () => scramble(allElements),
          once: true,
        });
        return () => trigger.kill();
      } else {
        return scramble(allElements);
      }
    }

    const vars = getVars();

    if (triggerOnView) {
      gsap.set(allElements, vars.from);
      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        onEnter: () => gsap.to(allElements, { ...vars.to, duration, delay }),
        once: true,
      });
      return () => { trigger.kill(); gsap.killTweensOf(allElements); };
    } else {
      gsap.fromTo(allElements, vars.from, { ...vars.to, duration, delay });
      return () => gsap.killTweensOf(allElements);
    }
  }, [animation, delay, duration, triggerOnView, splitBy]);

  const renderContent = (content: ReactNode): ReactNode[] => {
    if (typeof content !== 'string') return [content];

    const trimmedContent = content.trim();

    // We added `data-original` to ALL spans
    if (splitBy === 'chars') {
      return trimmedContent.split('').map((char, i) => (
        <span key={i} data-animate data-original={char} style={{ display: 'inline-block' }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    if (splitBy === 'words') {
      return trimmedContent.split(' ').map((word, i, arr) => (
        <span key={i} data-animate data-original={word} style={{ display: 'inline-block', marginRight: i < arr.length - 1 ? '0.3em' : 0 }}>
          {word}
        </span>
      ));
    }
    if (splitBy === 'lines') {
      return trimmedContent.split('\n').map((line, i) => (
        <span key={i} data-animate data-original={line} style={{ display: 'block' }}>
          {line}
        </span>
      ));
    }
    return [trimmedContent];
  };

  return (
    <Tag
      ref={containerRef}
      className={`${styles.container} ${className}`}
    >
      {renderContent(children as string)}
    </Tag>
  );
}