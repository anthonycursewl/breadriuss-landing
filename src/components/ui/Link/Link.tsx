import { type AnchorHTMLAttributes, type ReactNode, forwardRef } from 'react';
import styles from './Link.module.css';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'default' | 'subtle';
  showArrow?: boolean;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = 'default', showArrow = true, external = false, className = '', href, ...props }, ref) => {
    const isExternal = external || (href && (href.startsWith('http://') || href.startsWith('https://')));
    const classes = [styles.link, styles[variant], className].filter(Boolean).join(' ');

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <span className={styles.text}>{children}</span>
        {showArrow && (
          <svg
            className={styles.arrow}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';