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

      {/* Blog Section */}
      <section id="blog" className="section-container bg-secondary bg-opacity-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="section-title">Blog &amp; Tutorials</h2>
            <p className="section-subtitle">
              In-depth articles on AI, machine learning, and deep learning — rigorous, visual, and code-first
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                slug: 'transformers-self-attention',
                title: 'Self-Attention Demystified: Understanding Transformers from First Principles',
                excerpt: 'A complete technical breakdown of QKV matrices, scaled dot-product attention, multi-head mechanisms, and positional encodings — with working PyTorch code and custom diagrams.',
                date: 'Nov 12, 2024',
                readTime: '20 min',
                category: 'Deep Learning',
                categoryColor: 'bg-blue-500 bg-opacity-20 text-blue-400 border-blue-500 border-opacity-30',
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
              },
              {
                slug: 'rlhf-demystified',
                title: 'RLHF Demystified: How We Teach LLMs to Actually Behave',
                excerpt: 'SFT, reward model training, PPO optimization, Constitutional AI, and DPO — a rigorous walkthrough of how ChatGPT and Claude were aligned.',
                date: 'Jan 8, 2025',
                readTime: '22 min',
                category: 'AI & LLMs',
                categoryColor: 'bg-purple-500 bg-opacity-20 text-purple-400 border-purple-500 border-opacity-30',
                image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
              },
              {
                slug: 'gradient-boosting-xgboost',
                title: 'Gradient Boosting Under the Hood: From AdaBoost to XGBoost',
                excerpt: 'Deriving gradient boosting from first principles — gradient descent in function space — then understanding XGBoost\'s second-order innovations and LightGBM.',
                date: 'Aug 20, 2024',
                readTime: '17 min',
                category: 'Machine Learning',
                categoryColor: 'bg-green-500 bg-opacity-20 text-green-400 border-green-500 border-opacity-30',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
              },
            ].map((post, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="card h-full flex flex-col hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                    <div className="relative h-40 overflow-hidden rounded-lg mb-4 -mx-1 -mt-1">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold border ${post.categoryColor}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-text-secondary">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2 leading-snug group-hover:text-accent transition-colors flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-700/50">
                      <span className="text-accent text-sm font-semibold group-hover:underline">
                        Read article →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pt-4"
          >
            <Link href="/blog" className="btn-secondary">
              View All Articles
            </Link>
          </motion.div>
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
