import React, { useState, useEffect } from 'react';
import { Activity, Zap, Shield, ChevronRight, Terminal, Database, Users, TrendingUp, Wallet, ExternalLink, CheckCircle, DollarSign, BarChart3, MessageSquare } from 'lucide-react';

export default function TrustCatHomepage() {
  const [bootComplete, setBootComplete] = useState(false);
  const [bootText, setBootText] = useState([]);
  const [stats, setStats] = useState({
    nodes: 12,
    uptime: 99.7,
    jobs: 847,
    providers: 8
  });
  const [activeSection, setActiveSection] = useState('compute');
  const [walletConnected, setWalletConnected] = useState(false);

  const bootSequence = [
    '> initializing C.A.T protocol...',
    '> loading OP Stack rollup...',
    '> USDC settlement layer: active',
    '> chainlink oracles: connected',
    '> CAT chain: operational',
    '> network status: online',
    '> trust_the_machine'
  ];

  const featuredProviders = [
    {
      id: 'CAT-FL-001',
      name: 'Miami Compute Labs',
      pfp: '🦾',
      bio: 'Healthcare AI specialist • MONAI certified',
      compute: '8x RTX 5090',
      location: 'Miami, FL',
      uptime: '99.9%',
      skills: ['MONAI', 'PyTorch', 'Medical Imaging'],
      available: true,
      pricePerHour: 2.80
    },
    {
      id: 'CAT-FL-002',
      name: 'TampaBay AI Infrastructure',
      pfp: '⚡',
      bio: 'LLM fine-tuning & distributed training',
      compute: '12x RTX 4090',
      location: 'Tampa, FL',
      uptime: '99.6%',
      skills: ['PyTorch', 'JAX', 'Multi-GPU'],
      available: true,
      pricePerHour: 2.40
    },
    {
      id: 'CAT-FL-003',
      name: 'Orlando Research Cluster',
      pfp: '🔬',
      bio: 'Academic ML workloads • HPC specialist',
      compute: '6x RTX 5090',
      location: 'Orlando, FL',
      uptime: '99.8%',
      skills: ['Research Computing', 'Simulation', 'HPC'],
      available: false,
      pricePerHour: 2.60
    }
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setBootText(prev => [...prev, bootSequence[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBootComplete(true), 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!bootComplete) return;
    
    const statsInterval = setInterval(() => {
      setStats(prev => ({
        nodes: prev.nodes + Math.floor(Math.random() * 2),
        uptime: Math.min(99.9, prev.uptime + Math.random() * 0.1),
        jobs: prev.jobs + Math.floor(Math.random() * 5),
        providers: prev.providers
      }));
    }, 3000);

    return () => clearInterval(statsInterval);
  }, [bootComplete]);

  if (!bootComplete) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <div className="text-6xl mb-4 font-mono text-green-500">C·A·T</div>
          </div>
          <div className="font-mono text-green-500 space-y-2">
            {bootText.map((line, i) => (
              <div key={i} className="flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <span>{line}</span>
                {i === bootText.length - 1 && (
                  <span className="ml-1 animate-pulse">_</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Matrix rain background effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs animate-pulse"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s'
            }}
          >
            {Array.from({ length: 30 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#marketplace" className="hover:text-cyan-400 transition">Marketplace</a>
            <a href="#providers" className="hover:text-cyan-400 transition">Providers</a>
            <a href="#brokers" className="hover:text-cyan-400 transition">Brokers</a>
            <a href="#terminal" className="hover:text-cyan-400 transition">Terminal</a>
            <a href="#whitepaper" className="hover:text-cyan-400 transition">Whitepaper</a>
          </nav>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setWalletConnected(!walletConnected)}
              className={`px-4 py-2 border-2 font-bold transition flex items-center ${
                walletConnected 
                  ? 'border-green-500 text-green-500 hover:bg-green-500/10' 
                  : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {walletConnected ? '0x7a...f3d2' : 'Connect'}
            </button>
            <button className="px-4 py-2 bg-green-500 text-black font-bold hover:bg-green-400 transition">
              Launch App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 space-y-2">
              <div className="text-sm opacity-70">&gt; initializing C.A.T protocol_</div>
              <div className="text-cyan-400 text-lg font-bold tracking-wider">
                COMPUTE · ADOPTION · TRUST
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              The Gold Standard of Verified Compute
            </h1>
            
            <p className="text-xl mb-6 text-green-400/80">
              OP Stack rollup. USDC-native settlement. Chainlink-verified infrastructure. 
              Independent micro-datacenters. 100% transparent revenue model.
            </p>

            <div className="border border-cyan-400/30 bg-cyan-400/5 p-4 mb-8">
              <div className="flex items-start space-x-3">
                <DollarSign className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-cyan-400 font-bold mb-1">USDC-Native Payments</div>
                  <div className="opacity-80">Circle CCTP bridging • EIP-4337 gasless transactions • Ethereum settlement</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition flex items-center">
                Browse Marketplace <ChevronRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 border-2 border-green-500 hover:bg-green-500/10 transition flex items-center">
                Become Provider <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="text-sm space-y-1 opacity-70">
              <div>&gt; Florida pilot: 8 providers live</div>
              <div>&gt; Healthcare AI: 400 GPU deployment active</div>
              <div>&gt; CAT Chain testnet: Q2 2025</div>
            </div>
          </div>

          {/* Live Stats Dashboard */}
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 rounded">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                LIVE NETWORK STATUS
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs">operational</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-green-500/30 p-4 bg-black/50">
                <div className="text-sm opacity-70 mb-1">active_nodes</div>
                <div className="text-3xl font-bold text-cyan-400">{stats.nodes}</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-black/50">
                <div className="text-sm opacity-70 mb-1">uptime_avg</div>
                <div className="text-3xl font-bold text-cyan-400">{stats.uptime.toFixed(1)}%</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-black/50">
                <div className="text-sm opacity-70 mb-1">jobs_24h</div>
                <div className="text-3xl font-bold text-cyan-400">{stats.jobs}</div>
              </div>
              <div className="border border-green-500/30 p-4 bg-black/50">
                <div className="text-sm opacity-70 mb-1">providers</div>
                <div className="text-3xl font-bold text-cyan-400">{stats.providers}</div>
              </div>
            </div>

            <div className="mt-4 p-3 border border-yellow-500/30 bg-yellow-500/5">
              <div className="text-xs text-yellow-400 flex items-center">
                <TrendingUp className="w-3 h-3 mr-2" />
                Healthcare AI partner deployed // 400 GPU workload active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Marketplace Preview */}
      <section id="marketplace" className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">VERIFIED PROVIDERS</h2>
            <p className="text-green-400/70">Browse certified compute infrastructure</p>
          </div>
          <button className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition flex items-center">
            View All Providers <ExternalLink className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProviders.map((provider) => (
            <div key={provider.id} className="border-2 border-green-500/30 bg-green-500/5 p-6 hover:border-cyan-400/50 transition">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{provider.pfp}</div>
                  <div>
                    <div className="font-bold text-lg">{provider.name}</div>
                    <div className="text-xs text-cyan-400">{provider.id}</div>
                  </div>
                </div>
                {provider.available ? (
                  <div className="flex items-center space-x-1 text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>live</span>
                  </div>
                ) : (
                  <div className="text-xs opacity-50">busy</div>
                )}
              </div>

              <p className="text-sm mb-4 opacity-80">{provider.bio}</p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-70">compute:</span>
                  <span className="text-cyan-400 font-bold">{provider.compute}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-70">location:</span>
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-70">uptime:</span>
                  <span className="text-green-400">{provider.uptime}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-70">rate:</span>
                  <span className="text-cyan-400">${provider.pricePerHour}/GPU·hr</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {provider.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 border border-green-500/30 bg-green-500/10">
                    {skill}
                  </span>
                ))}
              </div>

              <button 
                className={`w-full py-2 font-bold transition ${
                  provider.available
                    ? 'bg-green-500 text-black hover:bg-green-400'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!provider.available}
              >
                {provider.available ? 'Book Compute' : 'Unavailable'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Deal Room Flow */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">THE DEAL ROOM</h2>
        <p className="text-xl text-center text-green-400/70 mb-16">Seamless path from discovery to deployment</p>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="border border-green-500/30 p-6 bg-green-500/5 relative">
            <div className="absolute -top-4 left-6 bg-black px-3 py-1 border border-cyan-400 text-cyan-400 font-bold">
              01
            </div>
            <MessageSquare className="w-10 h-10 text-cyan-400 mb-4 mt-4" />
            <h3 className="font-bold mb-2">POST REQUIREMENTS</h3>
            <p className="text-sm opacity-80">Client submits workload specs, budget, timeline</p>
          </div>

          <div className="border border-green-500/30 p-6 bg-green-500/5 relative">
            <div className="absolute -top-4 left-6 bg-black px-3 py-1 border border-cyan-400 text-cyan-400 font-bold">
              02
            </div>
            <Users className="w-10 h-10 text-cyan-400 mb-4 mt-4" />
            <h3 className="font-bold mb-2">BROKER MATCH</h3>
            <p className="text-sm opacity-80">Sales team connects client to verified providers</p>
          </div>

          <div className="border border-green-500/30 p-6 bg-green-500/5 relative">
            <div className="absolute -top-4 left-6 bg-black px-3 py-1 border border-cyan-400 text-cyan-400 font-bold">
              03
            </div>
            <Shield className="w-10 h-10 text-cyan-400 mb-4 mt-4" />
            <h3 className="font-bold mb-2">USDC ESCROW</h3>
            <p className="text-sm opacity-80">Smart contract holds payment until job completion</p>
          </div>

          <div className="border border-green-500/30 p-6 bg-green-500/5 relative">
            <div className="absolute -top-4 left-6 bg-black px-3 py-1 border border-cyan-400 text-cyan-400 font-bold">
              04
            </div>
            <CheckCircle className="w-10 h-10 text-cyan-400 mb-4 mt-4" />
            <h3 className="font-bold mb-2">VERIFIED PAYOUT</h3>
            <p className="text-sm opacity-80">Chainlink attestation triggers CAM split distribution</p>
          </div>
        </div>

        <div className="mt-12 border-2 border-cyan-400/30 bg-cyan-400/5 p-8">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Deal Room Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm font-bold text-cyan-400 mb-2">&gt; Real-time Collaboration</div>
              <ul className="text-sm space-y-1 opacity-80">
                <li>• Secure messaging between client, broker, provider</li>
                <li>• File sharing (specs, datasets, results)</li>
                <li>• SLA negotiation + smart contract generation</li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-bold text-cyan-400 mb-2">&gt; Transparent Monitoring</div>
              <ul className="text-sm space-y-1 opacity-80">
                <li>• Live job progress tracking</li>
                <li>• Chainlink attestation feed</li>
                <li>• Escrow status + payment breakdown</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Terminal Preview */}
      <section id="terminal" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">BROKER TERMINAL</h2>
          <p className="text-xl text-green-400/70">Real-time ops dashboard for sales team</p>
        </div>

        <div className="border-2 border-green-500 bg-black p-8 rounded">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-500" />
              <span className="font-bold text-lg">broker@trustcat:~$</span>
              <span className="animate-pulse">_</span>
            </div>
            <div className="text-sm opacity-70">session: broker_001</div>
          </div>

          <div className="space-y-1 text-sm mb-8">
            <div><span className="text-cyan-400">$</span> cat active_pipeline.json</div>
            <div className="pl-4">&gt; deals_in_progress: 12</div>
            <div className="pl-4">&gt; hot_leads: 3 ready_to_close</div>
            <div className="pl-4">&gt; pending_revenue: $247,000</div>
            <div className="pl-4">&gt; your_commission: $24,847 (est.)</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="border border-green-500/30 p-4 bg-green-500/5">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-bold">AVAILABLE COMPUTE</span>
              </div>
              <div className="text-2xl font-bold mb-1">847</div>
              <div className="text-xs opacity-70">GPU-hours ready</div>
            </div>

            <div className="border border-green-500/30 p-4 bg-green-500/5">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-bold">THIS MONTH</span>
              </div>
              <div className="text-2xl font-bold mb-1">$12,440</div>
              <div className="text-xs opacity-70">commissions earned</div>
            </div>

            <div className="border border-green-500/30 p-4 bg-green-500/5">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-bold">DEAL VELOCITY</span>
              </div>
              <div className="text-2xl font-bold mb-1">8 days</div>
              <div className="text-xs opacity-70">avg. close time</div>
            </div>
          </div>

          <div className="border-t border-green-500/30 pt-6">
            <div className="text-sm mb-4 text-cyan-400 font-bold">&gt; RECENT ACTIVITY</div>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between py-2 border-b border-green-500/20">
                <span>Healthcare AI Corp // 200 GPU deployment</span>
                <span className="text-yellow-400">pending_escrow</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-green-500/20">
                <span>Research Lab X // ML training pipeline</span>
                <span className="text-cyan-400">in_negotiation</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-green-500/20">
                <span>Enterprise AI Startup // LLM fine-tuning</span>
                <span className="text-green-400">job_active</span>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition">
            ACCESS FULL TERMINAL
          </button>
        </div>
      </section>

      {/* Interactive C.A.T Explainer */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">THE C.A.T SOLUTION</h2>
          <p className="text-xl text-green-400/70">Click each pillar to explore</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <button
            onClick={() => setActiveSection('compute')}
            className={`p-6 border-2 transition-all text-left ${
              activeSection === 'compute'
                ? 'border-cyan-400 bg-cyan-400/10'
                : 'border-green-500/30 hover:border-green-500'
            }`}
          >
            <Database className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold mb-2">COMPUTE</h3>
            <p className="text-sm opacity-70">Verified NVIDIA hardware</p>
          </button>

          <button
            onClick={() => setActiveSection('adoption')}
            className={`p-6 border-2 transition-all text-left ${
              activeSection === 'adoption'
                ? 'border-cyan-400 bg-cyan-400/10'
                : 'border-green-500/30 hover:border-green-500'
            }`}
          >
            <Users className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold mb-2">ADOPTION</h3>
            <p className="text-sm opacity-70">Decentralized sales model</p>
          </button>

          <button
            onClick={() => setActiveSection('trust')}
            className={`p-6 border-2 transition-all text-left ${
              activeSection === 'trust'
                ? 'border-cyan-400 bg-cyan-400/10'
                : 'border-green-500/30 hover:border-green-500'
            }`}
          >
            <Shield className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold mb-2">TRUST</h3>
            <p className="text-sm opacity-70">OP Stack + Chainlink</p>
          </button>
        </div>

        <div className="border-2 border-cyan-400/30 bg-cyan-400/5 p-8">
          {activeSection === 'compute' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">COMPUTE</h3>
              <p className="text-lg">
                Verified NVIDIA hardware operated by independent micro-datacenter owners. 
                Certified builds with minimum baselines. Owned infrastructure, not rented cloud.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">Hardware Standards</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; RTX 4090/5090 baseline</li>
                    <li>&gt; 10Gbps uplink minimum</li>
                    <li>&gt; 99.5% uptime SLA</li>
                    <li>&gt; Kubernetes-ready deployment</li>
                  </ul>
                </div>
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">NFT-Anchored Vaults</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; On-chain identity (CAT Chain)</li>
                    <li>&gt; Immutable certification</li>
                    <li>&gt; Automated revenue splits</li>
                    <li>&gt; Smart contract job assignment</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'adoption' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">ADOPTION</h3>
              <p className="text-lg">
                Decentralized Remax-style sales model. Brokers onboard real customers into verified capacity. 
                Transparent revenue splits through CAM fund. No token hype, real clients.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">CAM Fund Model</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; Provider: 70% revenue share</li>
                    <li>&gt; CAM Fund: 20% adoption desk</li>
                    <li>&gt; Protocol: 10% infrastructure</li>
                    <li>&gt; USDC payouts via Safe multisig</li>
                  </ul>
                </div>
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">Broker Terminal Access</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; Live project pipeline</li>
                    <li>&gt; Real-time compute availability</li>
                    <li>&gt; Commission tracking dashboard</li>
                    <li>&gt; Deal room collaboration tools</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'trust' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">TRUST</h3>
              <p className="text-lg">
                OP Stack rollup settling to Ethereum. USDC-native payments via Circle CCTP. 
                Chainlink-verified job completion. Immutable records on CAT Chain.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">Blockchain Stack</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; OP Stack app-rollup (CAT Chain)</li>
                    <li>&gt; Ethereum mainnet settlement</li>
                    <li>&gt; USDC via Circle CCTP</li>
                    <li>&gt; EIP-4337 gasless transactions</li>
                  </ul>
                </div>
                <div className="border border-green-500/30 p-4 bg-black/50">
                  <div className="text-sm text-cyan-400 font-bold mb-2">Verification Layer</div>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>&gt; Chainlink job completion oracles</li>
                    <li>&gt; EAS (Ethereum Attestation Service)</li>
                    <li>&gt; Immutable SLA records</li>
                    <li>&gt; Community auditor network</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-2 border-yellow-500/30 bg-yellow-500/5 p-8">
          <div className="text-sm text-yellow-400 mb-2">&gt; landed_account</div>
          <h3 className="text-2xl font-bold mb-4">Healthcare AI Partner — 400 GPU Workload Active</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-cyan-400 font-bold mb-1">&gt; pilot_status</div>
              <div className="opacity-80">Florida micro-DC network operational</div>
            </div>
            <div>
              <div className="text-cyan-400 font-bold mb-1">&gt; tech_stack</div>
              <div className="opacity-80">OP Stack + USDC + Chainlink</div>
            </div>
            <div>
              <div className="text-cyan-400 font-bold mb-1">&gt; expansion_timeline</div>
              <div className="opacity-80">Q2-Q4 2025 national rollout</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="border-2 border-green-500 bg-green-500/10 p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">READY TO JOIN THE NETWORK?</h2>
          <p className="text-xl mb-8 text-green-400/80">
            Whether you operate infrastructure, sell compute, or need verified workloads — there's a place for you in the C.A.T ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-green-500 text-black font-bold text-lg hover:bg-green-400 transition">
              Become a Provider
            </button>
            <button className="px-8 py-4 border-2 border-green-500 font-bold text-lg hover:bg-green-500/10 transition">
              Join as Broker
            </button>
            <button className="px-8 py-4 border-2 border-green-500 font-bold text-lg hover:bg-green-500/10 transition">
              Browse Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/30 bg-black/80 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:text-cyan-400">Whitepaper</a></li>
                <li><a href="#" className="hover:text-cyan-400">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400">Network Status</a></li>
                <li><a href="#" className="hover:text-cyan-400">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Started</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:text-cyan-400">Provider Application</a></li>
                <li><a href="#" className="hover:text-cyan-400">Broker Application</a></li>
                <li><a href="#" className="hover:text-cyan-400">Client Demo</a></li>
                <li><a href="#" className="hover:text-cyan-400">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:text-cyan-400">About</a></li>
                <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400">Careers</a></li>
                <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-70">
                <li><a href="#" className="hover:text-cyan-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400">Provider Agreement</a></li>
                <li><a href="#" className="hover:text-cyan-400">Broker Agreement</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-500/30 pt-8 text-center">
            <div className="mb-4 text-cyan-400 text-sm">
              &gt; TrustCat LLC © 2025
            </div>
            <div className="text-sm opacity-70">
              C.A.T: Compute · Adoption · Trust
            </div>
            <div className="mt-2 text-sm">
              &gt; trust_the_machine_
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
