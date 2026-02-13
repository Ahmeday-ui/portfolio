import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const projectData = {
  'survival-analysis': {
    title: 'Survival Analysis & Statistical Modeling',
    subtitle: 'Comprehensive Analysis of Survival Data with Advanced Statistical Methods',
    status: 'completed',
    date: '2024',
    category: 'Data Science',
    image: 'https://via.placeholder.com/800x400/00d9ff/0f172a?text=Survival+Analysis',
    overview: 'This project demonstrates advanced statistical analysis techniques applied to medical survival data. It includes Kaplan-Meier survival curves, Cox proportional hazards regression, and comprehensive statistical evaluations.',
    context: 'Medical datasets often contain complex patterns in patient outcomes over time. Understanding these patterns is critical for clinical decision-making and treatment evaluation.',
    objectives: [
      'Analyze survival patterns across different patient groups',
      'Identify significant prognostic factors',
      'Build predictive models for patient outcomes',
      'Provide rigorous statistical validation',
    ],
    methodology: 'Implemented comprehensive survival analysis pipeline including data preprocessing, missing value handling, exploratory analysis, and multiple regression techniques.',
    technicalStack: ['R', 'ggplot2', 'survival package', 'Statistical Testing', 'Data Visualization'],
    datasets: ['Medical patient records', 'Clinical outcomes data', 'Real-world healthcare datasets'],
    results: [
      'Identified key predictive factors with statistical significance',
      'Generated survival curves showing clear separation between groups',
      'Validated assumptions of Cox proportional hazards model',
      'Achieved robust predictions with proper confidence intervals',
    ],
    insights: 'The analysis reveals that certain clinical markers are strong predictors of patient outcomes. The methodological rigor ensures reproducibility and confidence in the findings.',
    githubUrl: '#',
    papersUrl: '#',
  htmlReportUrl: '/Projects/A.AYOUBI_JBKP_ANALYSEDESURVIE.html',
    hasHtmlReport: true,
  },
  'nba-analysis': {
    title: 'NBA Analytics & Performance Prediction',
    subtitle: 'Data-Driven Analysis of Basketball Player and Team Performance',
    status: 'completed',
    date: '2023',
    category: 'Data Science',
    image: 'https://via.placeholder.com/800x400/00d9ff/0f172a?text=NBA+Analytics',
    overview: 'Sports analytics project applying advanced data analysis techniques to NBA datasets. Includes player performance metrics, team dynamics analysis, and predictive modeling.',
    context: 'Basketball generates enormous amounts of performance data. Leveraging this data can provide insights into player contributions, team strategy effectiveness, and match outcomes.',
    objectives: [
      'Analyze individual player performance metrics',
      'Identify team performance patterns',
      'Build predictive models for game outcomes',
      'Generate actionable insights for strategy',
    ],
    methodology: 'Data collection from official NBA sources, comprehensive exploratory data analysis, feature engineering, and statistical modeling with cross-validation.',
    technicalStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Statistical Analysis'],
    datasets: ['Official NBA statistics', 'Player performance data', 'Game results'],
    results: [
      'Identified key performance indicators predicting team success',
      'Built models with 85%+ accuracy for game outcome prediction',
      'Discovered non-obvious player value correlations',
      'Generated comprehensive performance visualizations',
    ],
    insights: 'The analysis demonstrates that traditional box score statistics may miss important contributions. Advanced metrics reveal player value beyond simple counting',
    githubUrl: '#',
    papersUrl: '#',
  htmlReportUrl: '/Projects/AYOUBI_CHOUKOUKOU_Projet-Transverses-NBA.html',
    hasHtmlReport: true,
  },
  'computer-vision': {
    title: 'Advanced Computer Vision Pipeline',
    subtitle: 'Deep Learning for Image Analysis and Understanding',
    status: 'ongoing',
    date: '2024',
    category: 'Deep Learning',
    image: 'https://via.placeholder.com/800x400/00d9ff/0f172a?text=Computer+Vision',
    overview: 'State-of-the-art computer vision implementation combining CNNs and Transformers for image segmentation and object detection tasks.',
    context: 'Computer vision applications require robust, efficient, and accurate models. This project explores modern architectures and training strategies.',
    objectives: [
      'Implement efficient CNN architectures',
      'Explore Vision Transformer models',
      'Build robust image segmentation pipeline',
      'Optimize for inference speed',
    ],
    methodology: 'Custom training loops with PyTorch, mixed precision training, advanced augmentation strategies, and comprehensive evaluation protocols.',
    technicalStack: ['PyTorch', 'CNN architectures', 'Vision Transformers', 'OpenCV', 'CUDA'],
    datasets: ['COCO dataset', 'Cityscapes', 'Custom annotated datasets'],
    results: [
      'Achieved competitive mAP scores on benchmark datasets',
      'Optimized inference pipeline for real-time performance',
      'Implemented custom loss functions for domain adaptation',
      'Detailed ablation studies on architecture choices',
    ],
    insights: 'Vision Transformers show promise for segmentation tasks but require careful tuning. Hybrid approaches combining CNNs and Transformers may be optimal.',
    githubUrl: 'https://github.com',
    papersUrl: '#',
    hasHtmlReport: false,
  },
  'remote-sensing': {
    title: 'Remote Sensing Image Classification',
    subtitle: 'Multispectral Data Analysis and Satellite Imagery Processing',
    status: 'ongoing',
    date: '2024',
    category: 'Research',
    image: 'https://via.placeholder.com/800x400/00d9ff/0f172a?text=Remote+Sensing',
    overview: 'Advanced remote sensing application combining SAR and optical satellite data with deep learning for land cover classification and monitoring.',
    context: 'Satellite data provides unique perspectives for environmental monitoring, urban planning, and disaster assessment. Leveraging both SAR and optical data improves classification accuracy.',
    objectives: [
      'Process multispectral satellite imagery',
      'Fuse SAR and optical data streams',
      'Build robust classification models',
      'Monitor temporal changes',
    ],
    methodology: 'Geospatial preprocessing pipeline, multi-modal data fusion, custom CNN architectures for remote sensing, and change detection algorithms.',
    technicalStack: ['Python', 'GDAL', 'Rasterio', 'PyTorch', 'Scikit-image', 'Geopandas'],
    datasets: ['Sentinel-1 SAR data', 'Sentinel-2 multispectral', 'Landsat imagery'],
    results: [
      'Achieved 92% classification accuracy on test sets',
      'Implemented efficient multispectral processing pipeline',
      'Developed change detection algorithms for monitoring',
      'Generated detailed analysis reports with visualizations',
    ],
    insights: 'SAR data significantly improves classification in cloudy regions. Multi-temporal analysis reveals seasonal patterns and temporal trends.',
    githubUrl: 'https://github.com',
    papersUrl: '#',
    hasHtmlReport: false,
  },
}

