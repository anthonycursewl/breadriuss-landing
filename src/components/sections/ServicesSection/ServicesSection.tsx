import { AnimatedText } from '../../ui/AnimatedText';
import { ScrollReveal } from '../../ui/ScrollReveal';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Threat Detection',
    description: 'Advanced neural networks trained on millions of attack vectors. Zero-day vulnerability identification with 99.7% accuracy.',
    code: `const detector = new ThreatEngine({
  model: 'neural-v3',
  sensitivity: 'enterprise',
  layers: 12,
  training: 'continual'
});`,
  },
  {
    title: 'Infrastructure',
    description: 'Distributed architecture with automatic failover. 99.99% uptime across multi-region deployments. Sub-50ms response times globally.',
    code: `const infra = deploy.cluster({
  regions: ['us-east', 'eu-central', 'ap-south'],
  replicas: 3,
  autoScale: true,
  balancing: 'latency-based'
});`,
  },
  {
    title: 'Performance',
    description: 'Systems that scale linearly with demand. Load balancing, edge caching, and optimized query paths for demanding workloads.',
    code: `const metrics = monitor.performance({
  target: '<50ms p99',
  alerts: ['degradation', 'spike'],
  dashboard: 'realtime'
});`,
  },
];

export function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <AnimatedText as="h2" className={styles.title} animation="blur" delay={0.1} duration={1}>
          Core Capabilities
        </AnimatedText>
        <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.3} duration={0.8}>
          Enterprise-grade solutions engineered for scale and security.
        </AnimatedText>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <ScrollReveal key={service.title} animation="slide-up" delay={0.1 * i}>
            <div className={styles.card}>
              <span className={styles.number}>0{i + 1}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <pre className={styles.code}>
                <code>{service.code}</code>
              </pre>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}