import type { ContainerProps } from '../../../types';
import styles from './Container.module.css';

export function Container({
  children,
  className = '',
  as: Component = 'div',
  wide = false,
}: ContainerProps & { wide?: boolean }) {
  return (
    <Component className={`${styles.container} ${wide ? styles.wide : ''} ${className}`}>
      {children}
    </Component>
  );
}