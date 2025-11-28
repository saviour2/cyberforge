'use client'

import React from 'react'

/**
 * HeartbeatLine - EKG-style animated line for Defensive cards
 */
export const HeartbeatLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      className={`w-full h-8 ${className}`}
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,20 L40,20 L45,10 L50,30 L55,20 L200,20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-defensive-primary animate-heartbeat"
        style={{
          filter: 'drop-shadow(0 0 4px currentColor)',
        }}
      />
    </svg>
  )
}
