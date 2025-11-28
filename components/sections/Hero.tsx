'use client'

import React from 'react'
import { GlitchText } from '@/components/ui/GlitchText'
import { RadialGradient } from '@/components/ui/RadialGradient'
import { GridLines } from '@/components/ui/GridLines'
import { TypewriterText } from '@/components/ui/TypewriterText'
import { StatusIndicator } from '@/components/ui/StatusIndicator'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

/**
 * Hero section - Full viewport landing with cyberpunk aesthetics
 */
export const Hero: React.FC = () => {
  const scrollToTools = () => {
    document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <RadialGradient />
        <GridLines />
        
        {/* Scanline Animation */}
        <div className="scanline-animate" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-cyber text-center px-4">
        {/* Main Title with Glitch Effect */}
        <GlitchText variant="hero" className="mb-6">
          CYBERFORGE
        </GlitchText>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Military-Grade Utilities for Modern Security Professionals
        </p>

        {/* Terminal-Style CTA Card */}
        <Card variant="terminal" className="max-w-2xl mx-auto mb-12">
          <div className="font-mono text-left space-y-3">
            <div className="text-neon-cyan">
              <TypewriterText 
                text="$ ./cyberforge --scan --tools --status" 
                speed={30}
              />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-neon-cyan/20">
              <StatusIndicator status="online">
                15 TOOLS OPERATIONAL
              </StatusIndicator>
              <span className="text-gray-400 text-sm">
                CLIENT-SIDE | PRIVACY-FIRST
              </span>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="primary" 
            size="lg"
            onClick={scrollToTools}
            className="min-w-[200px]"
          >
            EXPLORE TOOLS
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="min-w-[200px]"
          >
            VIEW GITHUB
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToTools}
          className="animate-bounce text-neon-cyan hover:text-electric-yellow transition-colors"
          aria-label="Scroll to tools"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </button>
      </div>

      {/* Animated Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-neon-cyan/30 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-neon-cyan/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-neon-cyan/30 pointer-events-none" />
    </section>
  )
}
