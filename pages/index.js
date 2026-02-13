import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

export default function Home() {
  const featuredProjects = [
    {
      title: 'Survival Analysis & Statistical Modeling',
      description: 'Advanced survival analysis study with comprehensive statistical evaluation, Kaplan-Meier curves, and hazard ratio analysis. Includes missing data handling and real medical datasets.',
      tags: ['R', 'Statistics', 'Survival Analysis', 'Data Science'],
      slug: 'survival-analysis',
      status: 'completed',
    },
    {
      title: 'NBA Transverse Project',
      description: 'Sports analytics project analyzing NBA player performance, team dynamics, and statistical trends. Built with comprehensive data preprocessing and visualization.',
      tags: ['Python', 'Data Analysis', 'Sports Analytics', 'Pandas'],
      slug: 'nba-analysis',
      status: 'completed',
    },
    {
      title: 'Computer Vision & Deep Learning',
      description: 'Advanced CV applications using CNNs and Transformers. Focus on image segmentation, object detection, and scene understanding with modern architectures.',
      tags: ['PyTorch', 'CNN', 'Transformers', 'OpenCV'],
      slug: 'computer-vision',
      status: 'ongoing',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      <Head>
        <title>Ahmed AYOUBI | AI Engineer & Data Scientist</title>
        <meta name="description" content="Portfolio of Ahmed AYOUBI - AI Engineer, Data Scientist, and Research professional specializing in machine learning, computer vision, and remote sensing." />
        <meta name="keywords" content="AI, Data Science, Machine Learning, Computer Vision, Research, Portfolio" />
        <meta property="og:title" content="Ahmed AYOUBI | AI Engineer & Data Scientist" />
        <meta property="og:description" content="Professional portfolio showcasing ML/DL projects, research, and technical expertise." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navigation />

      {/* Hero */}
      <Hero />

      {/* Featured Projects */}
      <section className="section-container bg-secondary bg-opacity-50">
        <div className="space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Innovative applications in ML, data science, and research
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-8"
          >
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-subtitle">
              Technical depth across ML, DL, CV, and research methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                desc: 'Deep expertise in PyTorch, model optimization, and advanced architectures'
              },
              {
                icon: '👁️',
                title: 'Computer Vision',
                desc: 'Image segmentation, object detection, feature extraction, and scene understanding'
              },
              {
                icon: '🛰️',
                title: 'Remote Sensing',
                desc: 'Multispectral data analysis, SAR processing, and geospatial applications'
              },
              {
                icon: '📊',
                title: 'Research & Rigor',
                desc: 'Ablation studies, reproducibility, statistical validation, and scientific methodology'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="card"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-secondary bg-opacity-30 border-t border-b border-slate-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Let&apos;s Collaborate
            </h2>
            <p className="text-text-secondary text-lg">
              Interested in discussing research, projects, or opportunities? Get in touch.
            </p>
          </div>
          <Link href="/contact" className="btn-primary inline-block">
            Start a Conversation
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
