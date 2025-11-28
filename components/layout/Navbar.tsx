'use client'

import React from 'react'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

/**
 * Navbar component - Site navigation with cyberpunk styling
 */
export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-neon-cyan/20">
      <div className="container-cyber flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Shield className="w-8 h-8 text-neon-cyan transition-transform group-hover:scale-110" />
          <span className="text-xl font-display font-bold text-gradient-cyber">
            CYBERFORGE
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/#tools"
            className="text-sm font-medium text-off-white hover:text-neon-cyan transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-off-white hover:text-neon-cyan transition-colors"
          >
            About
          </Link>
          <Button variant="secondary" size="sm">
            GitHub
          </Button>
        </div>

        {/* Mobile Menu Toggle (TODO: Implement mobile menu) */}
        <button className="md:hidden text-neon-cyan">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
