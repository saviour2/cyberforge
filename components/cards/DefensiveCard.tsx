'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { HeartbeatLine } from '@/components/ui/HeartbeatLine'

/**
 * DefensiveCard - The Vault aesthetic (Clinical/Laboratory)
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
        <div className="group relative h-full">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-defensive-primary/20 to-transparent blur-xl group-hover:blur-2xl transition-all duration-300" />
          
          <div className="relative bg-defensive-bg border border-defensive-border rounded-lg p-6 backdrop-blur-xl 
                          group-hover:border-defensive-primary/60 transition-all duration-300 h-full">
            
            {/* Heartbeat Line (top of card) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
              <HeartbeatLine className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Icon in Shield */}
            <div className="w-16 h-16 bg-defensive-primary/10 rounded-lg flex items-center justify-center mb-4
                            group-hover:bg-defensive-primary/20 transition-colors duration-300">
              <Icon className="w-8 h-8 text-defensive-primary" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-defensive font-semibold text-white mb-2 group-hover:text-defensive-primary transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-defensive">
              {description}
            </p>
            
            {/* Status Indicator (bottom right) */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-defensive-success animate-pulse" 
                   style={{ boxShadow: '0 0 10px rgba(126, 231, 135, 0.5)' }} />
              <span className="text-xs text-defensive-success uppercase tracking-wider font-mono">
                {badge}
              </span>
            </div>
            
            {/* Hover Effect: Blueprint Grid */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-lg"
              style={{
                backgroundImage: 'linear-gradient(rgba(88, 166, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(88, 166, 255, 0.2) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
