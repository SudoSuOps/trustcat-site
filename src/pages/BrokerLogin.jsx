import React, { useState } from 'react';
import { Terminal, Lock, Mail, Key, Shield, CheckCircle } from 'lucide-react';

export default function BrokerLogin() {
  const [mode, setMode] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    company: '',
    wallet: ''
  });
  const [loading, setLoading] = useState(false);
  const [bootSequence, setBootSequence] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setBootSequence(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setLoading(false);
    }, 1500);
  };

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Registration:', formData);
      setLoading(false);
    }, 1500);
  };

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="mb-8 text-center">
            <div className="text-6xl mb-4 font-mono text-green-500">🔐</div>
          </div>
          <div className="font-mono text-green-500 space-y-2">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; initializing_broker_portal</span>
              <span className="ml-1 animate-pulse">_</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; loading_authentication_layer</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <span>&gt; gatekeeper_active</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
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

      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-sm hover:text-cyan-400 transition"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-4xl font-bold mb-2">BROKER PORTAL</h1>
            <p className="text-cyan-400 mb-4">Access the CAM Network Terminal</p>
            <div className="flex items-center justify-center space-x-2 text-sm opacity-70">
              <Lock className="w-4 h-4" />
              <span>Gatekeeper protocol active</span>
            </div>
          </div>

          <div className="flex mb-6 border-2 border-green-500/30">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-3 font-bold transition ${
                mode === 'login'
                  ? 'bg-green-500 text-black'
                  : 'bg-transparent hover:bg-green-500/10'
              }`}
            >
              LOGIN
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-3 font-bold transition ${
                mode === 'register'
                  ? 'bg-green-500 text-black'
                  : 'bg-transparent hover:bg-green-500/10'
              }`}
            >
              REGISTER
            </button>
          </div>

          {mode === 'login' && (
            <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    BROKER EMAIL
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="broker@trustcat.ai"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400 flex items-center">
                    <Key className="w-4 h-4 mr-2" />
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-4 bg-green-500 text-black font-bold hover:bg-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'AUTHENTICATING...' : 'ACCESS TERMINAL'}
                </button>

                <div className="text-center text-sm">
                  <a href="#" className="text-cyan-400 hover:text-cyan-300">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          )}

          {mode === 'register' && (
            <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="broker@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    COMPANY / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    WALLET ADDRESS (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.wallet}
                    onChange={(e) => handleChange('wallet', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 font-mono text-sm"
                    placeholder="0x..."
                  />
                  <div className="text-xs opacity-70 mt-1">For USDC commission payouts</div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    PASSWORD *
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  onClick={handleRegister}
                  disabled={loading}
                  className="w-full py-4 bg-green-500 text-black font-bold hover:bg-green-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'PROCESSING...' : 'REQUEST ACCESS'}
                </button>

                <div className="border-t border-green-500/30 pt-6">
                  <div className="text-xs space-y-2 opacity-80">
                    <div className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Applications reviewed within 24 hours</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Background check and interview required</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>CAM network access granted upon approval</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-sm opacity-70">
            <div className="mb-4">
              <div className="text-cyan-400 font-bold mb-2">Broker Terminal Access Includes:</div>
              <div className="space-y-1">
                <div>• Live pipeline & deal tracking</div>
                <div>• Real-time compute availability</div>
                <div>• Commission dashboard (USDC payouts)</div>
                <div>• Provider matching tools</div>
                <div>• Deal room collaboration</div>
              </div>
            </div>
            <div className="border-t border-green-500/30 pt-4">
              <div>Questions? Contact <a href="mailto:terminal@trustcat.ai" className="text-cyan-400">terminal@trustcat.ai</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
