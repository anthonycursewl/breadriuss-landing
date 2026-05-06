import { Link } from 'react-router-dom';
import { Button } from '../../components/ui';
import { useTheme } from '../../components/providers/ThemeProvider';
import styles from './NotFound.module.css';

export function NotFoundPage() {
  const { resolvedTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.glitchBg} />
      <div className={styles.scanline} />

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img
            src={resolvedTheme === 'dark' ? '/brd/brd_lg_dark.svg' : '/brd/brd_lg_light.svg'}
            alt="Breadriuss"
            className={styles.logo}
          />
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.codeWrapper}>
          <h1 className={styles.code}>404</h1>
        </div>

        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.linkWrapper}>
          <Button variant="primary" size="md">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}