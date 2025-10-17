import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Heart, Users, TrendingUp, Gift, Code, Rocket, CheckCircle, Clock, Award, DollarSign } from 'lucide-react';

export default function GrantsLanding() {
  const [bootSequence, setBootSequence] = useState(true);
  const [stats, setStats] = useState({
    grantsFunded: 8,
    gpuHours: 14520,
    projectsLaunched: 5,
    donationPool: 12400
  });

  useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const currentCohort = [
    { 
      name: 'MedScan AI', 
      team: '2 students', 
      focus: 'Healthcare AI', 
      status: 'active',
      progress: 75,
      description: 'Training MONAI models for early cancer detection'
    },
    { 
      name: 'SecureEdge', 
      team: '1 researcher', 
      focus: 'Cybersecurity', 
      status: 'active',
      progress: 60,
      description: 'ML-powered threat detection for IoT devices'
    },
    { 
      name: 'EduLearn', 
      team: '3 devs', 
      focus: 'Education', 
      status: 'completed',
      progress: 100,
      description: 'Personalized learning assistant for underserved schools'
    }
  ];

  const focusAreas = [
    { icon: '🤖', name: 'AI/ML', desc: 'Neural networks, LLMs, computer vision' },
    { icon: '🔒', name: 'Cybersecurity', desc: 'Threat detection, anomaly analysis' },
    { icon: '🏥', name: 'Healthcare', desc: 'Medical imaging, drug discovery' },
    { icon: '📚', name: 'Education', desc: 'Learning tools, accessibility' },
    { icon: '🌍', name: 'Public Good', desc: 'Climate, humanitarian, open data' },
    { icon: '⚡', name: 'Edge Compute', desc: 'IoT, distributed systems' }
  ];

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <div className="text-6xl mb-4">🎁</div>
          </div>
          <div className="font-mono text-green-500 space-y-2">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; initializing_compute_grant_program</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; loading_community_fund</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; empowering_builders</span>
              <span className="ml-1 animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
            <span className="text-sm opacity-70 ml-4">/ Grants</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/grants/dashboard" className="text-sm hover:text-cyan-400 transition">
              Dashboard
            </a>
            <button 
              onClick={() => window.location.href = '/'}
              className="text-sm hover:text-cyan-400 transition"
            >
              ← Home
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🎁</div>
          <div className="mb-4 space-y-1 text-sm opacity-70">
            <div>&gt; trustcat_compute_grant_program</div>
            <div>&gt; paying_it_forward</div>
          </div>
          <h1 className="text-6xl font-bold mb-6">BUILD WITHOUT LIMITS</h1>
          <p className="text-2xl text-cyan-400 mb-4">Free compute for builders who deserve a shot</p>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            30 days of RTX 5090-class compute. No costs. No tokens. No BS. 
            Just real hardware for real projects. If you're building something meaningful, we want to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/grants/apply'}
              className="px-8 py-4 bg-green-500 text-black font-bold text-lg hover:bg-green-400 transition flex items-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              APPLY NOW
            </button>
            <button 
              onClick={() => window.location.href = '/grants/dashboard'}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition flex items-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              VIEW DASHBOARD
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Gift className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.grantsFunded}</div>
            <div className="text-sm opacity-70">Grants Funded</div>
          </div>
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.gpuHours.toLocaleString()}</div>
            <div className="text-sm opacity-70">GPU Hours Donated</div>
          </div>
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.projectsLaunched}</div>
            <div className="text-sm opacity-70">Projects Launched</div>
          </div>
          <div className="border-2 border-green-500/30 bg-green-500/5 p-6 text-center">
            <DollarSign className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400 mb-1">${stats.donationPool.toLocaleString()}</div>
            <div className="text-sm opacity-70">Community Pool</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-l-4 border-cyan-400 pl-6 py-4 bg-cyan-400/5 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">THE MISSION</h2>
          <p className="text-lg leading-relaxed">
            Too many talented builders never get their shot because compute is expensive and opportunities are gatekept. 
            We're changing that. TrustCat gives early-stage devs, students, and indie researchers free access to 
            enterprise-grade GPUs — the same hardware running million-dollar workloads. 
            <span className="text-cyan-400 font-bold"> No costs. No equity. No strings.</span> Just build something real, 
            share what you learn, and pay it forward when you make it.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">WHAT YOU GET</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">RTX 5090 Compute</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>1x GPU node (24GB VRAM)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>30 days access (extendable to 90)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>PyTorch, JAX, MONAI pre-installed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>100Gbps network uplink</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Kubernetes cluster access</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Mentorship & Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Private Discord community</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mentor Fridays with AI engineers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Technical troubleshooting support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Architecture review sessions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Intro to potential partners</span>
              </li>
            </ul>
          </div>

          <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Showcase & Growth</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Public project page on trustcat.ai</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Quarterly demo day presentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Featured on X and community channels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Invitation to become TrustCat provider</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Alumni network access</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">FOCUS AREAS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div key={area.name} className="border border-green-500/30 bg-green-500/5 p-6 text-center hover:border-cyan-400/50 transition">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold mb-2">{area.name}</h3>
              <p className="text-sm opacity-80">{area.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-sm opacity-70">
          Building something else? Apply anyway. We're flexible if the project is meaningful.
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="border-4 border-green-500 bg-green-500/10 p-12 text-center">
          <h2 className="text-5xl font-bold mb-6">READY TO BUILD?</h2>
          <p className="text-2xl mb-8 text-cyan-400">Applications open now • Next cohort starts Q2 2025</p>
          <button 
            onClick={() => window.location.href = '/grants/apply'}
            className="px-12 py-5 bg-green-500 text-black font-bold text-2xl hover:bg-green-400 transition inline-flex items-center"
          >
            <Rocket className="w-6 h-6 mr-3" />
            APPLY FOR A GRANT
          </button>
          <div className="mt-8 text-sm opacity-70">
            Questions? Email <a href="mailto:grants@trustcat.ai" className="text-cyan-400">grants@trustcat.ai</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-500/30 bg-black/80 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-4 text-cyan-400">&gt; TrustCat Compute Grant Program</div>
          <div className="text-sm opacity-70">Paying it forward. One GPU at a time.</div>
          <div className="mt-4 text-sm">&gt; trust_the_machine_</div>
        </div>
      </footer>
    </div>
  );
}
