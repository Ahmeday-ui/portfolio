import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

const posts = [
  {
    slug: 'transformers-self-attention',
    title: 'Self-Attention Demystified: Understanding Transformers from First Principles',
    excerpt:
      'In 2017, a small team at Google published "Attention is All You Need" — and nothing in NLP was ever the same. I take apart the architecture piece by piece: QKV matrices, scaled dot-product attention, multi-head mechanisms, and positional encodings, with working PyTorch code and detailed diagrams throughout.',
    date: 'November 12, 2024',
    readTime: '20 min read',
    category: 'Deep Learning',
    tags: ['Transformers', 'NLP', 'Self-Attention', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    featured: true,
  },
  {
    slug: 'rlhf-demystified',
    title: 'RLHF Demystified: How We Teach LLMs to Actually Behave',
    excerpt:
      'Pretraining gives you a powerful but unpredictable language model. RLHF is what turns it into something useful. I walk through supervised fine-tuning, reward model training, and PPO optimization — and then explain why DPO is quickly becoming the cleaner alternative.',
    date: 'January 8, 2025',
    readTime: '22 min read',
    category: 'AI & LLMs',
    tags: ['RLHF', 'LLMs', 'Alignment', 'PPO', 'Fine-tuning'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    featured: false,
  },
  {
    slug: 'gradient-boosting-xgboost',
    title: 'Gradient Boosting Under the Hood: From AdaBoost to XGBoost',
    excerpt:
      'Gradient boosting consistently wins Kaggle competitions and dominates production deployments for tabular data. I derive the algorithm from first principles — gradient descent in function space — then explain exactly what innovations make XGBoost and LightGBM so much faster and better regularised.',
    date: 'August 20, 2024',
    readTime: '17 min read',
    category: 'Machine Learning',
    tags: ['Gradient Boosting', 'XGBoost', 'Ensemble Methods', 'Decision Trees'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    featured: false,
  },
]

const categories = ['All', 'Deep Learning', 'AI & LLMs', 'Machine Learning']

const categoryColors = {
  'Deep Learning': 'bg-blue-500 bg-opacity-20 text-blue-400 border-blue-500 border-opacity-30',
  'AI & LLMs': 'bg-purple-500 bg-opacity-20 text-purple-400 border-purple-500 border-opacity-30',
  'Machine Learning': 'bg-green-500 bg-opacity-20 text-green-400 border-green-500 border-opacity-30',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory)

  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)
  const showFeatured = activeCategory === 'All'

  return (
    <>
      <Head>
        <title>Blog | Ahmed AYOUBI</title>
        <meta
          name="description"
          content="Deep-dive articles and tutorials on AI, machine learning, deep learning, and data science — written by Ahmed AYOUBI."
        />
      </Head>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-accent bg-opacity-15 text-accent border border-accent border-opacity-30">
              Technical Writing
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Blog &amp; <span className="gradient-text">Tutorials</span>
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-2xl">
            In-depth articles on AI, machine learning, and deep learning. I write the explanations
            I wish had existed when I was learning — rigorous, visual, and code-first.
          </p>
          <div className="flex items-center gap-6 pt-2 text-sm text-text-secondary font-mono">
            <span>{posts.length} articles</span>
            <span>·</span>
            <span>Updated regularly</span>
          </div>
        </motion.div>
      </section>

      {/* Featured Article */}
      {showFeatured && featured && (
        <section className="section-container pt-0 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 hover:border-accent hover:border-opacity-60 transition-all duration-500">
                {/* Image */}
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-accent text-primary">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        categoryColors[featured.category] || ''
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-text-secondary text-xs font-mono">{featured.date}</span>
                    <span className="text-text-secondary text-xs font-mono">·</span>
                    <span className="text-text-secondary text-xs font-mono">{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mb-4 hidden sm:block">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary bg-opacity-80 rounded text-xs font-mono text-accent border border-accent border-opacity-20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </section>
      )}

      {/* Category Filter */}
      <section className="section-container pt-0 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent text-primary'
                  : 'bg-secondary text-text-secondary hover:text-accent border border-slate-700 hover:border-accent hover:border-opacity-50'
              }`}
            >
              {cat}
              <span className="ml-2 text-xs opacity-70">
                {cat === 'All' ? posts.length : posts.filter((p) => p.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="section-container pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {(showFeatured ? rest : filtered).map((post) => (
            <motion.article key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="card h-full flex flex-col hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden rounded-lg mb-5 -mx-1 -mt-1">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold border ${
                          categoryColors[post.category] || ''
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-3 text-xs font-mono text-text-secondary">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-text-primary mb-3 leading-snug group-hover:text-accent transition-colors flex-grow">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary rounded text-xs font-mono text-accent border border-accent border-opacity-20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-secondary">
            No articles in this category yet. Check back soon.
          </div>
        )}
      </section>

      {/* Newsletter-style CTA */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card border-accent border-opacity-30 text-center space-y-4 py-12 max-w-2xl mx-auto"
        >
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-primary text-2xl font-bold">
            ✦
          </div>
          <h3 className="text-2xl font-bold">More coming soon</h3>
          <p className="text-text-secondary">
            I write when I find something worth explaining well. Topics coming up: diffusion model
            math, sparse attention mechanisms, and a practical guide to training on HPC clusters.
          </p>
          <Link href="/contact" className="btn-primary inline-block mt-2">
            Get in touch
          </Link>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
