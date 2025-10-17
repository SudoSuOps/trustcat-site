import React from 'react';
import { Terminal, MapPin, Activity, Zap, Shield, CheckCircle, Star, ExternalLink, Mail, Award, Database, Server } from 'lucide-react';

export default function SudoHashProfile() {
  const provider = {
    id: 'CAT-FL-000',
    name: 'SudoHash',
    pfp: '⚡',
    email: 'sudohash@trustcat.ai',
    walletAddress: '0x5ud0...Ha5h',
    tagline: 'Terminal-Grade Infrastructure • Founding Provider',
    bio: `SudoHash - Founding architect of TrustCat.ai and pioneer of verifiable compute infrastructure. Operating enterprise-grade GPU clusters with military-precision uptime standards. Specialized in high-stakes AI workloads: medical imaging (MONAI certified), LLM training pipelines, and mission-critical research computing.

Built on principles of radical transparency, cryptographic verification, and operator sovereignty. Every job tracked on-chain. Every SLA guaranteed. Zero compromise on trust.

Root access mentality. Terminal-grade execution. Trust the machine.`,
    
    location: 'West Palm Beach, FL',
    joined: 'Genesis (Jan 2025)',
    verified: true,
    featured: true,
    founder: true,
    
    compute: {
      'Primary Cluster': '16x RTX 5090 (384GB VRAM)',
      'Secondary Cluster': '12x RTX 4090 (288GB VRAM)',
      'Total VRAM': '672GB',
      'CPU': '4x AMD EPYC 9654 (768 cores)',
      'RAM': '2TB DDR5 ECC',
      'Storage': '240TB NVMe RAID 10',
      'Network': '100Gbps uplink (redundant)',
      'Cooling': 'Immersion liquid cooling',
      'Power': 'Dual 480V 3-phase + UPS backup',
      'Facility': 'Tier III micro-datacenter'
    },
    
    stats: {
      uptime: 99.97,
      jobsCompleted: 247,
      totalHours: 18420,
      avgResponseTime: '< 60 sec',
      rating: 5.0,
      reviews: 47
    },
    
    pricing: {
      hourly: 2.60,
      daily: 58.00,
      weekly: 380.00,
      monthly: 1500.00
    },
    
    specializations: [
      { name: 'MONAI Medical Imaging', verified: true, icon: '🏥' },
      { name: 'LLM Training Pipelines', verified: true, icon: '🤖' },
      { name: 'PyTorch Distributed', verified: true, icon: '🔥' },
      { name: 'JAX/Flax', verified: true, icon: '⚡' },
      { name: 'HIPAA Compliant', verified: true, icon: '🔒' },
      { name: 'Multi-GPU Orchestration', verified: true, icon: '🎯' },
      { name: 'On-Chain Verification', verified: true, icon: '⛓️' },
      { name: 'Research Computing', verified: true, icon: '🔬' }
    ],
    
    infrastructure: [
      '✓ Chainlink oracle integration',
      '✓ EAS attestation system',
      '✓ USDC-native settlement',
      '✓ Kubernetes cluster management',
      '✓ Real-time monitoring dashboard',
      '✓ Automated failover systems',
      '✓ IPFS metadata storage',
      '✓ On-chain job proofs'
    ],

    certifications: [
      { name: 'TrustCat Genesis Provider', date: 'Jan 2025', verified: true },
      { name: 'MONAI Deploy Certified', date: 'Dec 2024', verified: true },
      { name: 'HIPAA Technical Safeguards', date: 'Nov 2024', verified: true },
      { name: 'Chainlink Node Operator', date: 'Oct 2024', verified: true }
    ],

    recentJobs: [
      { id: 'JOB-001', client: 'Healthcare AI Corp', type: 'MONAI Imaging Pipeline', hours: 400, status: 'completed', rating: 5 },
      { id: 'JOB-027', client: 'Research Institute', type: 'LLM Fine-tuning (70B)', hours: 320, status: 'completed', rating: 5 },
      { id: 'JOB-089', client: 'BioTech Pharma', type: 'Drug Discovery Sim', hours: 280, status: 'completed', rating: 5 }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
          </div>
          <button onClick={() => window.location.href = '/'} className="px-4 py-2 border-2 border-green-500 hover:bg-green-500/10 transition">
            ← Back to Marketplace
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-start space-x-6 mb-6">
              <div className="text-8xl">{provider.pfp}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-4xl font-bold">{provider.name}</h1>
                  {provider.verified && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-green-500/20 border border-green-500 text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>VERIFIED</span>
                    </div>
                  )}
                  {provider.founder && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-cyan-400/20 border border-cyan-400 text-cyan-400 text-xs">
                      <Star className="w-3 h-3" />
                      <span>FOUNDER</span>
                    </div>
                  )}
                </div>
                
                <div className="text-xl font-bold text-cyan-400 mb-4">{provider.tagline}</div>

                <div className="flex items-center space-x-4 text-sm mb-4 opacity-70">
                  <div className="flex items-center space-x-1">
                    <span className="text-cyan-400">{provider.id}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="w-3 h-3" />
                    <a href={`mailto:${provider.email}`} className="text-cyan-400 hover:text-cyan-300">
                      {provider.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-yellow-400 font-bold">{provider.stats.rating}</span>
                  <span className="ml-2 opacity-70">({provider.stats.reviews} reviews)</span>
                </div>

                <p className="text-sm leading-relaxed opacity-90 whitespace-pre-line">{provider.bio}</p>
              </div>
            </div>

            <div className="border border-green-500/30 bg-green-500/5 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-400 mb-1">PROVIDER VAULT</div>
                  <div className="font-mono text-sm">{provider.walletAddress}</div>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="border border-green-500/30 p-4 bg-green-500/5">
                <div className="text-xs opacity-70 mb-1">UPTIME</div>
                <div className="text-2xl font-bold text-green-400">{provider.stats.uptime}%</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-green-500/5">
                <div className="text-xs opacity-70 mb-1">JOBS</div>
                <div className="text-2xl font-bold text-cyan-400">{provider.stats.jobsCompleted}</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-green-500/5">
                <div className="text-xs opacity-70 mb-1">HOURS</div>
                <div className="text-2xl font-bold text-cyan-400">{provider.stats.totalHours.toLocaleString()}</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-green-500/5">
                <div className="text-xs opacity-70 mb-1">RESPONSE</div>
                <div className="text-xl font-bold text-green-400">{provider.stats.avgResponseTime}</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm opacity-70">FOUNDING RATE</div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs">available now</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">
                ${provider.pricing.hourly}
                <span className="text-lg text-green-500">/GPU·hr</span>
              </div>
              <div className="text-xs space-y-1 opacity-70">
                <div>Daily: ${provider.pricing.daily}</div>
                <div>Weekly: ${provider.pricing.weekly}</div>
                <div>Monthly: ${provider.pricing.monthly}</div>
              </div>
            </div>

            <button className="w-full py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition mb-3">
              BOOK SUDOHASH
            </button>
            
            <button className="w-full py-3 border-2 border-green-500 hover:bg-green-500/10 transition flex items-center justify-center mb-4">
              <Mail className="w-4 h-4 mr-2" />
              CONTACT DIRECT
            </button>

            <div className="border-t border-green-500/30 pt-4">
              <div className="text-xs text-cyan-400 mb-2">FOUNDING PROVIDER</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="opacity-70">Genesis provider:</span>
                  <span className="text-green-400">CAT-FL-000</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Priority support:</span>
                  <span className="text-green-400">&lt; 60 sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">SLA guarantee:</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Server className="w-6 h-6 mr-2 text-cyan-400" />
              INFRASTRUCTURE SPECS
            </h2>
            <div className="border border-green-500/30 bg-green-500/5 p-6">
              <div className="space-y-3 text-sm">
                {Object.entries(provider.compute).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start py-2 border-b border-green-500/20 last:border-0">
                    <span className="opacity-70 font-bold">{key}:</span>
                    <span className="text-cyan-400 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-cyan-400" />
              INFRASTRUCTURE STACK
            </h2>
            <div className="border border-green-500/30 bg-green-500/5 p-6">
              <div className="space-y-2 text-sm">
                {provider.infrastructure.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 py-1">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-cyan-400" />
            SPECIALIZATIONS
          </h2>
          <div className="border border-green-500/30 bg-green-500/5 p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {provider.specializations.map((spec) => (
                <div
                  key={spec.name}
                  className="border border-cyan-400/30 bg-cyan-400/5 p-4 text-center"
                >
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <div className="text-xs font-bold mb-1">{spec.name}</div>
                  {spec.verified && (
                    <CheckCircle className="w-3 h-3 text-green-400 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="w-6 h-6 mr-2 text-cyan-400" />
            CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {provider.certifications.map((cert) => (
              <div key={cert.name} className="border border-green-500/30 bg-green-500/5 p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold mb-1">{cert.name}</div>
                  <div className="text-xs opacity-70">{cert.date}</div>
                </div>
                {cert.verified && (
                  <CheckCircle className="w-5 h-5 text-green-400" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Activity className="w-6 h-6 mr-2 text-cyan-400" />
            RECENT WORKLOADS
          </h2>
          <div className="border border-green-500/30 bg-green-500/5">
            <div className="p-4 border-b border-green-500/30 bg-green-500/10">
              <div className="grid grid-cols-5 text-xs font-bold opacity-70">
                <div>JOB ID</div>
                <div>CLIENT</div>
                <div>TYPE</div>
                <div>HOURS</div>
                <div className="text-right">RATING</div>
              </div>
            </div>
            {provider.recentJobs.map((job) => (
              <div key={job.id} className="p-4 border-b border-green-500/20 last:border-0 hover:bg-green-500/5 transition">
                <div className="grid grid-cols-5 text-sm items-center">
                  <div className="text-cyan-400 font-mono">{job.id}</div>
                  <div>{job.client}</div>
                  <div className="opacity-80">{job.type}</div>
                  <div className="text-cyan-400">{job.hours}h</div>
                  <div className="text-right">
                    <div className="inline-flex items-center space-x-1">
                      {[...Array(job.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-green-500/30 bg-green-500/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">GENESIS PROVIDER</h3>
          <p className="text-cyan-400 mb-4">Terminal-grade infrastructure. Root access mentality. Trust the machine.</p>
          <button className="px-8 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition">
            BOOK SUDOHASH NOW
          </button>
        </div>
      </div>
    </div>
  );
}
