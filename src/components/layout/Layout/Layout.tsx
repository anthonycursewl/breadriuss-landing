import { useEffect, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header, Footer } from '../index';
import styles from './Layout.module.css';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Breadriuss | Next-Generation Cybersecurity Solutions',
  '/about': 'About | Breadriuss',
  '/contact': 'Contact | Breadriuss',
  '/solutions': 'Solutions | Breadriuss',
};

const BASE_TITLE = 'Breadriuss';

export function Layout() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const isAnimating = useRef(false);

  useEffect(() => {
    const title = PAGE_TITLES[location.pathname] || BASE_TITLE;
    document.title = title;
  }, [location.pathname]);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      document.body.classList.add(styles.pageExit);
      isAnimating.current = true;

      const timer = setTimeout(() => {
        document.body.classList.remove(styles.pageExit);
        document.body.classList.add(styles.pageEnter);
        isAnimating.current = false;
        prevPath.current = location.pathname;

        setTimeout(() => {
          document.body.classList.remove(styles.pageEnter);
        }, 400);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}><Outlet /></main>
      <Footer />
    </div>
  );
}