import { Container } from '../../ui';
import { AnimatedText } from '../../ui/AnimatedText';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { Link } from '../../ui/Link';
import styles from './DigitalSolutions.module.css';

const solutions = [
  {
    title: 'Web Enterprise',
    description: 'Scalable web applications built with modern frameworks. From React frontends to Node.js microservices, we architect systems that handle millions of users.',
    code: `const platform = build.enterprise({
  stack: ['React', 'Node', 'Postgres'],
  architecture: 'microservices',
  deployment: 'edge-cdn'
});`,
  },
  {
    title: 'Mobile Enterprise',
    description: 'Native-quality mobile experiences across iOS and Android. Offline-first architecture with real-time sync and biometric security built in.',
    code: `const app = deploy.crossPlatform({
  frameworks: ['React Native'],
  features: ['offline-first', 'sync'],
  security: 'biometric-auth'
});`,
  },
  {
    title: 'Security Integration',
    description: 'Cybersecurity baked into every layer. Threat detection, encrypted data pipelines, and continuous vulnerability scanning for all digital assets.',
    code: `const security = embed.protect({
  threatDetection: 'real-time',
  encryption: 'E2E',
  compliance: ['SOC2', 'GDPR']
});`,
  },
];

export function DigitalSolutions() {
  return (
    <section className={styles.section} id="digital-solutions">
      <Container>
        <div className={styles.header}>
          <AnimatedText as="h2" className={styles.title} animation="blur" delay={0.1} duration={1}>
            Digital Solutions
          </AnimatedText>
          <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.2} duration={0.8}>
            Enterprise-grade web and mobile development integrated with security.
          </AnimatedText>
        </div>

        <div className={styles.grid}>
          {solutions.map((solution, i) => (
            <ScrollReveal key={solution.title} animation="slide-up" delay={0.1 * i}>
              <div className={styles.card}>
                <span className={styles.number}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDesc}>{solution.description}</p>
                <pre className={styles.code}>
                  <code>{solution.code}</code>
                </pre>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.fadeOverlay}>
          <div className={styles.viewMore}>
            <Link href="/solutions">
              View more
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}