# CYBERFORGE V2 - THE DISTINCTIVE EDITION

**Military-Grade Utilities for Modern Security Professionals**

> Three distinct visual identities. One unified purpose.

---

## 🎨 What Makes V2 Different

CYBERFORGE V2 features **three completely distinct visual identities**, each representing a different category of security tools:

### 🛡️ DEFENSIVE OPS - "The Vault"

Clinical blue aesthetics with frosted glass, heartbeat animations, and medical precision. Think high-tech laboratory meets security operations center.

**Colors:** `#58a6ff` (Clinical Blue), `#7ee787` (Success Green)  
**Fonts:** IBM Plex Sans  
**Animations:** Smooth, predictable (300ms)

### ⚔️ OFFENSIVE RECON - "The Shadow"

Pure black terminal windows with red accents, scanlines, and glitch effects. Raw command-line power with zero compromise.

**Colors:** `#ff0055` (Hot Red), `#00ff41` (Matrix Green)  
**Fonts:** Fira Code (Terminal)  
**Animations:** Instant, aggressive (100ms)

### 👁️ INTELLIGENCE GATHERING - "The Panopticon"

Surveillance cyan with camera viewfinders, radar sweeps, and network graphs. You're not just using tools—you're being watched while you watch.

**Colors:** `#00ffc8` (Cyan), `#ff006e` (Target Pink)  
**Fonts:** Space Grotesk  
**Animations:** Mechanical, precise (300ms linear)

---

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **State:** Zustand
- **Utilities:** clsx

---

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the application.

---

## 🛠️ Tool Categories

### 🛡️ DEFENSIVE OPS (Blue Team) - 5 Tools

1. Password Entropy Analyzer
2. Security Headers Scanner
3. Hash Identifier
4. JWT Decoder & Validator
5. File Permission Visualizer

### ⚔️ OFFENSIVE RECON (Red Team) - 5 Tools

6. Subnet & CIDR Calculator
7. MAC Address Lookup
8. Encoder/Decoder Suite
9. SQLi Payload Builder
10. Reverse Shell Generator

### 👁️ INTELLIGENCE GATHERING (OSINT) - 5 Tools

11. DNS Record Lookup
12. WHOIS Domain Inspector
13. User-Agent Parser
14. EXIF Metadata Extractor
15. Port Reference Database

---

## 📁 Project Structure

```
cyberforge/
├── app/
│   ├── (tools)/           # Tool route group
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage with three themes
│   └── globals.css        # Category-specific animations
├── components/
│   ├── ui/                # Reusable primitives
│   │   ├── PerspectiveGrid.tsx
│   │   ├── RadarSweep.tsx
│   │   ├── TerminalBox.tsx
│   │   └── ...
│   ├── cards/             # Category-specific cards
│   │   ├── DefensiveCard.tsx
│   │   ├── OffensiveCard.tsx
│   │   └── OSINTCard.tsx
│   ├── layout/            # Layout components
│   └── sections/          # Page sections
├── lib/
│   ├── constants.ts       # Tool metadata
│   └── utils.ts           # Helper functions
└── public/
    └── noise.svg          # Noise texture
```

---

## ✨ Features

- ✅ **Three Distinct Identities** - Each category feels like a different app
- ✅ **100% Client-side** - Privacy-first, no data sent to servers
- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- ✅ **Category-Specific Animations** - Heartbeat, glitch, radar sweep
- ✅ **Keyboard Navigation** - Full accessibility support
- ✅ **Copy-to-Clipboard** - Easy result sharing
- ✅ **60fps Animations** - Smooth on mid-range devices
- ✅ **Accessible** - WCAG AA compliant

---

## 🎯 Visual Design System

### Color Philosophy

**No generic gradients.** Each category owns one primary color that defines everything in that section.

- **Blue = Defense** (Trust, precision, clinical)
- **Red = Offense** (Power, stealth, aggression)
- **Cyan = OSINT** (Surveillance, data, watching)

### Animation Principles

- **Defensive:** Smooth fades (like medical scans)
- **Offensive:** Instant glitches (terminal instability)
- **OSINT:** Linear sweeps (camera movements)

---

## 📚 Documentation

- **[CHANGELOG_V2.md](./CHANGELOG_V2.md)** - Complete list of V2 changes
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Quick reference for developers
- **[.copilot-instructions2.md](./.copilot-instructions2.md)** - Design specification

---

## 🎬 Development Roadmap

- [x] **Phase 1:** Foundation & Design System
- [x] **Phase 2:** Three Visual Identities
- [x] **Phase 3:** Homepage with Category Sections
- [ ] **Phase 4:** First 5 Tools (one per category)
- [ ] **Phase 5:** Remaining 10 Tools
- [ ] **Phase 6:** Polish & Optimization
- [ ] **Phase 7:** Deploy to Production

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Open an issue to discuss improvements.

---

## 📄 License

MIT License - Open source and free to use.

---

## 🔒 Privacy

**Your data never leaves your browser.** All tools run 100% client-side. No analytics, no tracking, no servers—just pure JavaScript in your browser.

---

## 🎨 Design Credits

Inspired by:

- **surveillancewatch.io** - Surveillance aesthetics
- **tools.isoumya.xyz** - Minimal brutalism
- **GSAP showcase** - Premium microinteractions
- **Cyberpunk 2077** - UI design language

Built with ❤️ and an unhealthy obsession with visual design.

---

**Built with precision. Deployed with purpose. 🔥**
