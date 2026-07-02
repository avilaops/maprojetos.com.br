import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 bg-transparent border border-brand-concrete/30 text-brand-dark font-sans placeholder:text-brand-concrete/60 focus:outline-none focus:border-brand-dark transition-all duration-300 text-sm rounded-none resize-y',
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

Textarea.displayName = 'Textarea';
