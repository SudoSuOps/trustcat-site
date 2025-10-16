import React, { useState } from 'react';
import { Terminal, MapPin, Activity, Zap, Shield, CheckCircle, Star, ExternalLink, Calendar, DollarSign, Clock, TrendingUp, Award, MessageSquare } from 'lucide-react';

export default function ProviderProfile() {
  const [selectedMonth, setSelectedMonth] = useState('current');

  const provider = {
    id: 'CAT-FL-001',
    name: 'Miami Compute Labs',
    pfp: '🦾',
    walletAddress: '0x7a8f...f3d2',
    bio: 'Healthcare AI infrastructure specialist with 5+ years operating high-performance compute clusters. MONAI certified, HIPAA compliant facility. Focused on medical imaging workloads and drug discovery simulations.',
    location: 'Miami, FL',
    joined: 'Jan 2025',
    verified: true,
    featured: true,
    
    compute: {
      gpus: '8x RTX 5090',
      vram: '192GB total',
      cpu: '2x AMD EPYC 9654',
      ram: '512GB DDR5',
      storage: '40TB NVMe RAID',
      network: '25Gbps uplink',
      cooling: 'Liquid-cooled immersion'
    },
    
    stats: {
      uptime: 99.9,
      jobsCompleted: 127,
      totalHours: 8420,
      avgResponseTime: '< 2 min',
      rating: 4.9,
      reviews: 23
    },
    
    pricing: {
      hourly: 2.80,
      daily: 62.40,
      weekly: 420.00,
      monthly: 1650.00
    },
    
    skills: [
      { name: 'MONAI', level: 'expert', verified: true },
      { name: 'PyTorch', level: 'expert', verified: true },
      { name: 'Medical Imaging', level: 'expert', verified: true },
      { name: 'JAX', level: 'advanced', verified: false },
      { name: 'Multi-GPU Training', level: 'expert', verified: true },
      { name: 'HIPAA Compliance', level: 'expert', verified: true },
      { name: 'Drug Discovery', level: 'advanced', verified: false },
      { name: 'HPC Simulation', level: 'advanced', verified: false }
    ],
    
    availability: [
      { day: 'Mon', slots: 18, available: 12 },
      { day: 'Tue', slots: 18, available: 8 },
      { day: 'Wed', slots: 18, available: 15 },
      { day: 'Thu', slots: 18, available: 6 },
      { day: 'Fri', slots: 18, available: 11 },
      { day: 'Sat', slots: 18, available: 18 },
      { day: 'Sun', slots: 18, available: 18 }
    ],
    
    recentJobs: [
      { id: 'JOB-847', client: 'Healthcare AI Corp', type: 'Medical Imaging Pipeline', hours: 240, status: 'completed', rating: 5 },
      { id: 'JOB-823', client: 'Research Lab X', type: 'Drug Discovery Sim', hours: 120, status: 'completed', rating: 5 },
      { id: 'JOB-801', client: 'BioTech Startup', type: 'LLM Fine-tuning', hours: 80, status: 'completed', rating: 4 }
    ],
    
    certifications: [
      { name: 'MONAI Certified Practitioner', date: 'Dec 2024', verified: true },
      { name: 'HIPAA Technical Safeguards', date: 'Nov 2024', verified: true },
      { name: 'TrustCat Hardware Audit', date: 'Jan 2025', verified: true }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
          </div>
          <button className="px-4 py-2 border-2 border-green-500 hover:bg-green-500/10 transition">
            ← Back to Marketplace
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Provider Header */}
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
                  {provider.featured && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-cyan-400/20 border border-cyan-400 text-cyan-400 text-xs">
                      <Star className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm mb-4 opacity-70">
                  <div className="flex items-center space-x-1">
                    <span className="text-cyan-400">{provider.id}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>Joined {provider.joined}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(provider.stats.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-400 font-bold">{provider.stats.rating}</span>
                  <span className="opacity-70">({provider.stats.reviews} reviews)</span>
                </div>

                <p className="text-sm leading-relaxed opacity-90">{provider.bio}</p>
              </div>
            </div>

            {/* Wallet Address */}
            <div className="border border-green-500/30 bg-green-500/5 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-400 mb-1">PROVIDER WALLET</div>
                  <div className="font-mono text-sm">{provider.walletAddress}</div>
                </div>
                <button className="text-cyan-400 hover:text-cyan-300">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stats Grid */}
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
                <div className="text-xs opacity-70 mb-1">TOTAL HOURS</div>
                <div className="text-2xl font-bold text-cyan-400">{provider.stats.totalHours.toLocaleString()}</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-green-500/5">
                <div className="text-xs opacity-70 mb-1">RESPONSE</div>
                <div className="text-xl font-bold text-green-400">{provider.stats.avgResponseTime}</div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm opacity-70">STARTING AT</div>
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
              BOOK COMPUTE
            </button>
            
            <button className="w-full py-3 border-2 border-green-500 hover:bg-green-500/10 transition flex items-center justify-center mb-4">
              <MessageSquare className="w-4 h-4 mr-2" />
              CONTACT PROVIDER
            </button>

            <div className="border-t border-green-500/30 pt-4">
              <div className="text-xs text-cyan-400 mb-2">QUICK STATS</div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="opacity-70">Avg. booking:</span>
                  <span>120 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Repeat clients:</span>
                  <span>78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">Next available:</span>
                  <span className="text-green-400">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-green-500/30 pt-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Compute Specifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-cyan-400" />
                COMPUTE SPECIFICATIONS
              </h2>
              <div className="border border-green-500/30 bg-green-500/5 p-6">
                <div className="space-y-3 text-sm">
                  {Object.entries(provider.compute).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-green-500/20 last:border-0">
                      <span className="opacity-70 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="font-bold text-cyan-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2 text-cyan-400" />
                SKILLS & CERTIFICATIONS
              </h2>
              <div className="border border-green-500/30 bg-green-500/5 p-6 mb-4">
                <div className="flex flex-wrap gap-2">
                  {provider.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1 text-xs border ${
                        skill.verified
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                          : 'border-green-500/30 bg-green-500/5'
                      }`}
                    >
                      {skill.name}
                      {skill.verified && <span className="ml-1">✓</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-green-500/30 bg-green-500/5 p-4">
                <div className="text-xs text-cyan-400 font-bold mb-3">CERTIFICATIONS</div>
                <div className="space-y-2 text-xs">
                  {provider.certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start justify-between py-2 border-b border-green-500/20 last:border-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span>{cert.name}</span>
                          {cert.verified && (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          )}
                        </div>
                        <div className="opacity-70">{cert.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Availability Calendar */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
              THIS WEEK'S AVAILABILITY
            </h2>
            <div className="border border-green-500/30 bg-green-500/5 p-6">
              <div className="grid grid-cols-7 gap-4">
                {provider.availability.map((day) => (
                  <div key={day.day} className="text-center">
                    <div className="text-xs opacity-70 mb-2">{day.day}</div>
                    <div className="border border-green-500/30 p-3 bg-black/50">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">
                        {day.available}
                      </div>
                      <div className="text-xs opacity-70">/ {day.slots} hrs</div>
                    </div>
                    <div className="mt-2 h-1 bg-green-500/20 rounded overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${(day.available / day.slots) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Jobs */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-cyan-400" />
              RECENT JOBS
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
      </div>

      {/* Footer CTA */}
      <div className="border-t border-green-500/30 bg-green-500/5 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">READY TO DEPLOY?</h3>
          <p className="mb-6 opacity-80">Book verified compute from {provider.name} today</p>
          <button className="px-8 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition">
            BOOK COMPUTE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
