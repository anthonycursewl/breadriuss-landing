import { useRef, useCallback, useEffect, type ReactNode } from 'react';
import styles from './Draggable.module.css';

interface DraggableProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Draggable({ children, className, style }: DraggableProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const lastCursor = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const startDrag = useCallback((clientX: number, clientY: number) => {
    if (window.innerWidth < 900) return;
    isDragging.current = true;
    lastCursor.current = { x: clientX, y: clientY };
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  }, []);

  const moveDrag = useCallback((clientX: number, clientY: number) => {
    if (!isDragging.current) return;

    offset.current.x += clientX - lastCursor.current.x;
    offset.current.y += clientY - lastCursor.current.y;
    lastCursor.current = { x: clientX, y: clientY };

    if (containerRef.current) {
      const content = containerRef.current.querySelector('[data-draggable-content]') as HTMLElement;
      if (content) {
        content.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px)`;
      }
    }
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
  }, []);

  useEffect(() => {
    if (window.innerWidth < 900) return;

    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      e.preventDefault();
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      endDrag();
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startDrag, moveDrag, endDrag]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if (window.innerWidth < 900) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  }, [startDrag]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth < 900) return;
    moveDrag(e.clientX, e.clientY);
  }, [moveDrag]);

  const handleMouseUp = useCallback(() => {
    if (window.innerWidth < 900) return;
    endDrag();
  }, [endDrag]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className || ''}`}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div data-draggable-content style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      <div className={styles.dragHint}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
        </svg>
        Drag to move
      </div>
    </div>
  );
}