import React, { useState } from 'react';
import { FileText, Code, Palette, Megaphone, Search, Filter, Clock, DollarSign, CheckCircle, AlertCircle, ChevronRight, Zap, Star } from 'lucide-react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBounty, setSelectedBounty] = useState(null);

  const categories = [
    { id: 'all', label: 'All Bounties', icon: FileText, count: 24 },
    { id: 'creative', label: 'Creative', icon: Palette, count: 8 },
    { id: 'dev', label: 'Dev', icon: Code, count: 7 },
    { id: 'social', label: 'Social', icon: Megaphone, count: 5 },
    { id: 'research', label: 'Research', icon: Search, count: 4 }
  ];

  const bounties = [
    {
      id: 1,
      title: "Design $root.eth brand refresh kit",
      category: 'creative',
      amount: 850,
      deadline: '3 days',
      status: 'open',
      difficulty: 'senior',
      description: "Complete brand refresh including logo variants, color palette, typography system, and basic usage guidelines for $root.eth ecosystem.",
      requirements: ["Figma deliverables", "Dark mode native", "ENS-friendly design", "3 logo variants"],
      client: { name: "SudoSolo", verified: true },
      applicants: 3,
      tags: ["branding", "figma", "web3"]
    },
    {
      id: 2,
      title: "Build ENS subdomain automation script",
      category: 'dev',
      amount: 1200,
      deadline: '5 days',
      status: 'open',
      difficulty: 'senior',
      description: "Write smart contract + frontend for automated ENS subdomain creation and management for Base Mini Apps integration.",
      requirements: ["Solidity contract", "React frontend", "Base L2 deployment", "Documentation"],
      client: { name: "TrustCat HQ", verified: true },
      applicants: 5,
      tags: ["solidity", "ens", "base", "react"]
    },
    {
      id: 3,
      title: "X thread series: RTX 5090 compute guide",
      category: 'social',
      amount: 400,
      deadline: '2 days',
      status: 'open',
      difficulty: 'junior',
      description: "5-tweet thread explaining RTX 5090 compute capabilities, AI training use cases, and why decentralized GPU networks matter.",
      requirements: ["5 tweets", "Technical accuracy", "Engaging hooks", "Visual suggestions"],
      client: { name: "MineChain", verified: true },
      applicants: 12,
      tags: ["writing", "twitter", "ai"]
    },
    {
      id: 4,
      title: "Farcaster bot for bounty notifications",
      category: 'dev',
      amount: 650,
      deadline: '4 days',
      status: 'in_progress',
      difficulty: 'mid',
      description: "Build Farcaster bot that posts new TrustDesk bounties to dedicated channel with category filters.",
      requirements: ["Farcaster API integration", "Real-time posting", "Filter system", "Error handling"],
      client: { name: "TrustCat HQ", verified: true },
      applicants: 1,
      tags: ["typescript", "farcaster", "api"]
    },
    {
      id: 5,
      title: "Competitive analysis: GPU marketplaces",
      category: 'research',
      amount: 500,
      deadline: '7 days',
      status: 'open',
      difficulty: 'mid',
      description: "Deep dive on Akash, Render, IO.net - pricing models, provider economics, client experience, market positioning.",
      requirements: ["10+ page report", "Data tables", "SWOT analysis", "Recommendations"],
      client: { name: "SudoSolo", verified: true },
      applicants: 4,
      tags: ["research", "competitive-intel", "web3"]
    },
    {
      id: 6,
      title: "TrustDesk landing page animations",
      category: 'creative',
      amount: 600,
      deadline: '3 days',
      status: 'open',
      difficulty: 'mid',
      description: "Add smooth micro-animations to bounty board - hover states, card transitions, loading states. Framer Motion preferred.",
      requirements: ["Framer Motion", "React components", "60fps performance", "Dark theme"],
      client: { name: "TrustCat HQ", verified: true },
      applicants: 7,
      tags: ["animation", "react", "framer-motion"]
    },
    {
      id: 7,
      title: "CAT Chain explainer infographic",
      category: 'creative',
      amount: 450,
      deadline: '4 days',
      status: 'open',
      difficulty: 'junior',
      description: "Single-page infographic explaining how CAT Chain verification works - from job submission to on-chain proof.",
      requirements: ["High-res PNG/SVG", "Web3-native aesthetic", "Technical accuracy", "Social-ready formats"],
      client: { name: "TrustCat HQ", verified: true },
      applicants: 9,
      tags: ["infographic", "design", "education"]
    },
    {
      id: 8,
      title: "Smart contract audit: Escrow system",
      category: 'dev',
      amount: 2500,
      deadline: '10 days',
      status: 'open',
      difficulty: 'senior',
      description: "Full security audit of TrustCat escrow contracts - identify vulnerabilities, provide report with fixes.",
      requirements: ["Solidity expertise", "Formal verification", "Written report", "Fix recommendations"],
      client: { name: "TrustCat HQ", verified: true },
      applicants: 2,
      tags: ["security", "solidity", "audit"]
    }
  ];

  const filteredBounties = bounties.filter(b => {
    const matchesCategory = activeFilter === 'all' || b.category === activeFilter;
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'open': return 'text-green-400 border-green-500';
      case 'in_progress': return 'text-yellow-400 border-yellow-500';
      case 'completed': return 'text-blue-400 border-blue-500';
      default: return 'text-gray-400 border-gray-500';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'junior': return 'text-green-400 bg-green-500/10';
      case 'mid': return 'text-yellow-400 bg-yellow-500/10';
      case 'senior': return 'text-red-400 bg-red-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <nav className="border-b border-green-900 bg-black/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold text-green-400">TrustDesk</span>
            <span className="text-green-500 text-sm ml-2">/ bounties</span>
          </div>
          <div className="flex gap-4">
            <button className="border-2 border-green-500 text-green-400 px-4 py-2 rounded hover:bg-green-500/10 transition-colors font-bold text-sm">
              My Applications
            </button>
            <button className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors font-bold text-sm">
              Post Bounty
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="border border-green-900 bg-green-950/20 p-4 rounded">
            <div className="text-green-500 text-xs mb-1">Active Bounties</div>
            <div className="text-2xl font-bold text-green-400">24</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-4 rounded">
            <div className="text-green-500 text-xs mb-1">Total Value</div>
            <div className="text-2xl font-bold text-green-400">$18.2K</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-4 rounded">
            <div className="text-green-500 text-xs mb-1">Avg Payout</div>
            <div className="text-2xl font-bold text-green-400">$758</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-4 rounded">
            <div className="text-green-500 text-xs mb-1">Completion Rate</div>
            <div className="text-2xl font-bold text-green-400">94%</div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-green-500" />
            <input
              type="text"
              placeholder="Search bounties or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-green-950/20 border border-green-900 rounded px-10 py-3 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded border-2 transition-all whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-green-500 text-black border-green-500'
                    : 'bg-green-950/20 text-green-400 border-green-900 hover:border-green-500'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-bold text-sm">{cat.label}</span>
                <span className="text-xs opacity-70">({cat.count})</span>
              </button>
            );
          })}
        </div>

        {/* Bounty Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredBounties.map(bounty => (
            <div
              key={bounty.id}
              onClick={() => setSelectedBounty(bounty)}
              className="border border-green-900 bg-green-950/10 rounded-lg p-6 hover:border-green-500 transition-all cursor-pointer group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(bounty.status)}`}>
                      {bounty.status.replace('_', ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(bounty.difficulty)}`}>
                      {bounty.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors mb-2">
                    {bounty.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-500">${bounty.amount}</div>
                  <div className="text-xs text-green-400/60">USDC</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-green-400/80 mb-4 line-clamp-2">
                {bounty.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {bounty.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4 border-t border-green-900">
                <div className="flex items-center gap-4 text-sm text-green-400/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{bounty.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{bounty.applicants} applied</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-green-500 font-bold text-sm hover:text-green-400 transition-colors">
                  Apply <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBounties.length === 0 && (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-green-400/40 mx-auto mb-4" />
            <div className="text-xl text-green-400/60 mb-2">No bounties found</div>
            <div className="text-sm text-green-400/40">Try adjusting your search or filters</div>
          </div>
        )}
      </div>

      {/* Bounty Detail Modal */}
      {selectedBounty && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedBounty(null)}>
          <div className="bg-black border-2 border-green-500 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(selectedBounty.status)}`}>
                      {selectedBounty.status.replace('_', ' ')}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(selectedBounty.difficulty)}`}>
                      {selectedBounty.difficulty}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-green-400 mb-2">{selectedBounty.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-green-400/60">
                    <span>Posted by {selectedBounty.client.name}</span>
                    {selectedBounty.client.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                  </div>
                </div>
                <button onClick={() => setSelectedBounty(null)} className="text-green-400 hover:text-green-300">
                  ✕
                </button>
              </div>

              {/* Payment Info */}
              <div className="border border-green-900 bg-green-950/20 rounded p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-3xl font-bold text-green-500">${selectedBounty.amount} USDC</div>
                    <div className="text-sm text-green-400/60">Your take: ${Math.floor(selectedBounty.amount * 0.85)} (85%)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-green-400/60 mb-1">Deadline</div>
                    <div className="font-bold text-green-400">{selectedBounty.deadline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-green-400/60">
                  <AlertCircle className="w-4 h-4" />
                  <span>Escrow secured • Payment releases on approval</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-green-500 font-bold mb-3 text-sm">DESCRIPTION</h3>
                <p className="text-green-400/80 text-sm leading-relaxed">{selectedBounty.description}</p>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-green-500 font-bold mb-3 text-sm">REQUIREMENTS</h3>
                <ul className="space-y-2">
                  {selectedBounty.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-400/80">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-green-500 font-bold mb-3 text-sm">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedBounty.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded border border-green-900">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applicant Info */}
              <div className="border-t border-green-900 pt-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-green-400/60">
                  <Star className="w-4 h-4" />
                  <span>{selectedBounty.applicants} providers have applied</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="flex-1 bg-green-500 text-black px-6 py-4 rounded font-bold hover:bg-green-400 transition-colors">
                  Apply for Bounty
                </button>
                <button className="border-2 border-green-500 text-green-400 px-6 py-4 rounded font-bold hover:bg-green-500/10 transition-colors">
                  Ask Question
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="border-t border-green-900 bg-green-950/10 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
            Got Skills? Start Earning Today
          </h2>
          <p className="text-green-400/80 mb-8 max-w-2xl mx-auto">
            Join verified providers earning $1.5K-$3K/month on TrustDesk bounties. Quick turnarounds, transparent payments, on-chain escrow.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-500 text-black px-8 py-4 rounded font-bold hover:bg-green-400 transition-colors">
              Become a Provider
            </button>
            <button className="border-2 border-green-500 text-green-400 px-8 py-4 rounded font-bold hover:bg-green-500/10 transition-colors">
              Post Your Bounty
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
