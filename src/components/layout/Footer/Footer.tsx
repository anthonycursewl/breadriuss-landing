import { Container } from '../../ui';
import { useThemeStore } from '../../../stores/themeStore';
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { label: 'Threat Detection', href: '#services' },
    { label: 'Security Architecture', href: '#services' },
    { label: 'Incident Response', href: '#services' },
    { label: '24/7 Monitoring', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Approach', href: '#philosophy' },
    { label: 'How We Work', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Security Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Status', href: '#' },
  ],
};

export function Footer() {
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);

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
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              {footerLinks.resources.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>2026 BREADRIUSS. All rights reserved.</p>
          <p>Securing the future, one threat at a time.</p>
        </div>
      </Container>
    </footer>
  );
}