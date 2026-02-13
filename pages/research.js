import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Research() {
  const publications = [
    {
      title: 'Advanced Deep Learning Architectures for Image Segmentation',
      authors: 'Ahmed AYOUBI, et al.',
      year: 2024,
      venue: 'International Journal of Computer Vision',
      status: 'published',
      abstract: 'This paper presents novel approaches to image segmentation using hybrid CNN-Transformer architectures with comprehensive ablation studies.',
      keywords: ['Deep Learning', 'Computer Vision', 'Segmentation'],
      doi: '#',
      url: '#',
    },
    {
      title: 'Multispectral Remote Sensing Data Fusion for Land Cover Classification',
      authors: 'Ahmed AYOUBI, et al.',
      year: 2024,
      venue: 'Remote Sensing Letters',
      status: 'in-review',
      abstract: 'Explores fusion techniques combining SAR and optical satellite data for improved land cover classification accuracy.',
      keywords: ['Remote Sensing', 'Data Fusion', 'Classification'],
      doi: '#',
      url: '#',
    },
    {
      title: 'Statistical Methods in Medical Survival Analysis: A Comprehensive Review',
      authors: 'Ahmed AYOUBI, Collaborators',
      year: 2023,
      venue: 'Statistical Medicine',
      status: 'published',
      abstract: 'Comprehensive review of modern statistical methods for analyzing survival data with emphasis on reproducibility and validation.',
      keywords: ['Statistics', 'Survival Analysis', 'Medical Data'],
      doi: '#',
      url: '#',
    },
  ]

  const research = [
    {
      title: 'High-Performance Computing for ML Training',
      focus: 'Optimizing distributed training across HPC clusters using MPI and GPU acceleration.',
      status: 'ongoing',
    },
    {
      title: 'Efficient Deep Learning Inference',
      focus: 'Model compression, quantization, and optimization for deployment.',
      status: 'ongoing',
    },
    {
      title: 'Interpretable AI & Explainability',
      focus: 'Understanding predictions of deep learning models through advanced visualization.',
      status: 'conceptual',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const statusColors = {
    published: 'bg-green-500 bg-opacity-20 text-green-400',
    'in-review': 'bg-yellow-500 bg-opacity-20 text-yellow-400',
    ongoing: 'bg-blue-500 bg-opacity-20 text-blue-400',
    conceptual: 'bg-purple-500 bg-opacity-20 text-purple-400',
  }

  return (
    <>
      <Head>
        <title>Research | Ahmed AYOUBI</title>
        <meta name="description" content="Research publications, papers, and ongoing research projects in AI, machine learning, and computer vision." />
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
            <span className="gradient-text">Research</span> & Publications
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl">
            Peer-reviewed publications, technical papers, and ongoing research initiatives
          </p>
        </motion.div>
      </section>

      {/* Publications */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Publications</h2>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${statusColors[pub.status] || statusColors.published}`}>
                    {pub.status}
                  </span>
                  <span className="text-accent font-mono text-sm">{pub.year}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {pub.title}
                </h3>

                <p className="text-accent text-sm font-mono mb-3">
                  {pub.venue}
                </p>

                <p className="text-text-secondary mb-4">
                  <span className="font-semibold">Authors: </span>{pub.authors}
                </p>

                <p className="text-text-secondary leading-relaxed mb-4">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="px-2 py-1 bg-primary rounded text-xs font-mono text-accent border border-accent border-opacity-30"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                  >
                    Read Paper
                  </a>
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                  >
                    DOI: {pub.doi}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Areas */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Research Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {research.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card"
              >
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${
                    item.status === 'ongoing' ? 'bg-blue-500 bg-opacity-20 text-blue-400' :
                    item.status === 'conceptual' ? 'bg-purple-500 bg-opacity-20 text-purple-400' :
                    'bg-green-500 bg-opacity-20 text-green-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary">
                  {item.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Research Interests */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Research Methodology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold">Rigorous Approach</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent">📊</span>
                  <span>Statistical validation of all hypotheses with proper p-values and confidence intervals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">🔬</span>
                  <span>Comprehensive ablation studies to understand architectural choices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">♻️</span>
                  <span>Full reproducibility with documented code and random seeds</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold">Best Practices</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent">📝</span>
                  <span>Clear methodology documentation and dataset descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">⚖️</span>
                  <span>Proper train/validation/test splits with appropriate metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">🎯</span>
                  <span>Honest reporting of limitations and failure cases</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
