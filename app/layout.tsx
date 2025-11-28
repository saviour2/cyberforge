import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CYBERFORGE | Military-Grade Security Utilities',
  description: 'A comprehensive suite of cybersecurity tools for security researchers, penetration testers, and developers.',
  keywords: ['cybersecurity', 'security tools', 'pentesting', 'hacking tools', 'infosec'],
  authors: [{ name: 'CyberForge' }],
  openGraph: {
    title: 'CYBERFORGE',
    description: 'Military-Grade Utilities for Modern Security Professionals',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
