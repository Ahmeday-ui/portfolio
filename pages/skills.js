import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SkillsGrid from '../components/SkillsGrid'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      items: ['Python', 'R', 'Bash', 'Git', 'SQL', 'JavaScript', 'Java'],
    },
    {
      category: 'ML & Deep Learning',
      items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'XGBoost', 'LightGBM', 'OpenCV'],
    },
    {
      category: 'Computer Vision',
      items: ['CNNs', 'Transformers', 'Image Segmentation', 'Object Detection', 'Feature Extraction', 'YOLO', 'Faster R-CNN'],
    },
    {
      category: 'Remote Sensing & Geospatial',
      items: ['SAR Processing', 'Multispectral Analysis', 'Sentinel Data', 'GDAL', 'Rasterio', 'Geopandas', 'ArcGIS'],
    },
    {
      category: 'Statistics & Analysis',
      items: ['Statistical Testing', 'Hypothesis Testing', 'Survival Analysis', 'Regression Analysis', 'Time Series', 'Anova', 'Bayesian Methods'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Jupyter', 'Docker', 'Linux/Unix', 'HPC Clusters', 'Git', 'Weights&Biases', 'MLflow', 'Tensorboard'],
    },
    {
      category: 'Data Processing',
      items: ['Pandas', 'NumPy', 'Dask', 'Polars', 'ETL', 'Data Cleaning', 'Feature Engineering'],
    },
    {
      category: 'Visualization',
      items: ['Matplotlib', 'Seaborn', 'Plotly', 'Dash', 'Bokeh', 'Altair', 'ggplot2'],
    },
  ]

  const proficiencies = [
    { skill: 'Deep Learning', level: 90 },
    { skill: 'Computer Vision', level: 85 },
    { skill: 'Data Science', level: 88 },
    { skill: 'Statistical Analysis', level: 82 },
    { skill: 'Remote Sensing', level: 80 },
    { skill: 'Python', level: 95 },
    { skill: 'Machine Learning', level: 90 },
    { skill: 'Scientific Computing', level: 85 },
  ]

  return (
    <>
      <Head>
        <title>Skills | Ahmed AYOUBI</title>
        <meta name="description" content="Technical skills and expertise in AI, machine learning, computer vision, and data science." />
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
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl">
            Comprehensive technical expertise across AI, ML, CV, and scientific computing
          </p>
        </motion.div>
      </section>

      {/* Proficiency Levels */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Core Proficiencies</h2>

          <div className="space-y-6">
            {proficiencies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-text-primary">{item.skill}</span>
                  <span className="text-accent font-mono text-sm">{item.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden border border-slate-700">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="section-container">
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Detailed Skills
          </motion.h2>

          <SkillsGrid skills={skillCategories} />
        </div>
      </section>

      {/* Certifications & Courses */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Continuous Learning</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Advanced Deep Learning',
                issuer: 'Self-directed Study',
                description: 'Latest advances in Transformers, Vision Transformers, and large-scale models.',
              },
              {
                title: 'Distributed Computing',
                issuer: 'HPC Training',
                description: 'MPI, CUDA programming, and high-performance computing optimization.',
              },
              {
                title: 'Statistical Methods',
                issuer: 'University Courses',
                description: 'Advanced statistics, Bayesian inference, and causal analysis.',
              },
              {
                title: 'Scientific Computing',
                issuer: 'Professional Development',
                description: 'Numerical methods, parallel computing, and scientific software engineering.',
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {cert.title}
                </h3>
                <p className="text-accent text-sm font-mono mb-3">{cert.issuer}</p>
                <p className="text-text-secondary text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
