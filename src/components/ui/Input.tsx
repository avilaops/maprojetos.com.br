import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-brand-concrete/30 text-brand-dark font-sans placeholder:text-brand-concrete/60 focus:outline-none focus:border-brand-dark transition-all duration-300 text-sm rounded-none',
            error && 'border-brand-red focus:border-brand-red',
            className
          )}
          {...props}
        />
        {error && (
          <span className="text-[11px] text-brand-red mt-1 block font-sans font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
