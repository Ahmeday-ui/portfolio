import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Ahmed AYOUBI</h3>
            <p className="text-text-secondary text-sm">
              AI Engineer & Data Scientist focused on cutting-edge research at the intersection of ML, CV, and remote sensing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Research', href: '/research' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-secondary hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-bold mb-4">Contact</h4>
            <p className="text-text-secondary text-sm mb-2">
              <a href="mailto:ahmed@example.com" className="hover:text-accent transition-colors">
                ahmed@example.com
              </a>
            </p>
            <p className="text-text-secondary text-sm text-xs">
              Open for collaboration and research opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
            <p>&copy; {currentYear} Ahmed AYOUBI. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Built with <span className="text-accent">Next.js</span> + <span className="text-accent">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
