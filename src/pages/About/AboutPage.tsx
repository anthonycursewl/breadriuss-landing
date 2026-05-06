import { Container } from '../../components/ui';
import { Link } from '../../components/ui/Link';
import { AnimatedText } from '../../components/ui/AnimatedText';
import styles from './About.module.css';

const values = [
  {
    title: 'Innovation',
    description: 'We push the boundaries of cybersecurity with cutting-edge AI and quantum-resistant technologies. Our research team continuously develops new methods to stay ahead of emerging threats.',
    metric: '12+',
    metricLabel: 'Patents Filed',
  },
  {
    title: 'Integrity',
    description: 'Zero tolerance for security compromises. We maintain transparent operations and uphold the highest ethical standards across all our client engagements.',
    metric: '0',
    metricLabel: 'Data Breaches',
  },
  {
    title: 'Excellence',
    description: 'Delivering enterprise-grade protection that exceeds industry standards. Every solution is crafted with precision and rigorously tested.',
    metric: '99.9%',
    metricLabel: 'Client Satisfaction',
  },
  {
    title: 'Partnership',
    description: 'Working alongside Nakomi Studio to provide comprehensive security consultancy. Together we deliver end-to-end protection for your infrastructure.',
    metric: '24/7',
    metricLabel: 'Expert Support',
  },
];

export function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <AnimatedText as="span" className={styles.eyebrow} animation="blur" delay={0.1} duration={1}>
              About Us
            </AnimatedText>
            <AnimatedText as="h1" className={styles.title} animation="blur" delay={0.2} duration={1.2}>
              Securing the Future
            </AnimatedText>
            <AnimatedText as="h1" className={styles.titleOutline} animation="blur" delay={0.3} duration={1.2}>
              of Enterprise
            </AnimatedText>
            <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.4} duration={0.8}>
              Breadriuss delivers next-generation cybersecurity solutions powered by advanced AI
              and real-time threat intelligence. We protect the world's most sensitive infrastructure
              from emerging cyber threats.
            </AnimatedText>
          </div>
          <div className={styles.heroDecor}>
            <div className={styles.decorLine} />
            <div className={styles.decorSquare} />
          </div>
        </Container>
      </section>

      <section className={styles.mission}>
        <Container>
          <div className={styles.missionContent}>
            <span className={styles.sectionLabel}>Our Mission</span>
            <h2 className={styles.missionTitle}>
              Protection through innovation and expertise
            </h2>
            <p className={styles.missionText}>
              In an era where cyber threats evolve daily, Breadriuss stands as the definitive
              shield for enterprise infrastructure. Our mission is to provide unparalleled
              protection through innovation, expertise, and unwavering commitment to our clients'
              security.
            </p>
            <p className={styles.missionText}>
              All assessments and security consultations are delivered through our trusted
              partner <Link href="https://nakomi.studio" external>Nakomi Studio</Link>, ensuring
              the highest quality of service and expertise.
            </p>
          </div>
        </Container>
      </section>

      <section className={styles.values}>
        <Container>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>What We Stand For</span>
            <h2 className={styles.valuesTitle}>Our Values</h2>
          </div>
          <div className={styles.valuesTimeline}>
            <div className={styles.timelineLine} />
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${styles.valueCard} ${i % 2 === 0 ? styles.cardLeft : styles.cardRight}`}
              >
                <div className={styles.timelineDot} />
                <div className={styles.valueContent}>
                  <span className={styles.valueNumber}>0{i + 1}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                  <div className={styles.valueMetric}>
                    <span className={styles.metricValue}>{v.metric}</span>
                    <span className={styles.metricLabel}>{v.metricLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.cta}>
        <Container>
          <div className={styles.ctaContent}>
            <span className={styles.sectionLabel}>Get Started</span>
            <h2 className={styles.ctaTitle}>Partner With Us</h2>
            <p className={styles.ctaText}>
              Ready to strengthen your security posture? Connect with our team through
              Nakomi Studio to schedule your assessment.
            </p>
            <Link href="https://nakomi.studio" external>
              Visit Nakomi Studio
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}