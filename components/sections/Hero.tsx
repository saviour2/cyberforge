'use client'

import React from 'react'
import { PerspectiveGrid } from '@/components/ui/PerspectiveGrid'
import { RadarSweep } from '@/components/ui/RadarSweep'
import { CornerBrackets } from '@/components/ui/CornerBrackets'
import { ParticleField } from '@/components/effects/ParticleField'
import { CursorTrail } from '@/components/effects/CursorTrail'
import { AnimatedGridLayer } from '@/components/backgrounds/AnimatedGridLayer'
import { RadialPulse } from '@/components/effects/RadialPulse'
import { ChromaticText } from '@/components/text/ChromaticText'
import { HolographicTerminal } from '@/components/effects/HolographicTerminal'
import { CornerHUD, TopLeft, TopRight, BottomLeft, BottomRight } from '@/components/hud/CornerHUD'
import { LiveClock, SystemUptime, NetworkIndicator, CPUMeter, CoordinateDisplay, VersionTag } from '@/components/hud/HUDElements'
import { ScrollIndicator } from '@/components/ui/ScrollIndicator'

/**
 * Hero section - Revolutionary Living Command Center
 */
export const Hero: React.FC = () => {
  const scrollToTools = () => {
    document.getElementById('defensive')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Layer 1: Deep Background - Slowly rotating grid */}
      <div className="absolute inset-0 opacity-20">
        <AnimatedGridLayer rotation={0.1} speed={20} perspective={1000} color="rgba(88, 166, 255, 0.3)" />
      </div>

      {/* Layer 2: Particle System - Floating data points */}
      <ParticleField count={100} colors={['#58a6ff', '#ff0055', '#00ffc8']} behavior="float" mouseInteractive={true} />

      {/* Layer 3: Scanline Grid - Tron-style with pulse */}
      <div className="absolute inset-0">
        <PerspectiveGrid />
        <RadarSweep />
      </div>

      {/* Layer 4: Radial Rings - Expanding circles */}
      <RadialPulse center={{ x: '50%', y: '50%' }} rings={5} interval={3000} color="rgba(88, 166, 255, 0.1)" />

      {/* Layer 5: Cursor Trail */}
      <CursorTrail length={20} color="rgba(88, 166, 255, 0.5)" glowSize={30} />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-6xl text-center px-4">
        {/* Split-Color Logo with Chromatic Aberration */}
        <div className="mb-6">
          <ChromaticText mouseReactive={true} separationIntensity={3}>
            <h1 className="text-hero font-display font-bold leading-none">
              <span className="text-defensive-primary">CYBER</span>
              <span className="text-offensive-primary">FORGE</span>
            </h1>
          </ChromaticText>
        </div>

        {/* Subtitle */}
        <p className="text-2xl text-gray-400 font-mono tracking-wider mb-12">
          &gt;_ MILITARY-GRADE UTILITIES FOR SECURITY PROFESSIONALS
        </p>

        {/* Holographic Terminal Status Box */}
        <div className="mb-12">
          <HolographicTerminal />
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
        <div onClick={scrollToTools}>
          <ScrollIndicator className="cursor-pointer" />
        </div>
      </div>

      {/* Corner HUD Elements */}
      <CornerHUD>
        <TopLeft>
          <div className="text-xs font-mono text-gray-500 space-y-1">
            <LiveClock format="HH:mm:ss" />
            <SystemUptime />
          </div>
        </TopLeft>

        <TopRight>
          <div className="text-xs font-mono text-gray-500 space-y-2">
            <NetworkIndicator />
            <CPUMeter animated={true} />
          </div>
        </TopRight>

        <BottomLeft>
          <CoordinateDisplay />
        </BottomLeft>

        <BottomRight>
          <VersionTag>v2.3.5</VersionTag>
        </BottomRight>
      </CornerHUD>

      {/* Corner Brackets */}
      <CornerBrackets color="rgba(88, 166, 255, 0.3)" />
    </section>
  )
}
