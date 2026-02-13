import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ 
  title, 
  description, 
  tags = [], 
  image, 
  slug,
  status = 'completed',
  reportLink
}) {
  const [showRequest, setShowRequest] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    // Ici, tu peux intégrer un service d'email ou d'API pour recevoir la demande
    setTimeout(() => setShowRequest(false), 2000);
  };
  const statusColors = {
    completed: 'bg-green-500 bg-opacity-20 text-green-400',
    ongoing: 'bg-blue-500 bg-opacity-20 text-blue-400',
    archived: 'bg-gray-500 bg-opacity-20 text-gray-400',
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card flex flex-col h-full"
    >
      {/* Status Badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold capitalize ${statusColors[status] || statusColors.completed}`}>
          {status}
        </span>
      </div>

      {/* Image */}
      {image && (
        <div className="mb-4 rounded-lg h-40 bg-black bg-opacity-30 overflow-hidden flex items-center justify-center border border-slate-700">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-text-primary">
        {slug ? (
          <Link href={`/projects/${slug}`} className="hover:text-accent transition-colors">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm mb-4 flex-grow">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary rounded text-xs font-mono text-accent border border-accent border-opacity-30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Demande d'accès au rapport */}
      {reportLink && (
        <>
          <button
            onClick={() => setShowRequest(true)}
            className="text-accent hover:text-accent-dark font-semibold flex items-center gap-2 transition-colors border border-accent px-3 py-2 rounded-lg bg-secondary"
          >
            Demander l'accès au rapport
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          {showRequest && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-primary p-8 rounded-xl shadow-2xl w-full max-w-md relative">
                <button onClick={() => setShowRequest(false)} className="absolute top-2 right-2 text-accent text-2xl">&times;</button>
                <h3 className="text-xl font-bold mb-4 text-accent">Demande d'accès au rapport</h3>
                {sent ? (
                  <div className="text-green-500 font-semibold">Votre demande a été envoyée !</div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded border border-accent bg-secondary text-text-primary" />
                    <input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded border border-accent bg-secondary text-text-primary" />
                    <textarea name="message" placeholder="Votre message" value={form.message} onChange={handleChange} required className="w-full px-3 py-2 rounded border border-accent bg-secondary text-text-primary" rows={3} />
                    <button type="submit" className="w-full bg-accent text-white font-bold py-2 rounded hover:bg-accent-dark transition">Envoyer la demande</button>
                  </form>
                )}
              </div>
            </div>
          )}
        </>
      )}
      {/* Lien vers la page projet */}
      {slug && (
        <Link
          href={`/projects/${slug}`}
          className="text-accent hover:text-accent-dark font-semibold flex items-center gap-2 transition-colors"
        >
          Voir le projet
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      )}
    </motion.div>
  )
}
