'use client'

import React from 'react'
import { Github, Twitter, Mail, Shield } from 'lucide-react'

/**
 * Footer component - Updated with split-color branding
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-defensive-primary rounded flex items-center justify-center">
                <span className="text-defensive-primary font-mono font-bold text-sm">CF</span>
              </div>
              <span className="text-lg font-bold">
                <span className="text-defensive-primary">CYBER</span>
                <span className="text-offensive-primary">FORGE</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
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
                  href="#defensive"
                  className="text-sm text-gray-400 hover:text-defensive-primary transition-colors"
                >
                  Defensive Ops
                </a>
              </li>
              <li>
                <a
                  href="#offensive"
                  className="text-sm text-gray-400 hover:text-offensive-primary transition-colors"
                >
                  Offensive Recon
                </a>
              </li>
              <li>
                <a
                  href="#osint"
                  className="text-sm text-gray-400 hover:text-osint-primary transition-colors"
                >
                  Intelligence Gathering
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  About
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
                className="p-2 bg-defensive-bg border border-defensive-border rounded 
                           hover:border-defensive-primary hover:shadow-[0_0_20px_rgba(88,166,255,0.3)] 
                           transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-defensive-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black border-2 border-offensive-border rounded 
                           hover:border-offensive-primary hover:shadow-[0_0_20px_rgba(255,0,85,0.3)] 
                           transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-offensive-primary" />
              </a>
              <a
                href="mailto:contact@cyberforge.dev"
                className="p-2 bg-osint-bg border border-osint-border rounded 
                           hover:border-osint-primary hover:shadow-[0_0_20px_rgba(0,255,200,0.3)] 
                           transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-osint-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
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
