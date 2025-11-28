'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { DefensiveCard } from '@/components/cards/DefensiveCard'
import { OffensiveCard } from '@/components/cards/OffensiveCard'
import { OSINTCard } from '@/components/cards/OSINTCard'
import { getToolsByCategory } from '@/lib/constants'
import { Shield, Terminal, Eye } from 'lucide-react'

/**
 * Homepage - Three distinct visual identities
 */
export default function HomePage() {
  const defensiveTools = getToolsByCategory('defensive')
  const offensiveTools = getToolsByCategory('offensive')
  const osintTools = getToolsByCategory('osint')

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* DEFENSIVE OPS Section - Blue Theme */}
        <section className="py-20 relative bg-defensive-bg" id="defensive">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-defensive-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-defensive-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-defensive font-bold text-white">DEFENSIVE OPS</h2>
                <p className="text-gray-400 text-sm">Protection & Analysis</p>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-defensive-primary/50 to-transparent" />
            </div>
            
            {/* Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {defensiveTools.map((tool, index) => (
                <DefensiveCard
                  key={tool.id}
                  icon={tool.icon}
                  title={tool.name}
                  description={tool.description}
                  href={tool.path}
                  index={index}
                  badge={tool.badge === 'POPULAR' ? 'OPERATIONAL' : tool.badge}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* OFFENSIVE RECON Section - Red Theme */}
        <section className="py-20 relative bg-black" id="offensive">
          {/* Red noise overlay */}
          <div className="absolute inset-0 bg-offensive-primary/5 pointer-events-none" />
          
          <div className="container mx-auto max-w-7xl px-4 relative">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-black border-2 border-offensive-primary rounded flex items-center justify-center">
                <Terminal className="w-6 h-6 text-offensive-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-terminal font-bold text-white uppercase">
                  &gt;_ OFFENSIVE RECON
                </h2>
                <p className="text-offensive-accent text-sm font-terminal">// Stealth Operations</p>
              </div>
            </div>
            
            {/* Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {offensiveTools.map((tool, index) => (
                <OffensiveCard
                  key={tool.id}
                  icon={tool.icon}
                  title={tool.name}
                  description={tool.description}
                  href={tool.path}
                  index={index}
                  id={tool.id}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* OSINT Section - Cyan Theme */}
        <section className="py-20 relative bg-osint-bg" id="osint">
          <div className="container mx-auto max-w-7xl px-4">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-osint-bg border border-osint-primary/50 rounded-lg flex items-center justify-center relative">
                <Eye className="w-6 h-6 text-osint-primary" />
                <div className="absolute inset-0 border border-osint-primary/30 rounded-lg animate-pulse" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-white uppercase tracking-wider">
                  INTELLIGENCE GATHERING
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  ● SURVEILLANCE ACTIVE
                </p>
              </div>
            </div>
            
            {/* Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {osintTools.map((tool, index) => (
                <OSINTCard
                  key={tool.id}
                  icon={tool.icon}
                  title={tool.name}
                  description={tool.description}
                  href={tool.path}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-black border-t border-white/10" id="about">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-8">
              <span className="text-defensive-primary">ABOUT</span>{' '}
              <span className="text-offensive-primary">CYBERFORGE</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                CYBERFORGE is a comprehensive suite of cybersecurity tools designed for 
                security researchers, penetration testers, and developers. Every tool runs 
                entirely client-side, ensuring your sensitive data never leaves your browser.
              </p>
              <p className="text-lg leading-relaxed">
                Built with three distinct visual identities—<span className="text-defensive-primary">Defensive Ops</span> (clinical precision), 
                <span className="text-offensive-primary"> Offensive Recon</span> (terminal stealth), and 
                <span className="text-osint-primary"> Intelligence Gathering</span> (surveillance tech)—each category 
                provides a unique experience while maintaining the platform's unified purpose.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-defensive-bg border border-defensive-border rounded-lg">
                  <div className="text-4xl font-bold text-defensive-primary mb-2">15+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Tools</div>
                </div>
                <div className="text-center p-6 bg-black border-2 border-offensive-border rounded-md">
                  <div className="text-4xl font-bold text-offensive-primary mb-2 font-terminal">100%</div>
                  <div className="text-sm text-offensive-accent uppercase tracking-wider font-terminal">Client-Side</div>
                </div>
                <div className="text-center p-6 bg-osint-bg border border-osint-border rounded-lg">
                  <div className="text-4xl font-bold text-osint-primary mb-2">Open</div>
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
