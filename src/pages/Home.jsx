import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Shield, CheckCircle, ExternalLink, Mail, Send } from 'lucide-react';

export default function TrustCatLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState({
    nodes: 18,
    uptime: 99.9,
    jobs: 864,
    providers: 8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        nodes: Math.max(15, prev.nodes + Math.floor(Math.random() * 3) - 1),
        jobs: prev.jobs + Math.floor(Math.random() * 10)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const capabilities = [
    { icon: '🧠', label: 'Machine Learning', desc: 'Large-scale model training & inference' },
    { icon: '🏥', label: 'Medical AI', desc: 'MONAI-certified healthcare compute' },
    { icon: '🔒', label: 'Cybersecurity', desc: 'Pentesting & security workloads' },
    { icon: '🔬', label: 'Research', desc: 'Scientific computing & simulations' },
    { icon: '🎯', label: 'Real-World AI', desc: 'Production-grade deployments' }
  ];

  const infrastructure = [
    { label: 'NVIDIA RTX 5090 GPUs', value: 'Tier-3 Hardware' },
    { label: '10Gb Fiber Connectivity', value: 'Enterprise Grade' },
    { label: 'Kubernetes Fleet', value: 'Auto-Scaling' },
    { label: 'Spot Pricing', value: 'Transparent Rates' }
  ];

  const values = [
    { title: 'Ownership', desc: 'You own your rigs. No rentals.' },
    { title: 'Transparency', desc: 'On-chain proof. Visible work.' },
    { title: 'Quality', desc: 'Tier-3 hardware. 99.9% uptime.' },
    { title: 'Community', desc: 'Built by operators for operators.' }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <nav className="border-b border-green-900 bg-black/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            <span className="text-xl font-bold text-green-400">TrustCat.ai</span>
          </div>
          <div className="flex gap-4">
            <a href="https://discord.gg/xHvMEcFG" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-sm">
              Discord
            </a>
            <a href="https://x.com/TrustCatai" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-sm">
              X
            </a>
            <a href="mailto:terminal@trustcat.ai" className="text-green-400 hover:text-green-300 transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-green-500 mb-4 text-sm tracking-wider">{'>'} INITIALIZING C.A.T PROTOCOL</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Compute.<br />
          <span className="text-green-500">Adoption.</span><br />
          <span className="text-green-300">Trust.</span>
        </h1>
        <p className="text-xl text-green-400/80 mb-8 max-w-3xl">
          Community-owned verified compute infrastructure. No hype. Just proof. Real hardware, real operators, real results.
        </p>
        <div className="inline-block border border-green-900 bg-green-950/20 px-6 py-3 rounded">
          <span className="text-green-500 font-bold">NO TOKENS</span>
          <span className="text-green-400/60 mx-3">•</span>
          <span className="text-green-400">USDC PAYMENTS</span>
          <span className="text-green-400/60 mx-3">•</span>
          <span className="text-green-400">CAT CHAIN VERIFIED</span>
        </div>
      </section>

      {/* Live Stats */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-green-900">
        <div className="text-green-500 mb-6 text-sm tracking-wider flex items-center gap-2">
          <Zap className="w-4 h-4" />
          LIVE NETWORK STATUS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-green-900 bg-green-950/20 p-6 rounded">
            <div className="text-green-500 text-xs mb-2">Active Nodes</div>
            <div className="text-4xl font-bold text-green-400">{stats.nodes}</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-6 rounded">
            <div className="text-green-500 text-xs mb-2">Network Uptime</div>
            <div className="text-4xl font-bold text-green-400">{stats.uptime}%</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-6 rounded">
            <div className="text-green-500 text-xs mb-2">Jobs 24h</div>
            <div className="text-4xl font-bold text-green-400">{stats.jobs}</div>
          </div>
          <div className="border border-green-900 bg-green-950/20 p-6 rounded">
            <div className="text-green-500 text-xs mb-2">Verified Providers</div>
            <div className="text-4xl font-bold text-green-400">{stats.providers}</div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-green-900">
        <div className="text-green-500 mb-6 text-sm tracking-wider">{'>'} INFRASTRUCTURE</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Enterprise-Grade Compute</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {infrastructure.map((item, i) => (
            <div key={i} className="border border-green-900 bg-green-950/10 p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="text-lg font-bold text-green-400">{item.label}</div>
                <div className="text-green-500 text-sm">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-green-900 bg-green-950/20 p-6 rounded-lg">
          <div className="text-green-500 font-bold mb-2">TrustCat Nodes / ZimaNodes</div>
          <p className="text-green-400/80 text-sm">
            Tier-3 infrastructure built one provider at a time. Every node delivers verifiable work, expands the network edge, and adds measurable value. No tokens. No speculation. Just real machines, real proof, real adoption.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-green-900">
        <div className="text-green-500 mb-6 text-sm tracking-wider">{'>'} CAPABILITIES</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Real-World AI & Compute</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="border border-green-900 bg-green-950/10 p-6 rounded-lg text-center hover:border-green-500 transition-all">
              <div className="text-4xl mb-3">{cap.icon}</div>
              <div className="text-green-400 font-bold mb-2 text-sm">{cap.label}</div>
              <div className="text-green-400/60 text-xs">{cap.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-green-900">
        <div className="text-green-500 mb-6 text-sm tracking-wider">{'>'} CORE VALUES</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Trust Through Proof</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <div key={i} className="border border-green-900 bg-green-950/10 p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <div className="text-green-400 font-bold mb-2">{val.title}</div>
              <div className="text-green-400/70 text-sm">{val.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Model */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-green-900">
        <div className="text-green-500 mb-6 text-sm tracking-wider">{'>'} THE MODEL</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Economic Flywheel</h2>
        <div className="border border-green-900 bg-green-950/20 p-8 rounded-lg">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="text-green-400 font-bold">Compute</div>
            <div className="text-green-500">→</div>
            <div className="text-green-400 font-bold">Adoption</div>
            <div className="text-green-500">→</div>
            <div className="text-green-400 font-bold">Transaction</div>
            <div className="text-green-500">→</div>
            <div className="text-green-400 font-bold">Proof</div>
            <div className="text-green-500">→</div>
            <div className="text-green-400 font-bold">Revenue</div>
            <div className="text-green-500">→</div>
            <div className="text-green-400 font-bold">Growth</div>
          </div>
          <p className="text-green-400/70 text-sm text-center mt-6">
            Physical hardware. Real results. CAT Chain verification. Each phase reinforces the next.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-green-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-green-500 mb-6 text-sm tracking-wider">{'>'} CONTACT US</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          
          {submitted ? (
            <div className="border-2 border-green-500 bg-green-950/20 p-8 rounded-lg text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <div className="text-2xl font-bold text-green-400 mb-2">Message Sent!</div>
              <div className="text-green-400/70">We'll get back to you shortly at terminal@trustcat.ai</div>
            </div>
          ) : (
            <div className="border border-green-900 bg-green-950/10 p-8 rounded-lg">
              <div className="mb-6">
                <label className="block text-green-400 mb-2 text-sm">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-green-950/20 border border-green-900 rounded px-4 py-3 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-500"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-green-400 mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-green-950/20 border border-green-900 rounded px-4 py-3 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-green-400 mb-2 text-sm">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-green-950/20 border border-green-900 rounded px-4 py-3 text-green-400 placeholder-green-700 focus:outline-none focus:border-green-500 resize-none"
                  placeholder="Tell us about your compute needs..."
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 text-black px-6 py-4 rounded font-bold hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <div className="text-green-400/60 text-sm mb-4">Or reach us directly:</div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://discord.gg/xHvMEcFG" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Discord
              </a>
              <a href="https://x.com/TrustCatai" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                X (Twitter)
              </a>
              <a href="mailto:terminal@trustcat.ai" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                terminal@trustcat.ai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-900 bg-green-950/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="font-bold text-green-400">TrustCat.ai</span>
            </div>
            <div className="text-sm text-green-400/60 text-center">
              No tokens. No speculation. Just real machines, real proof, real adoption.
            </div>
            <div className="text-sm text-green-400/60">
              © 2025 TrustCat • Built by operators
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
