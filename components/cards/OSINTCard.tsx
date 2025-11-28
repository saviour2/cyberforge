'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ViewfinderCorners } from '@/components/ui/ViewfinderCorners'
import { Crosshair } from '@/components/ui/Crosshair'
import { NetworkGraph } from '@/components/ui/NetworkGraph'

/**
 * OSINTCard - The Panopticon aesthetic (Surveillance)
 */
interface OSINTCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  index: number
}

export const OSINTCard: React.FC<OSINTCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  index,
}) => {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const seconds = String(now.getSeconds()).padStart(2, '0')
      const ms = String(now.getMilliseconds()).padStart(3, '0')
      setTimestamp(`${hours}:${minutes}:${seconds}:${ms}`)
    }
    
    updateTimestamp()
    const interval = setInterval(updateTimestamp, 100)
    return () => clearInterval(interval)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.3, delay: index * 0.08, ease: 'linear' }}
    >
      <Link href={href}>
        <div className="group relative h-full">
          {/* Camera Viewfinder Overlay */}
          <ViewfinderCorners 
            color="#00ffc8" 
            className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" 
          />
          <Crosshair className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="bg-osint-bg border border-osint-border rounded-lg p-6
                          group-hover:border-osint-primary/50 transition-all duration-300
                          relative overflow-hidden h-full flex flex-col">
            
            {/* Network Graph Background */}
            <NetworkGraph className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
            
            {/* Timestamp */}
            <div className="absolute top-2 right-2 text-[8px] text-osint-primary font-mono tracking-wider z-10">
              {timestamp}
            </div>
            
            {/* Target Lock Animation */}
            <div className="w-16 h-16 relative mb-4 z-10">
              <div className="absolute inset-0 border-2 border-osint-primary/30 rounded-full" />
              <div className="absolute inset-0 border-2 border-osint-primary/50 rounded-full animate-radar-sweep"
                   style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)' }} />
              <Icon className="relative z-10 w-16 h-16 p-3 text-osint-primary" strokeWidth={1.5} />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-2 z-10">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 z-10">
              {description}
            </p>
            
            {/* Recording Indicator */}
            <div className="flex items-center gap-2 z-10 mt-auto">
              <div className="w-2 h-2 rounded-full bg-osint-accent animate-pulse" 
                   style={{ boxShadow: '0 0 10px rgba(255, 0, 110, 0.5)' }} />
              <span className="text-[10px] text-osint-accent uppercase tracking-widest font-mono">
                SURVEILLANCE ACTIVE
              </span>
            </div>
            
            {/* Scan Line on Hover */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-osint-primary/50
                            opacity-0 group-hover:opacity-100 group-hover:animate-scan-line" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
