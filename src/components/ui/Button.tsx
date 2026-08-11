import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'accent' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'tech-button inline-flex items-center justify-center font-heading font-medium tracking-wide uppercase text-xs transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
          // Variants
          variant === 'default' && 'bg-brand-dark text-white border border-brand-dark hover:bg-transparent hover:text-brand-dark',
          variant === 'outline' && 'bg-transparent text-brand-dark border border-brand-concrete hover:bg-brand-dark hover:text-white hover:border-brand-dark',
          variant === 'accent' && 'bg-brand-red text-white border border-brand-red hover:bg-brand-red-hover hover:border-brand-red-hover shadow-sm',
          variant === 'secondary' && 'bg-brand-concrete-light text-brand-dark border border-brand-concrete-light hover:bg-brand-concrete hover:text-white hover:border-brand-concrete',
          variant === 'ghost' && 'bg-transparent text-brand-dark hover:bg-brand-concrete-light/30',
          // Sizes
          size === 'sm' && 'px-4 py-2 text-[10px]',
          size === 'md' && 'px-6 py-3',
          size === 'lg' && 'px-8 py-4 text-sm',
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center mr-2">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Carregando...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
