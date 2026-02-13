import React from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const timeline = [
    {
      period: '2025-2026',
      title: 'Data Scientist IA (Alternance M2) – CIKABA',
      description: 'Développement de solutions IA pour la prévention des risques professionnels, ML/DL, NLP, séries temporelles, Data Engineering, pipelines temps réel, modélisation prédictive, optimisation modèles en production.'
    },
    {
      period: 'Avril – Juillet 2025',
      title: 'Stage M1 – LIMOS (Deep Learning & Images Satellites)',
      description: 'Projet DLISCES : gestion des risques de catastrophes naturelles, classification automatique des dégâts, développement modèles CNN (YOLOv8, ResNet, U-Net), annotation & augmentation données, évaluation (F1-score, mAP, cross-validation).'
    },
    {
      period: '2024-2025',
      title: 'Master 1 Statistiques et Traitement de Données',
      description: 'Université Clermont-Auvergne (63) – Data Science, Statistiques avancées, Modélisation, Inférence statistique, Séries temporelles, Programmation Python/R/SQL, Big Data.'
    },
    {
      period: '2023-2024',
      title: 'Licence Sciences et Technologie – Mathématiques',
      description: 'Université Clermont-Auvergne (63) – Mathématiques, Informatique, Statistiques.'
    },
    {
      period: '2023',
      title: 'Stage – Capgemini Maroc (Data Engineering & Cloud Computing)',
      description: 'Algorithme intelligent de nettoyage automatique de données, traitement facturation transporteurs, détection anomalies, Azure Data Factory, Logic Apps, +40% rapidité, 95% précision.'
    },
    {
      period: '2022',
      title: 'Stage – Wafa Assurance (Modélisation Prédictive & Actuariat)',
      description: 'Modèle prédictif assurance automobile, EDA, analyse statistique, régression logistique, Random Forest, Gradient Boosting, validation (AUC-ROC, Cross-validation), +20% ROI.'
    },
    {
      period: '2021-2023',
      title: 'Classes Préparatoires MPSI-MP',
      description: 'Lycée Reda Slaoui – Agadir, Maroc – Mathématiques, Physique, Sciences de l’Ingénieur.'
    }
  ];

  return (
    <>
      <Head>
        <title>About | Ahmed AYOUBI</title>
        <meta name="description" content="Learn about Ahmed AYOUBI - background, education, research interests, and professional journey." />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-text-secondary text-xl max-w-2xl">
            AI Engineer passionate about rigorous research and innovative problem-solving
          </p>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="section-container bg-secondary bg-opacity-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl font-bold">
                Présentation
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Je m'appelle Ahmed AYOUBI, ingénieur en Intelligence Artificielle et Data Scientist passionné par l’innovation et l’impact sociétal de l’IA. Fort d’une expertise en Machine Learning, Deep Learning, NLP, Computer Vision et Data Engineering, j’ai mené des projets ambitieux pour la prévention des risques, l’analyse de données médicales, la modélisation prédictive et la gestion de données massives. Mon parcours allie rigueur scientifique, créativité, et volonté de transformer les défis complexes en solutions concrètes. Curieux, persévérant et orienté résultats, je vise à contribuer à des projets d’envergure, en mettant l’IA au service de l’humain et de la société. “L’Intelligence Artificielle au service de l’humain et de la société”
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold">Research Interests</h3>
              <ul className="space-y-2 text-text-secondary">
                {[
                  'Deep Learning Architectures (CNNs, Transformers, Vision Models)',
                  'Computer Vision & Image Analysis',
                  'Remote Sensing & SAR Data Processing',
                  'Distributed & High-Performance Computing',
                  'Reproducible Research & Scientific Rigor',
                  'Optimization & Model Efficiency',
                ].map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent mt-1">▸</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold">Philosophy</h3>
              <p className="text-text-secondary leading-relaxed">
                I believe in the power of rigorous experimentation, transparent methodology, and reproducible science. Every solution should be grounded in solid theoretical understanding and validated through rigorous evaluation protocols.
              </p>
            </motion.div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-accent via-blue-500 to-accent bg-opacity-20 border border-accent border-opacity-30 flex items-center justify-center overflow-hidden">
              <img src="/photo d'identité.png" alt="Ahmed Ayoubi" className="w-3/4 h-3/4 object-cover rounded-full border-8 border-white shadow-2xl bg-white p-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">Professional Journey</h2>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card space-y-3"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <span className="text-accent font-mono text-sm px-3 py-1 rounded-full bg-secondary">
                    {item.period}
                  </span>
                </div>
                <p className="text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Approach */}
      <section className="section-container bg-secondary bg-opacity-30">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="section-title">My Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔬',
                title: 'Methodical',
                description: 'Rigorous experimentation with proper validation, ablation studies, and statistical testing.',
              },
              {
                icon: '⚙️',
                title: 'Engineering-Focused',
                description: 'Production-ready code with reproducibility, documentation, and best practices.',
              },
              {
                icon: '🎯',
                title: 'Impact-Driven',
                description: 'Solving real-world problems with measurable results and practical applications.',
              },
            ].map((approach, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card text-center"
              >
                <div className="text-4xl mb-3">{approach.icon}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {approach.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {approach.description}
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
