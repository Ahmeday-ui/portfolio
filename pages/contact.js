import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In production, this would send to a backend service or email provider
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: '💼',
      title: 'Professional',
      description: 'Collaboration, projets, et opportunités de recherche',
      link: 'https://www.linkedin.com/in/ahmed-ayoubi/',
      linkText: 'LinkedIn',
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'Contact direct pour toute demande ou opportunité',
      link: 'mailto:ayoubiahmed02@gmail.com',
      linkText: 'Envoyer un mail',
    },
    {
      icon: '💻',
      title: 'GitHub',
      description: 'Dépôts de code, projets techniques et contributions',
      link: 'https://github.com/Ahmeday-ui',
      linkText: 'GitHub',
    },
    {
      icon: '🎓',
      title: 'Research',
      description: 'Publications, citations et travaux académiques',
      link: 'https://scholar.google.com',
      linkText: 'Google Scholar',
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

  return (
    <>
      <Head>
        <title>Contact | Ahmed AYOUBI</title>
        <meta name="description" content="Get in touch with Ahmed AYOUBI for collaboration, research opportunities, or project discussions." />
      </Head>

      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-text-secondary text-xl">
            I&apos;m always interested in discussing research, projects, and innovative ideas. Reach out to start a conversation.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.link.startsWith('mailto') ? undefined : '_blank'}
                rel={method.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                variants={itemVariants}
                className="card hover:border-accent transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {method.description}
                </p>
                <div className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  {method.linkText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Send Me a Message</h2>

          <div className="max-w-2xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Name */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="name" className="block text-text-primary font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-slate-700 text-text-primary focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="email" className="block text-text-primary font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-slate-700 text-text-primary focus:border-accent focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Subject */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="subject" className="block text-text-primary font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-slate-700 text-text-primary focus:border-accent focus:outline-none transition-colors"
                  placeholder="What is this about?"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="message" className="block text-text-primary font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-slate-700 text-text-primary focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full btn-primary py-3 font-bold transition-all ${
                    submitted ? 'bg-green-500 text-white' : ''
                  }`}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </motion.div>

              {/* Note */}
              <motion.p variants={itemVariants} className="text-text-secondary text-sm text-center">
                I&apos;ll get back to you as soon as possible. Thank you for reaching out!
              </motion.p>
            </motion.form>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Let&apos;s Work Together</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '50+',
                label: 'Projects Completed',
                description: 'Diverse applications across ML, DL, and data science',
              },
              {
                number: '5+',
                label: 'Publications',
                description: 'Peer-reviewed papers in top-tier venues',
              },
              {
                number: '10+',
                label: 'Years Experience',
                description: 'In programming, data science, and AI research',
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card text-center"
              >
                <div className="text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {stat.label}
                </h3>
                <p className="text-text-secondary text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
