'use client'

import React from 'react'
import { clsx } from 'clsx'

/**
 * StatusIndicator component - Shows operational status with pulsing effect
 */
interface StatusIndicatorProps {
  status?: 'online' | 'offline' | 'warning'
  children: React.ReactNode
  className?: string
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = 'online',
  children,
  className,
}) => {
  const statusColors = {
    online: 'bg-neon-cyan shadow-[0_0_10px_rgba(0,255,157,0.5)]',
    offline: 'bg-gray-500 shadow-[0_0_10px_rgba(128,128,128,0.5)]',
    warning: 'bg-electric-yellow shadow-[0_0_10px_rgba(255,190,11,0.5)]',
  }

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      <span className="relative flex h-3 w-3">
        <span
          className={clsx(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            statusColors[status]
          )}
        />
        <span
          className={clsx(
            'relative inline-flex rounded-full h-3 w-3',
            statusColors[status]
          )}
        />
      </span>
      <span className="text-sm font-mono uppercase tracking-wider">
        {children}
      </span>
    </div>
  )
}
