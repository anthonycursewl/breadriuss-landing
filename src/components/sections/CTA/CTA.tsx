import { Container, Button } from '../../ui';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <Container>
        <div className={styles.content}>
          <h2>Ready to <span>Secure</span></h2>
          <p>Join 500+ enterprises protected by our quantum-shielded infrastructure.</p>
          <div className={styles.actions}>
            <Button size="lg">Request Demo</Button>
            <Button variant="outline" size="lg">Contact Sales</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}