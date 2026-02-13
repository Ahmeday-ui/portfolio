import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const allProjects = [
    {
      title: 'Survival Analysis & Statistical Modeling',
      description: 'Comprehensive survival analysis study with Kaplan-Meier curves, Cox regression, and hazard analysis. Real medical datasets with advanced statistical evaluation.',
      tags: ['R', 'Statistics', 'Survival Analysis', 'Medical Data'],
      slug: 'survival-analysis',
      status: 'completed',
      category: 'data-science',
  reportLink: '/Projects/A.AYOUBI_JBKP_ANALYSEDESURVIE.html',
      date: '2025-2026',
    },
    {
      title: 'NBA Analytics & Performance Prediction',
      description: 'Sports analytics application analyzing NBA player statistics, team performance metrics, and predictive modeling. Data visualization and trend analysis.',
      tags: ['Python', 'Data Analysis', 'Pandas', 'Visualization'],
      slug: 'nba-analysis',
      status: 'completed',
      category: 'data-science',
  reportLink: '/Projects/AYOUBI_CHOUKOUKOU_Projet-Transverses-NBA.html',
      date: '2024-2025',
    },
    {
      title: 'Advanced Computer Vision Pipeline',
      description: 'Deep learning pipeline for image segmentation and object detection. Implements modern CNN and Transformer architectures with custom training loops.',
      tags: ['PyTorch', 'CNN', 'Transformers', 'Image Processing'],
      slug: 'computer-vision',
      status: 'ongoing',
      category: 'deep-learning',
    },
    {
      title: 'Rapport de stage Master 1',
      description: 'Rapport de stage Master 1 en Data Science.',
      tags: ['PDF', 'Stage', 'Data Science'],
      slug: 'stage-master1',
      status: 'completed',
      category: 'data-science',
  reportLink: '/Projects/AYOUBI%20Ahmed%20-Rapport%20de%20stage%20Master%201.pdf',
      date: '2024-2025',
    },
    {
      title: 'Distributed ML Training Framework',
      description: 'High-performance distributed machine learning framework for large-scale model training. MPI-based implementation with GPU acceleration.',
      tags: ['PyTorch', 'HPC', 'MPI', 'CUDA'],
      slug: 'distributed-ml',
      status: 'completed',
      category: 'infrastructure',
    },
    {
      title: 'Time Series Forecasting System',
      description: 'Advanced time series prediction using LSTM, Transformer, and ensemble methods. Real-world financial and sensor data applications.',
      tags: ['PyTorch', 'LSTM', 'Transformers', 'Forecasting'],
      slug: 'time-series',
      status: 'completed',
      category: 'data-science',
    },
    {
      title: 'Anomaly Detection in Sensor Networks',
      description: 'Unsupervised learning approach for detecting anomalies in IoT sensor data. VAE and Isolation Forest implementations.',
      tags: ['Python', 'Anomaly Detection', 'VAE', 'Machine Learning'],
      slug: 'anomaly-detection',
      status: 'ongoing',
      category: 'deep-learning',
    },
    {
      title: 'Natural Language Processing Application',
      description: 'NLP pipeline for text classification and sentiment analysis using BERT and fine-tuned Transformers.',
      tags: ['Transformers', 'BERT', 'NLP', 'PyTorch'],
      slug: 'nlp-classification',
      status: 'ongoing',
      category: 'deep-learning',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'deep-learning', label: 'Deep Learning' },
    { id: 'research', label: 'Research' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ]

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <>
      <Head>
        <title>Projects | Ahmed AYOUBI</title>
        <meta name="description" content="AI/ML projects showcasing expertise in deep learning, computer vision, data science, and research." />
      </Head>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="gradient-text">Projects</span> & Applications
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl">
            Innovative solutions showcasing expertise in ML, DL, and data science
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-accent text-primary border border-accent'
                  : 'bg-secondary border border-slate-700 text-text-secondary hover:border-accent hover:text-accent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </section>

      <Footer />
    </>
  )
}
