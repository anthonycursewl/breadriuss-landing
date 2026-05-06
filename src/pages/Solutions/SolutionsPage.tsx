import { Container } from '../../components/ui';
import { AnimatedText } from '../../components/ui/AnimatedText';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Link } from '../../components/ui/Link';
import styles from './Solutions.module.css';

export function SolutionsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <AnimatedText as="span" className={styles.eyebrow} animation="blur" delay={0.1} duration={1}>
            Digital Solutions
          </AnimatedText>
          <AnimatedText as="h1" className={styles.title} animation="blur" delay={0.2} duration={1.2}>
            High-Performance Web & Mobile
          </AnimatedText>
          <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.3} duration={0.8}>
            End-to-end digital solutions engineered with security and scalability at their core.
            As an innovative startup rooted in robust cybersecurity principles, we architect
            high-performance web platforms and cross-platform mobile ecosystems to drive your business forward.
          </AnimatedText>
        </div>
      </section>

      <article className={styles.article}>
        <Container>

          {/* WEB SOLUTIONS */}
          <ScrollReveal animation="fade" delay={0.1}>
            <section className={styles.articleSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Web Architecture Ecosystems</h2>
                <span className={styles.sectionBadge}>Modern Web Development</span>
              </div>

              <div className={styles.sectionContent}>
                <p className={styles.leadParagraph}>
                  We architect high-performance, resilient web applications tailored to your precise operational requirements.
                  Our technology stack leverages the industry's most advanced frameworks—including
                  <strong> React, Svelte, Next.js, Astro, and Vue (Nuxt)</strong>—enabling us to deliver
                  blazing-fast, SEO-optimized, and highly interactive user experiences with zero compromise on stability.
                </p>

                <p>
                  Our architecture is built for the future. From ultra-fast static site generation (SSG) via Astro
                  for content-heavy platforms, to complex Server-Side Rendered (SSR) architectures using Next.js and Nuxt,
                  we select the optimal tool for each technical challenge. Every web solution we deploy is built upon a 
                  hardened foundation of cybersecurity best practices, ensuring your infrastructure is unassailable.
                </p>

                <p>
                  We implement fully automated CI/CD pipelines to guarantee rapid, zero-downtime deployments.
                  By harnessing modern edge computing and distributed CDN topologies, our web platforms guarantee
                  sub-100ms global latency, delivering enterprise-grade infrastructure performance while
                  maintaining the hyper-agile innovation cycles of a startup.
                </p>

                <div className={styles.codeBlock}>
                  <pre><code>{`const webPlatform = build.modernWeb({
  frameworks: ['React', 'Next.js', 'Svelte', 'Astro', 'Vue'],
  architecture: 'serverless-edge',
  performance: 'ultra-fast',
  seo: 'optimized',
  security: 'enterprise-grade'
});`}</code></pre>
                </div>

                <div className={styles.imagePlaceholder}>
                  <span>Web Architecture Topology</span>
                </div>
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>5+</span>
                  <span className={styles.specLabel}>Modern Frameworks</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>100%</span>
                  <span className={styles.specLabel}>SEO Optimized</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>CI/CD</span>
                  <span className={styles.specLabel}>Agile Deployments</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>Edge</span>
                  <span className={styles.specLabel}>Minimal Latency</span>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <div className={styles.divider} />

          {/* MOBILE SOLUTIONS */}
          <ScrollReveal animation="fade" delay={0.1}>
            <section className={styles.articleSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Mobile Engineering</h2>
                <span className={styles.sectionBadge}>Native & Cross-Platform</span>
              </div>

              <div className={styles.sectionContent}>
                <p className={styles.leadParagraph}>
                  Whether your use case demands the absolute raw performance of native code or the rapid iteration of
                  cross-platform environments, our mobile engineering team delivers. We craft exceptional mobile 
                  experiences leveraging <strong>React Native and Flutter</strong> for agile, unified codebases, as well as 
                  <strong> Kotlin and Swift</strong> when maximum hardware control and native optimizations are strictly required.
                </p>

                <p>
                  Our mobile applications are architected with a strict offline-first paradigm and enterprise-grade 
                  security from inception. We implement biometric authentication mechanisms and comprehensive 
                  End-to-End (E2E) encryption by default, ensuring that even as a startup, your application adheres 
                  to the most stringent data protection and privacy standards.
                </p>

                <p>
                  From robust, low-latency push notification pipelines to resilient background data synchronization 
                  with conflict resolution algorithms, we engineer mobile solutions that feel instantaneous. 
                  Our applications bridge the critical gap between complex backend topologies and intuitive, 
                  user-centric interfaces.
                </p>

                <div className={styles.codeBlock}>
                  <pre><code>{`const mobileApp = deploy.mobile({
  frameworks: ['React Native', 'Flutter'],
  native: ['Kotlin', 'Swift'],
  features: ['offline-first', 'biometric-auth'],
  encryption: 'E2E',
  performance: 'native-like'
});`}</code></pre>
                </div>

                <div className={styles.imagePlaceholder}>
                  <span>Mobile Architecture Topology</span>
                </div>
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>4</span>
                  <span className={styles.specLabel}>Core Technologies</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>Bio</span>
                  <span className={styles.specLabel}>Authentication</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>iOS/Android</span>
                  <span className={styles.specLabel}>Total Coverage</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>E2E</span>
                  <span className={styles.specLabel}>Native Encryption</span>
                </div>
              </div>
            </section>
          </ScrollReveal>

          <div className={styles.divider} />

          {/* SECURITY INTEGRATION */}
          <ScrollReveal animation="fade" delay={0.1}>
            <section className={styles.articleSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Integrated Cybersecurity</h2>
                <span className={styles.sectionBadge}>Security by Design</span>
              </div>

              <div className={styles.sectionContent}>
                <p className={styles.leadParagraph}>
                  As a technology startup with profound roots in cybersecurity, we operate on the fundamental principle 
                  that protection must be baked into every layer of the stack from day zero—never bolted on as an 
                  afterthought. We deploy robust, military-grade cryptographic protocols to secure your digital assets unconditionally.
                </p>

                <p>
                  Our systems leverage advanced threat modeling methodologies, highly secure data pipelines, and rigorous 
                  compliance standards (including GDPR and SOC2 readiness) to ensure your infrastructure remains hardened 
                  against rapidly evolving threat vectors. We maintain a continuous posture of proactive monitoring and code auditing.
                </p>

                <p>
                  By integrating automated vulnerability scanning directly into our CI/CD pipelines (DevSecOps), 
                  we intercept potential exploits long before they propagate to production environments. We provide 
                  the uncompromising security assurance of a large-scale enterprise, juxtaposed with the rapid 
                  iterative innovation cycles characteristic of a startup.
                </p>

                <div className={styles.codeBlock}>
                  <pre><code>{`const security = embed.protect({
  approach: 'security-by-design',
  encryption: 'military-grade',
  compliance: ['GDPR-ready', 'SOC2-ready'],
  ci_cd: 'automated-scanning',
  audit: 'continuous'
});`}</code></pre>
                </div>

                <div className={styles.imagePlaceholder}>
                  <span>Security Architecture Topology</span>
                </div>
              </div>

              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>100%</span>
                  <span className={styles.specLabel}>Security by Design</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>CI/CD</span>
                  <span className={styles.specLabel}>Code Analysis</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>24/7</span>
                  <span className={styles.specLabel}>Proactive Monitoring</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specValue}>Zero</span>
                  <span className={styles.specLabel}>Trust Architecture</span>
                </div>
              </div>
            </section>
          </ScrollReveal>

        </Container>
      </article>

      <section className={styles.cta}>
        <Container>
          <ScrollReveal animation="fade" delay={0.1}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to Build?</h2>
              <p className={styles.ctaText}>
                Let's discuss how our technology solutions can scale your business with maximum security.
              </p>
              <Link href="https://nakomi.studio" external>
                Schedule a Technical Consultation
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}