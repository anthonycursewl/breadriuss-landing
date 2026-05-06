import { Container } from '../../ui';
import styles from './About.module.css';

const stats = [
  { value: '500+', label: 'Enterprises' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50ms', label: 'Avg Response' },
  { value: '24/7', label: 'Support' },
];

const features = [
  'Real-time threat intelligence',
  'Quantum-resistant encryption',
  'Automated incident response',
  'Seamless integration APIs',
];

const integrityImages = [
  { src: 'https://picsum.photos/seed/sec1/400/400', label: 'Firewall' },
  { src: 'https://picsum.photos/seed/sec2/400/400', label: 'Encryption' },
  { src: 'https://picsum.photos/seed/sec3/400/400', label: 'Monitoring' },
  { src: 'https://picsum.photos/seed/sec4/400/400', label: 'Response' },
  { src: 'https://picsum.photos/seed/sec5/400/400', label: 'Detection' },
  { src: 'https://picsum.photos/seed/sec6/400/400', label: 'Analysis' },
  { src: 'https://picsum.photos/seed/sec7/400/400', label: 'Protection' },
  { src: 'https://picsum.photos/seed/sec8/400/400', label: 'Recovery' },
];

export function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <Container>
          <div className={styles.featuresGrid}>
            <div className={styles.content}>
              <h2>Why <span>Choose Us</span></h2>
              <p>
                Our quantum-inspired security platform delivers unmatched protection
                for modern enterprises. We combine advanced neural networks with
                real-time threat intelligence to stay ahead of emerging threats.
              </p>
              <p>
                Trusted by Fortune 500 companies and government agencies worldwide,
                our solutions provide comprehensive coverage against sophisticated
                cyber attacks while maintaining minimal performance overhead.
              </p>
              <div className={styles.features}>
                {features.map((f) => (
                  <div key={f} className={styles.feature}>
                    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className={styles.featureText}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.stats}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.integrity} id="integrity">
        <Container>
          <h2>System <span>Integrity</span></h2>
          <div className={styles.imagesGrid}>
            {integrityImages.map((img) => (
              <div key={img.label} className={styles.imgWrapper}>
                <img src={img.src} alt={img.label} loading="lazy" />
                <div className={styles.imgOverlay}>
                  <span className={styles.imgLabel}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}