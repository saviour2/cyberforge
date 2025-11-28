'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { ScanlineOverlay } from '@/components/ui/ScanlineOverlay'

/**
 * OffensiveCard - The Shadow aesthetic (Hacker Terminal)
 */
interface OffensiveCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  index: number
  id: string
}

export const OffensiveCard: React.FC<OffensiveCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  index,
  id,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.2, delay: index * 0.05, ease: 'linear' }}
    >
      <Link href={href}>
        <div className="group relative h-full">
          {/* Terminal Window Style */}
          <div className="bg-black border-2 border-offensive-border rounded-md overflow-hidden
                          group-hover:border-offensive-primary transition-colors duration-100
                          hover:shadow-[0_0_20px_rgba(255,0,85,0.3)] h-full flex flex-col">
            
            {/* Window Controls */}
            <div className="bg-offensive-primary/10 px-4 py-2 flex items-center gap-2 border-b border-offensive-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-offensive-primary" />
                <div className="w-3 h-3 rounded-full bg-offensive-warning" />
                <div className="w-3 h-3 rounded-full bg-offensive-accent" />
              </div>
              <span className="text-xs text-offensive-accent font-terminal ml-2">
                {title.toLowerCase().replace(/\s+/g, '_')}.exe
              </span>
            </div>
            
            {/* Content */}
            <div className="p-6 relative flex-1 flex flex-col">
              {/* Scanline Effect */}
              <ScanlineOverlay className="opacity-0 group-hover:opacity-100" />
              
              {/* Icon */}
              <div className="mb-4">
                <Icon className="w-12 h-12 text-offensive-accent" strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-terminal text-white uppercase tracking-wider mb-2">
                &gt; {title}
              </h3>
              
              <p className="text-offensive-accent text-xs font-terminal leading-relaxed mb-4 flex-1">
                // {description}
              </p>
              
              {/* Access Prompt */}
              <div className="text-offensive-primary text-xs font-terminal mt-auto">
                $ ./launch --tool=<span className="text-white">{id}</span>
                <span className="animate-blink">_</span>
              </div>
            </div>
            
            {/* Glitch on Hover */}
            <div className="absolute inset-0 bg-offensive-primary/5 opacity-0 
                            group-hover:opacity-100 group-hover:animate-glitch pointer-events-none" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
