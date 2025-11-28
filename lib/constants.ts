import { LucideIcon, Shield, Lock, Eye, Network, Code, Database, Search, Key, Terminal, FileCode, Globe, Info, User, Image, Server } from 'lucide-react'

/**
 * Tool metadata interface
 */
export interface Tool {
  id: string
  name: string
  description: string
  path: string
  icon: LucideIcon
  category: 'defensive' | 'offensive' | 'osint'
  badge?: 'NEW' | 'BETA' | 'POPULAR'
}

/**
 * Tool categories for organization
 */
export const TOOL_CATEGORIES = {
  defensive: {
    id: 'defensive',
    name: 'DEFENSIVE OPS',
    description: 'Blue Team Security Tools',
    icon: Shield,
  },
  offensive: {
    id: 'offensive',
    name: 'OFFENSIVE RECON',
    description: 'Red Team Utilities',
    icon: Terminal,
  },
  osint: {
    id: 'osint',
    name: 'INTELLIGENCE GATHERING',
    description: 'OSINT & Research Tools',
    icon: Eye,
  },
} as const

/**
 * All available tools
 */
export const TOOLS: Tool[] = [
  // DEFENSIVE OPS
  {
    id: 'password-entropy',
    name: 'Password Entropy Analyzer',
    description: 'Real-time strength calculation with crack time estimates',
    path: '/tools/password-entropy',
    icon: Lock,
    category: 'defensive',
    badge: 'POPULAR',
  },
  {
    id: 'security-headers',
    name: 'Security Headers Scanner',
    description: 'Paste response headers, get vulnerability report',
    path: '/tools/security-headers',
    icon: Shield,
    category: 'defensive',
  },
  {
    id: 'hash-identifier',
    name: 'Hash Identifier',
    description: 'Multi-algo detection (MD5, SHA, bcrypt, etc.)',
    path: '/tools/hash-identifier',
    icon: Key,
    category: 'defensive',
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder & Validator',
    description: 'Parse tokens, verify signatures (client-side)',
    path: '/tools/jwt-decoder',
    icon: FileCode,
    category: 'defensive',
  },
  {
    id: 'file-permissions',
    name: 'File Permission Visualizer',
    description: 'CHMOD calculator with octal/symbolic converter',
    path: '/tools/file-permissions',
    icon: Database,
    category: 'defensive',
  },

  // OFFENSIVE RECON
  {
    id: 'subnet-calculator',
    name: 'Subnet & CIDR Calculator',
    description: 'IP range visualization with network/broadcast',
    path: '/tools/subnet-calculator',
    icon: Network,
    category: 'offensive',
    badge: 'POPULAR',
  },
  {
    id: 'mac-lookup',
    name: 'MAC Address Lookup',
    description: 'Vendor identification with OUI database',
    path: '/tools/mac-lookup',
    icon: Search,
    category: 'offensive',
  },
  {
    id: 'encoder-decoder',
    name: 'Encoder/Decoder Suite',
    description: 'Base64, Hex, URL, HTML entities',
    path: '/tools/encoder-decoder',
    icon: Code,
    category: 'offensive',
  },
  {
    id: 'sqli-builder',
    name: 'SQLi Payload Builder',
    description: 'Educational templates with syntax highlighting',
    path: '/tools/sqli-builder',
    icon: Database,
    category: 'offensive',
  },
  {
    id: 'reverse-shell',
    name: 'Reverse Shell Generator',
    description: 'Multi-language one-liners (Bash, Python, NC)',
    path: '/tools/reverse-shell',
    icon: Terminal,
    category: 'offensive',
    badge: 'NEW',
  },

  // INTELLIGENCE GATHERING
  {
    id: 'dns-lookup',
    name: 'DNS Record Lookup',
    description: 'A, MX, TXT, CNAME with latency metrics',
    path: '/tools/dns-lookup',
    icon: Globe,
    category: 'osint',
  },
  {
    id: 'whois-inspector',
    name: 'WHOIS Domain Inspector',
    description: 'Registrar info, expiry dates',
    path: '/tools/whois-inspector',
    icon: Info,
    category: 'osint',
  },
  {
    id: 'user-agent-parser',
    name: 'User-Agent Parser',
    description: 'Browser/OS detection from UA strings',
    path: '/tools/user-agent-parser',
    icon: User,
    category: 'osint',
  },
  {
    id: 'exif-extractor',
    name: 'EXIF Metadata Extractor',
    description: 'Local image analysis (privacy-first)',
    path: '/tools/exif-extractor',
    icon: Image,
    category: 'osint',
  },
  {
    id: 'port-reference',
    name: 'Port Reference Database',
    description: 'Search by number or service name',
    path: '/tools/port-reference',
    icon: Server,
    category: 'osint',
  },
]

/**
 * Get tools by category
 */
export const getToolsByCategory = (category: 'defensive' | 'offensive' | 'osint'): Tool[] => {
  return TOOLS.filter((tool) => tool.category === category)
}

/**
 * Get tool by ID
 */
export const getToolById = (id: string): Tool | undefined => {
  return TOOLS.find((tool) => tool.id === id)
}
