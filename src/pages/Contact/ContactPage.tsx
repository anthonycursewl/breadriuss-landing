import { useState } from 'react';
import { Container } from '../../components/ui';
import { AnimatedText } from '../../components/ui/AnimatedText';
import { CustomSelect } from '../../components/ui/CustomSelect';
import styles from './Contact.module.css';

export function ContactPage() {
  const [service, setService] = useState('');

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroBackground}>
            <div className={styles.matrixGrid}>
              {[0, 1, 2, 3].map((rowIndex) => (
                <div key={rowIndex} className={styles.matrixRow}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((colIndex) => {
                    const colorIndex = (rowIndex + colIndex) % 5;
                    const colors = ['#06b6d4', '#a855f7', '#f97316', '#22c55e', '#ec4899'];
                    return (
                      <span
                        key={colIndex}
                        className={styles.matrixDot}
                        style={{
                          animationDelay: `${(colIndex * 0.15 + rowIndex * 0.2) % 1.8}s`,
                          background: colors[colorIndex],
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroContent}>
            <AnimatedText as="span" className={styles.eyebrow} animation="blur" delay={0.1} duration={1}>
              Contact
            </AnimatedText>
            <AnimatedText as="h1" className={styles.title} animation="blur" delay={0.2} duration={1.2}>
              Get in Touch
            </AnimatedText>
            <AnimatedText as="p" className={styles.subtitle} animation="fade" delay={0.35} duration={0.8}>
              Ready to secure your infrastructure? Our team is available to discuss
              your security needs and provide tailored solutions.
            </AnimatedText>
          </div>
        </Container>
      </section>

      <section className={styles.formSection}>
        <Container>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGrid}>
              <div className={styles.inputGroup}>
                <input type="text" id="name" name="name" placeholder=" " required />
                <label htmlFor="name">Name</label>
                <div className={styles.inputLine} />
              </div>

              <div className={styles.inputGroup}>
                <input type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email">Email</label>
                <div className={styles.inputLine} />
              </div>

              <div className={styles.inputGroup}>
                <input type="text" id="company" name="company" placeholder=" " required />
                <label htmlFor="company">Company</label>
                <div className={styles.inputLine} />
              </div>

              <div className={styles.inputGroup}>
                <CustomSelect
                  id="service"
                  name="service"
                  options={[
                    { value: 'assessment', label: 'Security Assessment' },
                    { value: 'consulting', label: 'Consulting' },
                    { value: 'implementation', label: 'Implementation' },
                    { value: 'other', label: 'Other' },
                  ]}
                  value={service}
                  onChange={setService}
                  placeholder="Service Interested"
                  required
                />
              </div>

              <div className={`${styles.inputGroup} ${styles.inputFull}`}>
                <textarea id="message" name="message" rows={4} placeholder=" " required />
                <label htmlFor="message">Message</label>
                <div className={styles.inputLine} />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          <div className={styles.altContact}>
            <span>or email us directly at</span>
            <a href="mailto:hello@breadriuss.com" className={styles.emailLink}>
              hello@breadriuss.com
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}