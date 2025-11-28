'use client'

import React from 'react'
import { GlitchText } from '@/components/ui/GlitchText'
import { PerspectiveGrid } from '@/components/ui/PerspectiveGrid'
import { RadarSweep } from '@/components/ui/RadarSweep'
import { TerminalBox } from '@/components/ui/TerminalBox'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { StatusIndicator } from '@/components/ui/StatusIndicator'
import { CornerBrackets } from '@/components/ui/CornerBrackets'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

/**
 * Hero section - Command Center with split-color identity
 */
export const Hero: React.FC = () => {
  const scrollToTools = () => {
    document.getElementById('defensive')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <PerspectiveGrid />
        <RadarSweep />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl text-center px-4">
        {/* Split-Color Logo with Glitch */}
        <div className="mb-6">
          <h1 className="text-hero font-display font-bold leading-none">
            <span className="text-defensive-primary">CYBER</span>
            <span className="text-offensive-primary">FORGE</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-2xl text-gray-400 font-mono tracking-wider mb-12">
          &gt;_ MILITARY-GRADE UTILITIES FOR SECURITY PROFESSIONALS
        </p>

        {/* Terminal Status Box */}
        <div className="mb-12 flex justify-center">
          <TerminalBox className="w-full max-w-2xl text-left">
            <div className="space-y-3">
              <div className="text-defensive-primary">
                <TypewriterText 
                  text="$ systemctl status cyberforge" 
                  speed={30}
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-defensive-success">●</span>
                <span className="text-white">
                  Active: <span className="text-defensive-success">15 TOOLS OPERATIONAL</span>
                </span>
              </div>
              <div className="text-gray-500 text-xs pl-4">
                └─ DEFENSIVE: 5 | OFFENSIVE: 5 | OSINT: 5
              </div>
            </div>
          </TerminalBox>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToTools}
            className="min-w-[200px] px-6 py-3 bg-defensive-primary text-black font-bold rounded-md
                       hover:shadow-[0_0_30px_rgba(88,166,255,0.5)] transition-all duration-300
                       transform hover:scale-105"
          >
            DEPLOY TOOLS
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] px-6 py-3 border-2 border-offensive-primary text-offensive-primary font-bold rounded-md
                       hover:bg-offensive-primary hover:text-black transition-all duration-200
                       transform hover:scale-105"
          >
            VIEW SOURCE
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToTools}
          className="animate-bounce text-defensive-primary hover:text-offensive-primary transition-colors"
          aria-label="Scroll to tools"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>

      {/* Corner Brackets */}
      <CornerBrackets color="rgba(88, 166, 255, 0.3)" />
    </section>
  )
}
