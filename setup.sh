#!/bin/bash

# CYBERFORGE V2 - Setup Script
# Run this after pulling the V2 updates

echo "🔥 CYBERFORGE V2 - Setting up..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the website directory."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🎨 CYBERFORGE V2 - THE DISTINCTIVE EDITION"
echo ""
echo "Three distinct visual identities:"
echo "  🛡️  Defensive Ops (Blue) - Clinical precision"
echo "  ⚔️  Offensive Recon (Red) - Terminal stealth"
echo "  👁️  OSINT (Cyan) - Surveillance tech"
echo ""
echo "📚 Documentation:"
echo "  - README.md             - Project overview"
echo "  - CHANGELOG_V2.md       - Complete changes list"
echo "  - DEVELOPER_GUIDE.md    - Quick reference"
echo "  - IMPLEMENTATION_SUMMARY.md - Build details"
echo ""
echo "🚀 Next steps:"
echo "  1. Run: npm run dev"
echo "  2. Open: http://localhost:3000"
echo "  3. Test responsive behavior"
echo "  4. Verify animations (60fps)"
echo ""
echo "💡 Pro tip: Check DEVELOPER_GUIDE.md for component usage examples"
echo ""
echo "Ready to launch! 🚀"
