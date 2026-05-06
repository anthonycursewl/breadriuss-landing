import { Container } from '../../ui';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Unprecedented protection. Our threat landscape transformed overnight with Quantum Shield's neural detection.",
    name: "Marcus Chen",
    role: "CISO, Vertex Corp",
    avatar: "https://picsum.photos/seed/ceo1/80/80",
  },
  {
    quote: "The response time is incredible. We've blocked millions of intrusion attempts since deployment.",
    name: "Sarah Williams",
    role: "VP Security, Nexus",
    avatar: "https://picsum.photos/seed/ceo2/80/80",
  },
  {
    quote: "Game-changing technology. Our compliance audits are now seamless thanks to their adaptive mesh.",
    name: "David Park",
    role: "CTO, Quantum Labs",
    avatar: "https://picsum.photos/seed/ceo3/80/80",
  },
];

export function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <Container>
        <h2>Client <span>Feedback</span></h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article key={t.name} className={styles.card}>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  <img src={t.avatar} alt={t.name} loading="lazy" />
                </div>
                <div className={styles.info}>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}