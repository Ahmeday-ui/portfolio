import React from 'react'
import { motion } from 'framer-motion'

export default function SkillsGrid({ skills }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {skills.map((skillGroup, idx) => (
        <motion.div key={idx} variants={itemVariants} className="card">
          <h3 className="text-lg font-bold text-accent mb-3">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item, itemIdx) => (
              <span
                key={itemIdx}
                className="px-3 py-1.5 bg-primary rounded-lg text-sm font-mono text-text-primary border border-slate-700 hover:border-accent hover:text-accent transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
