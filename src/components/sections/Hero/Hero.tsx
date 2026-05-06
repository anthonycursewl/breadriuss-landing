import { AnimatedText } from '../../ui/AnimatedText';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { Link } from '../../ui/Link';
import { useState } from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

const NODES = [
  { id: 0, x: 15, y: 20, size: 6, delay: 0 },
  { id: 1, x: 85, y: 15, size: 4, delay: 0.3 },
  { id: 2, x: 8, y: 65, size: 5, delay: 0.6 },
  { id: 3, x: 92, y: 70, size: 7, delay: 0.9 },
  { id: 4, x: 50, y: 8, size: 4, delay: 1.2 },
  { id: 5, x: 25, y: 85, size: 5, delay: 1.5 },
  { id: 6, x: 75, y: 90, size: 6, delay: 1.8 },
];

const CONNECTIONS = [
  { from: 0, to: 1 },
  { from: 0, to: 4 },
  { from: 1, to: 3 },
  { from: 2, to: 0 },
  { from: 4, to: 1 },
  { from: 2, to: 5 },
  { from: 3, to: 6 },
  { from: 5, to: 6 },
];

function Node({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(`.${styles.node}_${x}_${y}`, {
        scale: 1.5,
        opacity: 0,
        duration: 0.8,
        repeat: -1,
        delay: delay,
        ease: 'power2.out',
      });
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay, x, y]);

  return (
    <div
      className={`${styles.node} ${styles[`node_${x}_${y}`]}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
    />
  );
}

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroInner}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleTrack}>
              <AnimatedText
                as="h1"
                className={styles.title}
                animation="blur"
                delay={0.3}
                duration={1.2}
                triggerOnView={false}
              >
                BREADRIUSS
              </AnimatedText>
              <AnimatedText
                as="h1"
                className={styles.title}
                animation="blur"
                delay={0.3}
                duration={1.2}
                triggerOnView={false}
                aria-hidden="true"
              >
                BREADRIUSS
              </AnimatedText>
            </div>
          </div>

          <AnimatedText
            as="p"
            className={styles.subtitle}
            animation="fade"
            delay={0.8}
            duration={1}
            triggerOnView={false}
          >
            Next-generation cybersecurity for enterprise infrastructure.
          </AnimatedText>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="lg"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
              iconPosition="right"
              onClick={() => setIsModalOpen(true)}
            >
              Schedule Assessment
            </Button>
          </div>
        </div>

        <div className={styles.decorative}>
          {NODES.map((node) => (
            <Node key={node.id} {...node} />
          ))}

          <svg className={styles.connections} viewBox="0 0 100 100" preserveAspectRatio="none">
            {CONNECTIONS.map((conn, i) => {
              const from = NODES.find(n => n.id === conn.from)!;
              const to = NODES.find(n => n.id === conn.to)!;
              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={styles.connectionLine}
                />
              );
            })}
          </svg>

          <div className={styles.accentLine} />
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get in Touch"
        description="Ready to secure your infrastructure? Our team is here to help."
        size="md"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Close</Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Contact Us
            </Button>
          </>
        }
      >
        <div className={styles.modalContent}>
          <p>All assessments are scheduled through our partner consultancy Nakomi Studio.</p>
          <Link href="https://nakomi.studio" external>
            nakomi.studio
          </Link>
        </div>
      </Modal>
    </section>
  );
}