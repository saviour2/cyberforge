'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'

/**
 * ToolCard component - Individual tool card with hover effects
 */
interface ToolCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
  index: number
  badge?: 'NEW' | 'BETA' | 'POPULAR'
}

export const ToolCard: React.FC<ToolCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  index,
  badge,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const badgeColors = {
    NEW: 'bg-neon-cyan text-void',
    BETA: 'bg-electric-yellow text-void',
    POPULAR: 'bg-hot-pink text-white',
  }

  return (
    <motion.div
      variants={itemVariants}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={href}>
        <Card className="group relative cursor-pointer h-full">
          {/* Badge */}
          {badge && (
            <span
              className={`absolute top-4 right-4 px-2 py-1 text-xs font-bold rounded ${badgeColors[badge]}`}
            >
              {badge}
            </span>
          )}

          {/* Icon */}
          <div className="mb-4 transition-transform group-hover:-translate-y-1 duration-300">
            <Icon className="w-12 h-12 text-neon-cyan" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <h3 className="text-xl font-display font-bold text-off-white mb-2 group-hover:text-neon-cyan transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          {/* Hover Arrow */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm text-neon-cyan font-mono">
              Launch Tool →
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
