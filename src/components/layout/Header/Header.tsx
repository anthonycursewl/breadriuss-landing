import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks';
import { Container } from '../../ui';
import { ThemeToggle } from '../../ui/DropdownToggle';
import { useThemeStore } from '../../../stores/themeStore';
import styles from './Header.module.css';

export function Header() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 10;
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isScrolled) {
      setMobileMenuOpen(false);
    }
  }, [isScrolled]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <Container wide>
        <nav className={styles.nav}>
          <RouterLink to="/" className={styles.logoLink}>
            <img
              src={resolvedTheme === 'dark' ? '/brd/brd_lg_dark.svg' : '/brd/brd_lg_light.svg'}
              alt="Breadriuss"
              className={styles.logo}
            />
          </RouterLink>

          <div className={styles.links}>
            <RouterLink to="/about" className={styles.link}>About</RouterLink>
            <RouterLink to="/contact" className={styles.link}>Contact</RouterLink>
          </div>

          <div className={styles.actions}>
            <ThemeToggle />
          </div>

          <button
            className={styles.mobileMenuBtn}
            aria-label="Menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <RouterLink to="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            About
          </RouterLink>
          <RouterLink to="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
            Contact
          </RouterLink>
        </div>
      </div>
    </header>
  );
}