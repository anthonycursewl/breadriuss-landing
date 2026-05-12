import { Link } from 'react-router-dom';
import { Container } from '../../ui';
import { useTheme } from '../../providers/ThemeProvider';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  to: string;
}

const footerLinks: Record<string, FooterLink[]> = {
  services: [
    { label: 'Threat Detection', to: '/#services' },
    { label: 'Security Architecture', to: '/#services' },
    { label: 'Incident Response', to: '/#services' },
    { label: '24/7 Monitoring', to: '/#services' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Approach', to: '/#philosophy' },
    { label: 'How We Work', to: '/#process' },
    { label: 'Contact', to: '/#contact' },
  ],
};

export function Footer() {
  const { resolvedTheme } = useTheme();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <img
                src={resolvedTheme === 'dark' ? '/brd/brd_lg_dark.svg' : '/brd/brd_lg_light.svg'}
                alt="Breadriuss Logo"
              />
              <span className={styles.brandName}>BREADRIUSS</span>
            </div>
            <p>Enterprise-grade cybersecurity solutions. Protecting your digital assets with advanced threat detection and adaptive security measures.</p>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
