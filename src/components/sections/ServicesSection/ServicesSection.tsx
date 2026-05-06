import { AnimatedText } from '../../ui/AnimatedText';
import { ScrollReveal } from '../../ui/ScrollReveal';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Threat Detection',
    description: 'Our neural-network-powered detection system analyzes patterns across 50M+ threat vectors in real-time. With 99.7% accuracy in identifying zero-day vulnerabilities, we catch what traditional signature-based tools miss. Continuous model training ensures protection evolves faster than emerging attack vectors.',
    code: `const detector = new ThreatEngine({
  model: 'neural-v3',
  sensitivity: 'enterprise',
  layers: 12,
  training: 'continual'
});`,
  },
  {
    title: 'Infrastructure',
    description: 'Multi-region distributed architecture with automatic failover guarantees 99.99% uptime SLA. Our edge network spans 12 global regions, delivering sub-50ms response times worldwide. Auto-scaling infrastructure handles traffic spikes without manual intervention, eliminating performance degradation during critical moments.',
    code: `const infra = deploy.cluster({
  regions: ['us-east', 'eu-central', 'ap-south'],
  replicas: 3,
  autoScale: true,
  balancing: 'latency-based'
});`,
  },
  {
    title: 'Performance',
    description: 'Linear scaling architecture maintains consistent response times under any load. Edge caching at 200+ global locations, intelligent load balancing, and optimized database query paths ensure your applications handle enterprise workloads without compromising speed or reliability.',
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