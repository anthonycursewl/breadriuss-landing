import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import styles from './DropdownToggle.module.css';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface DropdownGroup {
  label?: string;
  options: DropdownOption[];
}

interface DropdownToggleProps {
  value: string;
  options: DropdownOption[];
  groups?: DropdownGroup[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  placement?: 'bottom-left' | 'bottom-right' | 'bottom-center';
}

export const DropdownToggle = memo(function DropdownToggle({
  value,
  options,
  groups,
  onChange,
  placeholder = 'Select...',
  className = '',
  disabled = false,
  placement = 'bottom-right',
}: DropdownToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  const handleToggle = useCallback(() => {
    if (disabled) return;
    setIsOpen(prev => !prev);
  }, [disabled]);

  const handleSelect = useCallback((optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  }, [onChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const renderOption = useCallback((option: DropdownOption) => (
    <button
      key={option.value}
      className={`${styles.option} ${option.value === value ? styles.selected : ''} ${option.disabled ? styles.disabled : ''}`}
      onClick={() => !option.disabled && handleSelect(option.value)}
      disabled={option.disabled}
    >
      {option.icon && <span className={styles.optionIcon}>{option.icon}</span>}
      <span className={styles.optionContent}>
        <span className={styles.optionLabel}>{option.label}</span>
        {option.description && <span className={styles.optionDescription}>{option.description}</span>}
      </span>
      {option.value === value && (
        <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      )}
    </button>
  ), [value, handleSelect]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      data-placement={placement}
    >
      <button
        className={`${styles.trigger} ${isOpen ? styles.open : ''} ${disabled ? styles.disabled : ''}`}
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.triggerContent}>
          {selectedOption?.icon && <span className={styles.triggerIcon}>{selectedOption.icon}</span>}
          <span className={styles.triggerLabel}>
            {selectedOption?.label || placeholder}
          </span>
        </span>
        <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {groups ? groups.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.group}>
              {group.label && <div className={styles.groupLabel}>{group.label}</div>}
              {group.options.map(renderOption)}
            </div>
          )) : options.map(renderOption)}
        </div>
      )}
    </div>
  );
});

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = memo(function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const handleChange = useCallback((newTheme: string) => {
    setTheme(newTheme as 'light' | 'dark' | 'auto');
  }, [setTheme]);

  const options: DropdownOption[] = [
    {
      value: 'light',
      label: 'Light',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ),
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ),
    },
    {
      value: 'auto',
      label: 'System',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <DropdownToggle
      value={theme}
      options={options}
      onChange={handleChange}
      className={className}
    />
  );
});