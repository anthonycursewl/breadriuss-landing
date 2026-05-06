import { Container } from '../../ui';
import styles from './Portfolio.module.css';

const projects = [
  {
    title: 'Financial Sector',
    description: 'Banking security overhaul',
    tags: ['Enterprise', 'Compliance'],
    image: 'https://picsum.photos/seed/proj1/800/600',
  },
  {
    title: 'Healthcare Network',
    description: 'HIPAA compliance shield',
    tags: ['Healthcare', 'Encryption'],
    image: 'https://picsum.photos/seed/proj2/800/600',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Multi-cloud protection',
    tags: ['AWS', 'Azure'],
    image: 'https://picsum.photos/seed/proj3/800/600',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Fraud prevention system',
    tags: ['Retail', 'AI'],
    image: 'https://picsum.photos/seed/proj4/800/600',
  },
  {
    title: 'Government Agency',
    description: 'Classified data defense',
    tags: ['Government', 'Top Secret'],
    image: 'https://picsum.photos/seed/proj5/800/600',
  },
  {
    title: 'Tech Startup',
    description: 'Zero-trust architecture',
    tags: ['Startup', 'SaaS'],
    image: 'https://picsum.photos/seed/proj6/800/600',
  },
];

export function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <Container>
        <h2>Deploy<span>ments</span></h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.card}>
              <img src={p.image} alt={p.title} className={styles.image} loading="lazy" />
              <div className={styles.content}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}