export default function ProjectDetail({ slug }) {
  const [showHtmlReport, setShowHtmlReport] = useState(false)
  const project = projectData[slug] || null

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found | Ahmed AYOUBI</title>
        </Head>
        <Navigation />
        <div className="pt-32 pb-20 section-container text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{project.title} | Ahmed AYOUBI</title>
        <meta name="description" content={project.overview} />
      </Head>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <Link href="/projects" className="text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <span className="text-text-secondary">•</span>
            <span className="text-accent font-mono text-sm">{project.category}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold">
            {project.title}
          </h1>
          <p className="text-text-secondary text-xl">
            {project.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Meta Information */}
      <section className="section-container bg-secondary bg-opacity-30 py-12 -mx-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Status', value: project.status.charAt(0).toUpperCase() + project.status.slice(1) },
            { label: 'Year', value: project.date },
            { label: 'Category', value: project.category },
            { label: 'Complexity', value: 'Advanced' },
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-text-secondary text-sm mb-1">{item.label}</p>
              <p className="text-text-primary font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Overview</h2>
              <p className="text-text-secondary leading-relaxed">{project.overview}</p>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-3">Context & Challenge</h3>
              <p className="text-text-secondary leading-relaxed">{project.context}</p>
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Objectives</h3>
              <ul className="space-y-2">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-accent mt-1">✓</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-3">Methodology</h3>
              <p className="text-text-secondary leading-relaxed mb-4">{project.methodology}</p>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-text-secondary font-mono">Implementation Details:</p>
                <ul className="text-sm text-text-secondary mt-2 space-y-1">
                  <li>• Custom training loops with modern optimization techniques</li>
                  <li>• Rigorous validation with proper train/val/test splits</li>
                  <li>• Comprehensive error analysis and debugging</li>
                  <li>• Full reproducibility documentation</li>
                </ul>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Results & Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <div key={idx} className="card">
                    <p className="text-text-secondary text-sm">{result}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card border-l-4 border-accent"
            >
              <h3 className="text-xl font-bold mb-2">Key Insights</h3>
              <p className="text-text-secondary">{project.insights}</p>
            </motion.div>

            {/* HTML Report */}
            {project.hasHtmlReport && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="card border-l-4 border-blue-400 bg-blue-900 bg-opacity-10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Interactive Report</h3>
                    <p className="text-text-secondary text-sm mb-4">
                      View the detailed interactive HTML report with full analysis, visualizations, and code.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowHtmlReport(!showHtmlReport)}
                    className="btn-secondary whitespace-nowrap"
                  >
                    {showHtmlReport ? 'Hide Report' : 'View Report'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* HTML Report Viewer */}
            {showHtmlReport && project.hasHtmlReport && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden rounded-lg border border-slate-700 bg-secondary bg-opacity-50"
              >
                <div className="p-4 bg-black bg-opacity-30 border-b border-slate-700">
                  <p className="text-sm text-text-secondary">
                    📄 Interactive HTML Report
                  </p>
                </div>
                <iframe
                  src={project.htmlReportUrl}
                  className="w-full h-96"
                  title="Project Report"
                  style={{ border: 'none' }}
                />
                <div className="p-4 text-center border-t border-slate-700">
                  <p className="text-sm text-text-secondary mb-3">
                    Report loaded locally. Full functionality enabled in new tab.
                  </p>
                  <a
                    href={project.htmlReportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block"
                  >
                    Open Full Report
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technical Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card sticky top-24"
            >
              <h3 className="text-lg font-bold text-accent mb-4">Technical Stack</h3>
              <div className="space-y-3">
                {project.technicalStack.map((tech, idx) => (
                  <div key={idx} className="px-3 py-2 rounded-lg bg-primary border border-slate-700 text-sm font-mono text-text-primary hover:border-accent transition-colors">
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Datasets */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-lg font-bold text-accent mb-4">Datasets</h3>
              <ul className="space-y-2">
                {project.datasets.map((dataset, idx) => (
                  <li key={idx} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>{dataset}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card space-y-3"
            >
              <h3 className="text-lg font-bold text-accent mb-4">Resources</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors text-center font-semibold"
              >
                → GitHub Repository
              </a>
              <a
                href={project.papersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-lg border border-slate-700 hover:border-accent hover:text-accent transition-colors text-center font-semibold"
              >
                → Research Papers
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.project,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectData).map(slug => ({ params: { project: slug } })),
    fallback: true,
  }
}
