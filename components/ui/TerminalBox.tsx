'use client'

import React from 'react'

/**
 * TerminalBox - Terminal window with controls
 */
interface TerminalBoxProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export const TerminalBox: React.FC<TerminalBoxProps> = ({
  children,
  className = '',
  title = 'cyberforge.terminal',
}) => {
  return (
    <div className={`bg-black border-2 border-defensive-primary/50 rounded-lg overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="bg-defensive-primary/10 px-4 py-3 flex items-center gap-3 border-b border-defensive-primary/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-defensive-success" />
          <div className="w-3 h-3 rounded-full bg-[#ffee00]" />
          <div className="w-3 h-3 rounded-full bg-offensive-primary" />
        </div>
        <span className="text-xs text-defensive-primary font-mono">{title}</span>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        {children}
      </div>
    </div>
  )
}
