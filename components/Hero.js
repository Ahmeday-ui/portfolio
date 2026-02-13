import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
  <section className="min-h-screen pt-32 pb-20 section-container flex flex-col justify-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
        <div className="absolute top-20 -left-10 w-72 h-72 bg-accent rounded-full mix-blend-screen blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Photo d'identité */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-24 right-10 w-64 h-64 rounded-full shadow-2xl border-8 border-accent bg-gradient-to-br from-accent via-blue-500 to-accent overflow-hidden z-20 flex items-center justify-center animate-pulse"
      >
        <img src="/photo d'identité.png" alt="Ahmed Ayoubi" className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl" />
      </motion.div>

      <motion.div
        className="space-y-8 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-accent font-mono text-lg font-semibold flex items-center gap-2">
            👋 Bienvenue sur mon portfolio
            <span className="text-xs bg-accent text-white px-2 py-1 rounded">Ahmed Ayoubi</span>
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-text-primary">AI Engineer</span>
            <br />
            <span className="gradient-text">Data Scientist & Researcher</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-text-secondary leading-relaxed max-w-2xl"
        >
          Je m'appelle Ahmed AYOUBI, ingénieur en Intelligence Artificielle et Data Scientist. Passionné par l’innovation et l’impact sociétal de l’IA, j’ai mené des projets ambitieux pour la prévention des risques, l’analyse de données médicales, la modélisation prédictive et la gestion de données massives. Mon parcours allie rigueur scientifique, créativité, et volonté de transformer les défis complexes en solutions concrètes. Curieux, persévérant et orienté résultats, je vise à contribuer à des projets d’envergure, en mettant l’IA au service de l’humain et de la société. “L’Intelligence Artificielle au service de l’humain et de la société”
        </motion.p>

        {/* Tech Stack Preview */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 pt-4"
        >
          {['PyTorch', 'CNNs', 'Transformers', 'SAR', 'Python', 'HPC', 'R', 'NBA Analytics'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary border border-accent border-opacity-30 hover:border-opacity-100 text-accent font-mono text-sm transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 pt-8"
        >
          <Link href="/projects" className="btn-primary">
            Voir mes projets
          </Link>
          <Link href="/research" className="btn-secondary">
            Publications & Recherche
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 pt-8"
        >
          <a
            href="https://github.com/Ahmeday-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            title="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-ayoubi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            title="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="mailto:ayoubiahmed02@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
            title="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg className="w-8 h-8 text-accent animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
