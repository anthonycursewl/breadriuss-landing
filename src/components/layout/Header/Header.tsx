import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks';
import { Container } from '../../ui';
import { ThemeToggle } from '../../ui/DropdownToggle';
import { useTheme } from '../../providers/ThemeProvider';
import styles from './Header.module.css';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/contact', label: 'Contact' },
];

function MobileMenuPortal({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) {
  return createPortal(
    <div className={`${styles.mobileMenuPortal} ${isOpen ? styles.mobileMenuPortalOpen : ''}`}>
      {children}
    </div>,
    document.body
  );
}

export function Header() {
  const { pathname } = useLocation();
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 10;
  const { resolvedTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!isScrolled) {
      setMobileMenuOpen(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        closeMobileMenu();
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <>
      <header className={`${styles.header} ${isScrolled || mobileMenuOpen ? styles.scrolled : ''}`}>
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
              {NAV_LINKS.filter(link => link.path !== '/').map(link => (
                <RouterLink
                  key={link.path}
                  to={link.path}
                  className={`${styles.link} ${pathname === link.path ? styles.activeLink : ''}`}
                >
                  {link.label}
                  {pathname === link.path && (
                    <span className={styles.youAreHere}>You're here</span>
                  )}
                </RouterLink>
              ))}
            </div>

            <div className={styles.actions}>
              <ThemeToggle />
            </div>

            <button
              className={styles.mobileMenuBtn}
              aria-label="Menu"
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
      </header>

      <MobileMenuPortal isOpen={mobileMenuOpen}>
        <div
          className={styles.mobileMenuOverlay}
          onClick={closeMobileMenu}
        />
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <img
              src={resolvedTheme === 'dark' ? '/brd/brd_lg_dark.svg' : '/brd/brd_lg_light.svg'}
              alt="Breadriuss"
              className={styles.mobileMenuLogo}
            />
            <button
              className={styles.mobileMenuClose}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className={styles.mobileMenuContent}>
            {NAV_LINKS.map(link => (
              <RouterLink
                key={link.path}
                to={link.path}
                className={`${styles.mobileLink} ${pathname === link.path ? styles.mobileLinkActive : ''}`}
                onClick={closeMobileMenu}
              >
                {link.label}
                {pathname === link.path && (
                  <span className={styles.youAreHereMobile}>You're here</span>
                )}
              </RouterLink>
            ))}
          </div>
        </div>
      </MobileMenuPortal>
    </>
  );
}