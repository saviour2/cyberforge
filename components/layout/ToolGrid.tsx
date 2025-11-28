'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ToolCard } from './ToolCard'
import type { Tool } from '@/lib/constants'

/**
 * ToolGrid component - Displays tools in a staggered grid animation
 */
interface ToolGridProps {
  tools: Tool[]
  title: string
  icon?: React.ReactNode
}

export const ToolGrid: React.FC<ToolGridProps> = ({ tools, title, icon }) => {
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
    <section className="py-16" id="tools">
      <div className="container-cyber">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          {icon}
          <h2 className="text-section text-gradient-cyber">{title}</h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.id}
              icon={tool.icon}
              title={tool.name}
              description={tool.description}
              href={tool.path}
              index={index}
              badge={tool.badge}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
