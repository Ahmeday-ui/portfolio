import React from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Experiences() {
  const experiences = [
    {
      company: 'CIKABA',
      logo: '/cikaba.png',
      title: 'Data Scientist IA (Alternance M2)',
      location: 'Clermont-Ferrand',
      date: 'Sept 2025 – Présent',
      description: 'Développement solutions IA pour prévention des risques professionnels, ML/DL, NLP, séries temporelles, Data Engineering, pipelines temps réel, modélisation prédictive, optimisation modèles en production.'
    },
    {
      company: 'LIMOS',
      logo: '/limos.png',
      title: 'Stage M1 – Deep Learning & Images Satellites',
      location: 'Clermont-Ferrand',
      date: 'Avril – Juillet 2025',
      description: 'Projet DLISCES : gestion des risques de catastrophes naturelles, classification automatique des dégâts, développement modèles CNN (YOLOv8, ResNet, U-Net), annotation & augmentation données, évaluation (F1-score, mAP, cross-validation).'
    },
    {
      company: 'Capgemini Maroc',
      logo: '/capgemini.png',
      title: 'Stage – Data Engineering & Cloud Computing',
      location: 'Casablanca',
      date: 'Juin – Sept 2023',
      description: 'Algorithme intelligent de nettoyage automatique de données, traitement facturation transporteurs, détection anomalies, Azure Data Factory, Logic Apps, +40% rapidité, 95% précision.'
    },
    {
      company: 'Wafa Assurance',
      logo: '/wafa_assurance.png',
      title: 'Stage – Modélisation Prédictive & Actuariat',
      location: 'Casablanca',
      date: 'Mars – Juillet 2022',
      description: 'Modèle prédictif assurance automobile, EDA, analyse statistique, régression logistique, Random Forest, Gradient Boosting, validation (AUC-ROC, Cross-validation), +20% ROI.'
    }
  ];

  const formations = [
    {
      title: 'Master 2 Statistiques et Traitement de Données (Alternance)',
      school: 'Université Clermont-Auvergne (63)',
      date: '2025-2026',
      description: 'Machine Learning, Deep Learning, Big Data, NLP, Computer Vision, MLOps, Data Engineering.'
    },
    {
      title: 'Master 1 Statistiques et Traitement de Données',
      school: 'Université Clermont-Auvergne (63)',
      date: '2024-2025',
      description: 'Data Science, Statistiques avancées, Modélisation, Inférence statistique, Séries temporelles, Programmation Python/R/SQL, Big Data.'
    },
    {
      title: 'Licence Sciences et Technologie – Mathématiques',
      school: 'Université Clermont-Auvergne (63)',
      date: '2023-2024',
      description: 'Mathématiques, Informatique, Statistiques.'
    },
    {
      title: 'Classes Préparatoires MPSI-MP',
      school: 'Lycée Reda Slaoui – Agadir, Maroc',
      date: '2021-2023',
      description: 'Mathématiques, Physique, Sciences de l’Ingénieur.'
    }
  ];

  return (
    <>
      <Navigation />
      <section className="pt-32 pb-20 section-container">
        <h1 className="text-5xl font-bold mb-8">Formations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {formations.map((f, idx) => (
            <div key={idx} className="bg-secondary bg-opacity-30 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{f.title}</h2>
              <p className="text-accent font-semibold mb-1">{f.school}</p>
              <p className="text-text-secondary mb-2">{f.date}</p>
              <p className="text-text-secondary">{f.description}</p>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-bold mb-8">Expériences Professionnelles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-secondary bg-opacity-30 rounded-xl p-6 shadow-lg flex items-center gap-6">
              <Image src={exp.logo} alt={exp.company} width={80} height={80} className="w-20 h-20 object-contain rounded-full border-4 border-accent bg-white shadow-md" />
              <div>
                <h2 className="text-2xl font-bold mb-1">{exp.title}</h2>
                <p className="text-accent font-semibold mb-1">{exp.company} - {exp.location}</p>
                <p className="text-text-secondary mb-2">{exp.date}</p>
                <p className="text-text-secondary">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
