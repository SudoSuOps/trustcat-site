import React, { useState } from 'react';
import { Terminal, Zap, Send, CheckCircle, Mail, Phone } from 'lucide-react';

export default function InquireComputeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workloadType: '',
    gpuCount: '',
    duration: '',
    budget: '',
    timeline: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.workloadType || !formData.gpuCount || !formData.duration || !formData.timeline) {
      alert('Please fill in all required fields (*)');
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center p-4">
        <div className="max-w-2xl w-full border-2 border-green-500 bg-green-500/5 p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">REQUEST RECEIVED</h1>
          <p className="text-xl mb-8 opacity-80">
            Our team will contact you within 24 hours to discuss your compute requirements.
          </p>
          <div className="space-y-2 text-sm mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">terminal@trustcat.ai</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400">561.532.7120</span>
            </div>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition"
          >
            RETURN TO HOMEPAGE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <div className="mb-4 space-y-1 text-sm opacity-70">
            <div>&gt; initializing_inquiry_system</div>
            <div>&gt; compute_request_protocol_active</div>
          </div>
          <h1 className="text-5xl font-bold mb-4">INQUIRE ABOUT COMPUTE</h1>
          <p className="text-xl text-cyan-400 mb-2">Fast. Simple. Verified.</p>
          <p className="text-green-400/70">
            Tell us what you need. We'll match you with verified providers within 24 hours.
          </p>
        </div>

        <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-cyan-400">
                  YOUR NAME *
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
                  placeholder="john@company.com"
                />
              </div>
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

            <div className="border-t border-green-500/30 pt-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">WORKLOAD REQUIREMENTS</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    WORKLOAD TYPE *
                  </label>
                  <select
                    value={formData.workloadType}
                    onChange={(e) => handleChange('workloadType', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">Select type...</option>
                    <option value="medical-imaging">Medical Imaging</option>
                    <option value="llm-training">LLM Training</option>
                    <option value="llm-finetuning">LLM Fine-tuning</option>
                    <option value="drug-discovery">Drug Discovery</option>
                    <option value="research-ml">Research ML</option>
                    <option value="computer-vision">Computer Vision</option>
                    <option value="simulation">Simulation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    GPU COUNT *
                  </label>
                  <select
                    value={formData.gpuCount}
                    onChange={(e) => handleChange('gpuCount', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">Select count...</option>
                    <option value="1-4">1-4 GPUs</option>
                    <option value="5-10">5-10 GPUs</option>
                    <option value="11-50">11-50 GPUs</option>
                    <option value="51-100">51-100 GPUs</option>
                    <option value="100+">100+ GPUs</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    DURATION *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => handleChange('duration', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">Select duration...</option>
                    <option value="hours">Hours (1-24h)</option>
                    <option value="days">Days (1-7d)</option>
                    <option value="weeks">Weeks (1-4w)</option>
                    <option value="months">Months (1-12m)</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    BUDGET RANGE
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">Select range...</option>
                    <option value="<5k">&lt; $5,000</option>
                    <option value="5k-20k">$5,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-cyan-400">
                  TIMELINE *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleChange('timeline', e.target.value)}
                  className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                >
                  <option value="">When do you need to start?</option>
                  <option value="asap">ASAP (within 24-48h)</option>
                  <option value="this-week">This week</option>
                  <option value="next-week">Next week</option>
                  <option value="this-month">This month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-cyan-400">
                  ADDITIONAL DETAILS
                </label>
                <textarea
                  value={formData.details}
                  onChange={(e) => handleChange('details', e.target.value)}
                  rows="4"
                  className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                  placeholder="Any specific requirements, compliance needs (HIPAA, etc.), or additional context..."
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm opacity-70">
              <div className="mb-1">* Required fields</div>
              <div>Response time: &lt; 24 hours</div>
            </div>
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-green-500 text-black font-bold hover:bg-green-400 transition flex items-center text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              SUBMIT INQUIRY
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-green-500/30 pt-8 text-center">
          <div className="text-sm text-cyan-400 font-bold mb-4">PREFER TO TALK DIRECTLY?</div>
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:terminal@trustcat.ai" className="text-cyan-400 hover:text-cyan-300">
                terminal@trustcat.ai
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="tel:5615327120" className="text-cyan-400 hover:text-cyan-300">
                561.532.7120
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
