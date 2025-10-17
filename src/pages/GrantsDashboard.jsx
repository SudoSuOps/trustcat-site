import React, { useState, useEffect } from 'react';
import { Terminal, TrendingUp, DollarSign, Users, Clock, CheckCircle, ExternalLink, Activity, Shield, Award } from 'lucide-react';

export default function GrantsDashboard() {
  const [liveStats, setLiveStats] = useState({
    totalDonations: 12400,
    grantsActive: 3,
    grantsCompleted: 5,
    gpuHoursDonated: 14520,
    communityDonors: 23
  });

  const walletAddress = '0x1f9B9FF34cad5f0e2D7481177Dbc1aC3c98B7DFE';
  const baseScanUrl = `https://basescan.org/address/${walletAddress}`;

  const donations = [
    { date: '2025-10-15', amount: 2500, donor: 'Anonymous', txHash: '0x7a8f...3d2a', verified: true },
    { date: '2025-10-12', amount: 5000, donor: 'Provider CAT-FL-001', txHash: '0x9b2c...4e1b', verified: true },
    { date: '2025-10-08', amount: 1500, donor: 'Community Member', txHash: '0x4d5e...6f2c', verified: true },
    { date: '2025-10-05', amount: 3400, donor: 'Healthcare AI Partner', txHash: '0x1a2b...7c3d', verified: true }
  ];

  const activeGrants = [
    {
      project: 'MedScan AI',
      recipient: 'Sarah Chen',
      focusArea: 'Healthcare',
      startDate: '2025-09-15',
      daysRemaining: 12,
      gpuHoursUsed: 520,
      gpuHoursTotal: 720,
      status: 'active',
      milestones: ['Data preprocessing ✓', 'Model training (in progress)', 'Validation pending']
    },
    {
      project: 'SecureEdge',
      recipient: 'Mike Rodriguez',
      focusArea: 'Cybersecurity',
      startDate: '2025-09-20',
      daysRemaining: 17,
      gpuHoursUsed: 380,
      gpuHoursTotal: 720,
      status: 'active',
      milestones: ['Baseline model ✓', 'Dataset augmentation ✓', 'Deployment testing']
    },
    {
      project: 'EduLearn Assistant',
      recipient: 'Team EduTech',
      focusArea: 'Education',
      startDate: '2025-10-01',
      daysRemaining: 28,
      gpuHoursUsed: 120,
      gpuHoursTotal: 720,
      status: 'active',
      milestones: ['Architecture design ✓', 'Initial training', 'User testing']
    }
  ];

  const completedGrants = [
    {
      project: 'Climate Vision',
      recipient: 'Alex Thompson',
      focusArea: 'Public Good',
      completedDate: '2025-09-30',
      gpuHoursUsed: 680,
      outcome: 'Successfully trained satellite imagery classification model. Now deployed for wildfire detection.',
      showcase: 'https://github.com/climatevision/model',
      rating: 5
    },
    {
      project: 'Accessibility Voice',
      recipient: 'Jamie Liu',
      focusArea: 'Education',
      completedDate: '2025-09-25',
      gpuHoursUsed: 540,
      outcome: 'Built voice-to-text model for students with disabilities. Open-sourced with 10k+ downloads.',
      showcase: 'https://github.com/accessvoice/tts',
      rating: 5
    }
  ];

  const allocations = [
    { quarter: 'Q4 2024', totalDonated: 8200, grantsIssued: 3, gpuHours: 2160, utilized: 1980 },
    { quarter: 'Q3 2024', totalDonated: 6500, grantsIssued: 2, gpuHours: 1440, utilized: 1320 }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
            <span className="text-sm opacity-70 ml-4">/ Grants Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/grants" className="text-sm hover:text-cyan-400 transition">
              ← Grants Home
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">📊</div>
          <h1 className="text-5xl font-bold mb-4">TRANSPARENCY DASHBOARD</h1>
          <p className="text-xl text-cyan-400 mb-2">100% of donations → Compute for builders</p>
          <p className="opacity-80">Every USDC tracked. Every grant visible. Zero overhead. Full receipts.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-12">
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">
              ${liveStats.totalDonations.toLocaleString()}
            </div>
            <div className="text-xs opacity-70">Total Donated</div>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-yellow-400 mb-1">{liveStats.grantsActive}</div>
            <div className="text-xs opacity-70">Active Grants</div>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">{liveStats.grantsCompleted}</div>
            <div className="text-xs opacity-70">Completed</div>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-cyan-400 mb-1">
              {liveStats.gpuHoursDonated.toLocaleString()}
            </div>
            <div className="text-xs opacity-70">GPU Hours</div>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-cyan-400 mb-1">{liveStats.communityDonors}</div>
            <div className="text-xs opacity-70">Donors</div>
          </div>
        </div>

        <div className="border-2 border-cyan-400/30 bg-cyan-400/5 p-8 mb-12">
          <div className="flex items-start space-x-4">
            <Shield className="w-12 h-12 text-cyan-400 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">COMMUNITY DONATION WALLET</h2>
              <div className="mb-6">
                <div className="text-sm opacity-70 mb-2">USDC Address (Base Network)</div>
                <div className="font-mono text-lg mb-2 break-all">{walletAddress}</div>
                <a 
                  href={baseScanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                >
                  View on BaseScan <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h3 className="font-bold text-green-400 mb-2">How It Works:</h3>
                  <ul className="space-y-1 opacity-90">
                    <li>• Send USDC to wallet address above</li>
                    <li>• All transactions public on Base blockchain</li>
                    <li>• Chainlink proof-of-transfer posted here</li>
                    <li>• 100% goes to GPU compute grants</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-green-400 mb-2">Donate Options:</h3>
                  <ul className="space-y-1 opacity-90">
                    <li>• Any amount accepted (USDC on Base)</li>
                    <li>• Sponsor specific focus areas</li>
                    <li>• Public recognition on dashboard</li>
                    <li>• 100% tax-transparent reporting</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 border border-green-500/30 bg-green-500/5">
                <div className="text-sm font-bold text-green-400 mb-2">📝 HOW TO DONATE:</div>
                <ol className="text-sm space-y-1 opacity-90">
                  <li>1. Copy wallet address above</li>
                  <li>2. Send USDC on Base network from your wallet (Coinbase, MetaMask, etc.)</li>
                  <li>3. Your donation appears on BaseScan within seconds</li>
                  <li>4. We allocate funds to next grant cohort</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">RECENT DONATIONS</h2>
          <div className="border-2 border-green-500/30 bg-green-500/5">
            <div className="p-4 border-b border-green-500/30 bg-green-500/10">
              <div className="grid grid-cols-5 text-xs font-bold opacity-70">
                <div>DATE</div>
                <div>AMOUNT</div>
                <div>DONOR</div>
                <div>TX HASH</div>
                <div className="text-right">STATUS</div>
              </div>
            </div>
            {donations.map((donation, i) => (
              <div key={i} className="p-4 border-b border-green-500/20 last:border-0 hover:bg-green-500/5 transition">
                <div className="grid grid-cols-5 text-sm items-center">
                  <div className="opacity-70">{donation.date}</div>
                  <div className="text-cyan-400 font-bold">${donation.amount.toLocaleString()}</div>
                  <div>{donation.donor}</div>
                  <div className="font-mono text-xs">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                      {donation.txHash} <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <div className="text-right">
                    {donation.verified && (
                      <span className="inline-flex items-center text-xs text-green-400">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">ACTIVE GRANTS</h2>
          <div className="space-y-6">
            {activeGrants.map((grant) => (
              <div key={grant.project} className="border-2 border-green-500/30 bg-green-500/5 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{grant.project}</h3>
                    <div className="flex items-center space-x-4 text-sm mb-2">
                      <span className="text-cyan-400">{grant.recipient}</span>
                      <span className="opacity-70">•</span>
                      <span>{grant.focusArea}</span>
                      <span className="opacity-70">•</span>
                      <span>Started {grant.startDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-70 mb-1">Days Remaining</div>
                    <div className="text-3xl font-bold text-yellow-400">{grant.daysRemaining}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="opacity-70">GPU Hours Used:</span>
                    <span className="font-bold">{grant.gpuHoursUsed} / {grant.gpuHoursTotal}</span>
                  </div>
                  <div className="h-2 bg-green-500/20 rounded overflow-hidden">
                    <div 
                      className="h-full bg-green-500"
                      style={{ width: `${(grant.gpuHoursUsed / grant.gpuHoursTotal) * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-cyan-400 mb-2">Milestones:</div>
                  <div className="space-y-1 text-sm">
                    {grant.milestones.map((milestone, i) => (
                      <div key={i} className="opacity-80">• {milestone}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">COMPLETED GRANTS</h2>
          <div className="space-y-6">
            {completedGrants.map((grant) => (
              <div key={grant.project} className="border-2 border-green-500/30 bg-green-500/5 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold">{grant.project}</h3>
                      <div className="flex items-center">
                        {[...Array(grant.rating)].map((_, i) => (
                          <Award key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm mb-4">
                      <span className="text-cyan-400">{grant.recipient}</span>
                      <span className="opacity-70">•</span>
                      <span>{grant.focusArea}</span>
                      <span className="opacity-70">•</span>
                      <span>Completed {grant.completedDate}</span>
                      <span className="opacity-70">•</span>
                      <span className="text-green-400">{grant.gpuHoursUsed} GPU hours</span>
                    </div>
                    <p className="mb-3 opacity-90">{grant.outcome}</p>
                    <a 
                      href={grant.showcase} 
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center"
                    >
                      View Project <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">QUARTERLY ALLOCATIONS</h2>
          <div className="border-2 border-green-500/30 bg-green-500/5">
            <div className="p-4 border-b border-green-500/30 bg-green-500/10">
              <div className="grid grid-cols-5 text-xs font-bold opacity-70">
                <div>QUARTER</div>
                <div>DONATED</div>
                <div>GRANTS</div>
                <div>GPU HOURS</div>
                <div className="text-right">UTILIZATION</div>
              </div>
            </div>
            {allocations.map((alloc) => (
              <div key={alloc.quarter} className="p-4 border-b border-green-500/20 last:border-0">
                <div className="grid grid-cols-5 text-sm items-center">
                  <div className="font-bold">{alloc.quarter}</div>
                  <div className="text-cyan-400">${alloc.totalDonated.toLocaleString()}</div>
                  <div>{alloc.grantsIssued}</div>
                  <div>{alloc.gpuHours.toLocaleString()}</div>
                  <div className="text-right">
                    <span className="text-green-400 font-bold">
                      {Math.round((alloc.utilized / alloc.gpuHours) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-l-4 border-cyan-400 bg-cyan-400/5 pl-6 py-6">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">OUR TRANSPARENCY COMMITMENT</h2>
          <div className="space-y-3 text-sm leading-relaxed opacity-90">
            <p>
              <span className="font-bold">100% of donations fund compute.</span> Zero goes to overhead, admin, or salaries. 
              TrustCat covers infrastructure costs separately.
            </p>
            <p>
              <span className="font-bold">Every transaction is public.</span> Donation wallet, grant allocations, 
              and GPU usage tracked on Base blockchain with Chainlink verification.
            </p>
            <p>
              <span className="font-bold">Quarterly reports published.</span> Full breakdown of donations received, 
              grants issued, projects completed, and community impact.
            </p>
            <p>
              <span className="font-bold">Open to audit.</span> Community members can request detailed 
              financial records at any time. No secrets. No surprises.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-green-500/30 bg-black/80 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-4 text-cyan-400">&gt; TrustCat Compute Grant Program</div>
          <div className="text-sm opacity-70">Every dollar tracked. Every grant visible. Zero BS.</div>
          <div className="mt-4 text-sm">&gt; trust_the_machine_</div>
        </div>
      </footer>
    </div>
  );
}
