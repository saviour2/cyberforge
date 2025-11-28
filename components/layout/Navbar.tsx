'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, Github } from 'lucide-react'

/**
 * Navbar component - Security system interface style
 */
export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo with Split Colors */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-defensive-primary rounded flex items-center justify-center
                          group-hover:border-offensive-primary transition-colors duration-300">
            <span className="text-defensive-primary group-hover:text-offensive-primary font-mono font-bold text-sm">
              CF
            </span>
          </div>
          <span className="text-xl font-bold">
            <span className="text-defensive-primary">CYBER</span>
            <span className="text-offensive-primary">FORGE</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#defensive"
            className="text-defensive-primary hover:text-white text-sm uppercase tracking-wider transition-colors"
          >
            Defensive
          </a>
          <a
            href="#offensive"
            className="text-offensive-primary hover:text-white text-sm uppercase tracking-wider font-terminal transition-colors"
          >
            Offensive
          </a>
          <a
            href="#osint"
            className="text-osint-primary hover:text-white text-sm uppercase tracking-wider transition-colors"
          >
            OSINT
          </a>
        </div>

        {/* Status Indicator & GitHub */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-defensive-success/10 border border-defensive-success/30 rounded">
            <div className="w-2 h-2 rounded-full bg-defensive-success animate-pulse" />
            <span className="text-defensive-success text-xs font-mono">ONLINE</span>
          </div>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 py-1 border border-white/20 text-white hover:bg-white/10 rounded text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
