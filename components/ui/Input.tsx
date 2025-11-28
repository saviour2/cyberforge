import React from 'react'
import { clsx } from 'clsx'

/**
 * Input component with cyberpunk styling
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-off-white mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            'w-full px-4 py-2 bg-void border border-neon-cyan/30 rounded-md',
            'text-off-white placeholder:text-gray-500',
            'focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20',
            'transition-all duration-200',
            error && 'border-hot-pink focus:border-hot-pink focus:ring-hot-pink/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-hot-pink">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
