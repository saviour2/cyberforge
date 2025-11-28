'use client'

import React from 'react'
import { Github, Twitter, Mail, Shield } from 'lucide-react'

/**
 * Footer component - Site footer with social links
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neon-cyan/20 glass-effect">
      <div className="container-cyber py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-neon-cyan" />
              <span className="text-lg font-display font-bold text-gradient-cyber">
                CYBERFORGE
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Military-Grade Utilities for Modern Security Professionals. 
              Open-source, privacy-first, client-side tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-off-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#tools"
                  className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  All Tools
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold text-off-white mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy border border-neon-cyan/30 rounded hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-neon-cyan" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-navy border border-neon-cyan/30 rounded hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-neon-cyan" />
              </a>
              <a
                href="mailto:contact@cyberforge.dev"
                className="p-2 bg-navy border border-neon-cyan/30 rounded hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-neon-cyan" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neon-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} CYBERFORGE. Open-source under MIT License.
            </p>
            <p className="text-sm text-gray-500 font-mono">
              All tools run client-side. Your data never leaves your browser.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
