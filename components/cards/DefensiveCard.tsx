'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { HeartbeatLine } from '@/components/ui/HeartbeatLine'
import { HexagonalGlow, GridPattern, OrbitingDots, SignalStrength, ScanReveal } from '@/components/effects/CardEffects'

/**
 * DefensiveCard - Enhanced with 3D transforms and micro-interactions
 */
interface DefensiveCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  index: number
  badge?: 'NEW' | 'BETA' | 'OPERATIONAL'
}

export const DefensiveCard: React.FC<DefensiveCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  index,
  badge = 'OPERATIONAL',
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={href}>
        <div className="group relative h-full" style={{ perspective: '1000px' }}>
          {/* Hexagonal Glow Aura */}
          <HexagonalGlow
            className="-inset-4 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
            color="#58a6ff"
            pulseSpeed={2}
          />

          {/* Card with 3D Transform */}
          <div
            className="relative transition-transform duration-500 ease-out"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative bg-defensive-bg/90 border border-defensive-border rounded-lg p-6 backdrop-blur-xl 
                            group-hover:border-defensive-primary/60 transition-all duration-300 h-full
                            group-hover:shadow-[0_0_40px_rgba(88,166,255,0.2)]
                            overflow-hidden">
              
              {/* Animated Grid Pattern on Hover */}
              <GridPattern size={20} color="#58a6ff" className="opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              {/* Scan Reveal Animation on Load */}
              <ScanReveal direction="horizontal" />

              {/* Heartbeat Line (top of card) */}
              <div className="absolute top-0 left-0 w-full overflow-hidden">
                <HeartbeatLine className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Icon with Rotation Effect and Orbiting Dots */}
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 bg-defensive-primary/10 rounded-lg
                                group-hover:bg-defensive-primary/20 
                                group-hover:rotate-[5deg]
                                transition-all duration-300" />
                <Icon 
                  className="relative w-16 h-16 text-defensive-primary p-3
                             group-hover:scale-110 transition-transform duration-300" 
                  strokeWidth={1.5} 
                />
                
                {/* Orbiting Particles */}
                <OrbitingDots
                  count={3}
                  color="#58a6ff"
                  radius={35}
                  speed={5}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <h3 className="text-xl font-defensive font-semibold text-white mb-2 group-hover:text-defensive-primary transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-defensive">
                {description}
              </p>

              {/* Animated Arrow on Hover */}
              <div className="flex items-center gap-2 mt-4 text-defensive-primary text-sm font-mono
                              opacity-0 group-hover:opacity-100 
                              translate-y-2 group-hover:translate-y-0
                              transition-all duration-300">
                <span>LAUNCH TOOL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Status Indicator with Signal Strength */}
              <div className="absolute bottom-6 right-6 flex items-center gap-3">
                <SignalStrength level={5} color="#7ee787" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-defensive-success animate-pulse" 
                       style={{ boxShadow: '0 0 10px rgba(126, 231, 135, 0.5)' }} />
                  <span className="text-[10px] text-defensive-success uppercase tracking-wider font-mono">
                    {badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
