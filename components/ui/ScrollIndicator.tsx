'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface ScrollIndicatorProps {
  className?: string
}

export function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <ChevronDown className="w-6 h-6 text-gray-500 animate-bounce" />
      <div className="text-xs font-mono text-gray-500 tracking-wider">SCROLL TO EXPLORE</div>
    </div>
  )
}
