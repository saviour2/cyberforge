'use client'

import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ToolGrid } from '@/components/layout/ToolGrid'
import { TOOL_CATEGORIES, getToolsByCategory } from '@/lib/constants'
import { Shield, Terminal, Eye } from 'lucide-react'

/**
 * Homepage - Main landing page with hero and tool categories
 */
export default function HomePage() {
  const defensiveTools = getToolsByCategory('defensive')
  const offensiveTools = getToolsByCategory('offensive')
  const osintTools = getToolsByCategory('osint')

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Defensive Ops Tools */}
        <ToolGrid
          tools={defensiveTools}
          title={TOOL_CATEGORIES.defensive.name}
          icon={<Shield className="w-8 h-8 text-neon-cyan" />}
        />

        {/* Offensive Recon Tools */}
        <ToolGrid
          tools={offensiveTools}
          title={TOOL_CATEGORIES.offensive.name}
          icon={<Terminal className="w-8 h-8 text-hot-pink" />}
        />

        {/* OSINT Tools */}
        <ToolGrid
          tools={osintTools}
          title={TOOL_CATEGORIES.osint.name}
          icon={<Eye className="w-8 h-8 text-electric-yellow" />}
        />

        {/* About Section */}
        <section className="py-24 bg-navy/30" id="about">
          <div className="container-cyber">
            <h2 className="text-section text-gradient-cyber mb-8 text-center">
              ABOUT CYBERFORGE
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
              <p className="text-lg">
                CYBERFORGE is a comprehensive suite of cybersecurity tools designed for 
                security researchers, penetration testers, and developers. Every tool runs 
                entirely client-side, ensuring your sensitive data never leaves your browser.
              </p>
              <p className="text-lg">
                Built with modern web technologies and a focus on both functionality and 
                aesthetics, CYBERFORGE combines military-grade utilities with a stunning 
                cyberpunk interface that makes security work feel like an art form.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-cyan mb-2">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-cyan mb-2">100%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Client-Side</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neon-cyan mb-2">Open</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Source</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
