import { useEffect, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header, Footer } from '../index';
import { buildCanonical } from '../../../utils/seo';
import styles from './Layout.module.css';

interface PageSEO {
  title: string;
  description: string;
}

const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: 'Breadriuss | Next-Generation Cybersecurity Solutions',
    description: 'BREADRIUSS delivers enterprise-grade cybersecurity powered by quantum-inspired neural networks. Advanced threat detection, adaptive security, and 99.99% uptime for Fortune 500 companies.',
  },
  '/about': {
    title: 'About | Breadriuss',
    description: 'Learn about BREADRIUSS — our mission, values, and approach to next-generation cybersecurity. Quantum-inspired neural networks protecting enterprises worldwide.',
  },
  '/contact': {
    title: 'Contact | Breadriuss',
    description: 'Get in touch with BREADRIUSS. Enterprise cybersecurity solutions, threat detection, and security architecture consultations available 24/7.',
  },
  '/solutions': {
    title: 'Solutions | Breadriuss',
    description: 'Explore BREADRIUSS cybersecurity solutions: web architecture, mobile security, and enterprise-grade threat detection systems.',
  },
};

export function Layout() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const isAnimating = useRef(false);

  useEffect(() => {
    const seo = PAGE_SEO[location.pathname];
    if (!seo) return;

    const canonical = buildCanonical(location.pathname);

    document.title = seo.title;

    const setMeta = (name: string, value: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const setMetaProp = (property: string, value: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    setMeta('description', seo.description);
    setMetaProp('og:title', seo.title);
    setMetaProp('og:description', seo.description);
    setMetaProp('og:url', canonical);
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash, location.pathname]);

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
