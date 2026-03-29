'use client';

import Link from 'next/link';
import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const variants = {
  primary:
    'bg-[var(--color-orange)] hover:bg-[var(--color-orange-hover)] text-white shadow-lg hover:shadow-[0_8px_30px_rgba(255,107,53,0.45)]',
  secondary:
    'bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] shadow-lg hover:shadow-[0_8px_30px_rgba(200,169,81,0.45)]',
  outline:
    'border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)]',
  ghost:
    'text-white hover:text-[var(--color-gold)] underline-offset-4 hover:underline',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase rounded-sm transition-all duration-300 cursor-pointer select-none',
    variants[variant],
    sizes[size],
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
