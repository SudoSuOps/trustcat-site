import React, { useState } from 'react';
import { Terminal, Rocket, Heart, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

export default function GrantsApply() {
  const [formData, setFormData] = useState({
    projectName: '',
    teamSize: '',
    email: '',
    twitter: '',
    github: '',
    focusArea: '',
    projectSummary: '',
    technicalGoals: '',
    impact: '',
    timeline: '',
    whyYou: '',
    gpuNeeds: '',
    priorExperience: '',
    showcase: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [charCounts, setCharCounts] = useState({
    projectSummary: 0,
    technicalGoals: 0,
    impact: 0,
    whyYou: 0
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (['projectSummary', 'technicalGoals', 'impact', 'whyYou'].includes(field)) {
      setCharCounts({ ...charCounts, [field]: value.length });
    }
  };

  const handleSubmit = () => {
    if (!formData.projectName || !formData.email || !formData.focusArea || !formData.projectSummary) {
      alert('Please fill in all required fields (*)');
      return;
    }
    console.log('Grant application submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono flex items-center justify-center p-4">
        <div className="max-w-2xl w-full border-2 border-green-500 bg-green-500/5 p-12 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">APPLICATION RECEIVED! 🚀</h1>
          <p className="text-xl mb-6 opacity-90">
            Your grant application is in review. Our community committee will evaluate it within 7 days.
          </p>
          <div className="border border-cyan-400/30 bg-cyan-400/5 p-6 mb-8">
            <h3 className="font-bold text-cyan-400 mb-3">WHAT HAPPENS NEXT:</h3>
            <div className="space-y-2 text-sm text-left">
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">1.</span>
                <span>Committee review (scoring: vision, technical fit, impact, execution)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">2.</span>
                <span>Decision notification via email within 7 days</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">3.</span>
                <span>If approved: onboarding call + compute access setup</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-cyan-400 mt-1">4.</span>
                <span>Start building within 48 hours of approval</span>
              </div>
            </div>
          </div>
          <p className="text-sm mb-8 opacity-70">
            Check <span className="text-cyan-400">{formData.email}</span> for updates. 
            Questions? Email grants@trustcat.ai
          </p>
          <button 
            onClick={() => window.location.href = '/grants'}
            className="px-8 py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition"
          >
            RETURN TO GRANTS PAGE
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
            <span className="text-sm opacity-70 ml-4">/ Grant Application</span>
          </div>
          <button 
            onClick={() => window.location.href = '/grants'}
            className="text-sm hover:text-cyan-400 transition"
          >
            ← Back to Grants
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🚀</div>
          <h1 className="text-5xl font-bold mb-4">GRANT APPLICATION</h1>
          <p className="text-xl text-cyan-400 mb-4">Tell us about your project</p>
          <p className="text-sm opacity-80 max-w-2xl mx-auto">
            Be genuine. Be clear. We're looking for builders with vision and hustle, not perfect resumes. 
            If you need compute and have something meaningful to build, we want to hear from you.
          </p>
        </div>

        <div className="border-l-4 border-cyan-400 bg-cyan-400/5 pl-6 py-4 mb-8">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-cyan-400 mb-2">Pro Tips:</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Be specific about what you're building and why it matters</li>
                <li>• Show us you've thought through the technical approach</li>
                <li>• Explain the impact if this works — who benefits?</li>
                <li>• Don't worry about sounding "professional" — authenticity &gt; polish</li>
                <li>• It's OK if you haven't built this before — that's what grants are for</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">PROJECT BASICS</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    PROJECT NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.projectName}
                    onChange={(e) => handleChange('projectName', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    placeholder="MedScan AI, SecureEdge, etc."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-cyan-400">
                      TEAM SIZE *
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleChange('teamSize', e.target.value)}
                      className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    >
                      <option value="">Select...</option>
                      <option value="1">Solo builder</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-cyan-400">
                      FOCUS AREA *
                    </label>
                    <select
                      value={formData.focusArea}
                      onChange={(e) => handleChange('focusArea', e.target.value)}
                      className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                    >
                      <option value="">Select...</option>
                      <option value="ai-ml">AI/ML</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="public-good">Public Good</option>
                      <option value="edge-compute">Edge Compute</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-cyan-400">
                      TWITTER/X (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.twitter}
                      onChange={(e) => handleChange('twitter', e.target.value)}
                      className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                      placeholder="@yourhandle"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-cyan-400">
                      GITHUB (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.github}
                      onChange={(e) => handleChange('github', e.target.value)}
                      className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                      placeholder="github.com/username"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-green-500/30 pt-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">PROJECT DETAILS</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    PROJECT SUMMARY * (200-500 characters)
                  </label>
                  <textarea
                    value={formData.projectSummary}
                    onChange={(e) => handleChange('projectSummary', e.target.value)}
                    rows="4"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="What are you building? Why does it matter? Keep it simple and direct."
                  />
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {charCounts.projectSummary} characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    TECHNICAL GOALS * (300-600 characters)
                  </label>
                  <textarea
                    value={formData.technicalGoals}
                    onChange={(e) => handleChange('technicalGoals', e.target.value)}
                    rows="5"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="What's the technical approach? What models/frameworks will you use? What are the key milestones for the 30-day grant period?"
                  />
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {charCounts.technicalGoals} characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    IMPACT * (200-400 characters)
                  </label>
                  <textarea
                    value={formData.impact}
                    onChange={(e) => handleChange('impact', e.target.value)}
                    rows="4"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="Who benefits if this succeeds? What changes? Be specific about the real-world impact."
                  />
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {charCounts.impact} characters
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    WHY YOU? * (200-400 characters)
                  </label>
                  <textarea
                    value={formData.whyYou}
                    onChange={(e) => handleChange('whyYou', e.target.value)}
                    rows="4"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="Why are you the right person/team to build this? What's your relevant experience or unique perspective?"
                  />
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {charCounts.whyYou} characters
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-green-500/30 pt-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">TECHNICAL REQUIREMENTS</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    GPU NEEDS
                  </label>
                  <select
                    value={formData.gpuNeeds}
                    onChange={(e) => handleChange('gpuNeeds', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">Select...</option>
                    <option value="1-gpu">1 GPU (standard grant)</option>
                    <option value="2-gpu">2 GPUs (needs justification)</option>
                    <option value="multi">Multiple GPUs (special request)</option>
                  </select>
                  <div className="text-xs mt-2 opacity-70">
                    Standard grant = 1x RTX 5090 (24GB VRAM). Need more? Explain in your technical goals.
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    PRIOR EXPERIENCE
                  </label>
                  <textarea
                    value={formData.priorExperience}
                    onChange={(e) => handleChange('priorExperience', e.target.value)}
                    rows="3"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="Have you worked with ML/AI before? What have you built? It's OK to be a beginner — just be honest."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    TIMELINE
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleChange('timeline', e.target.value)}
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
                  >
                    <option value="">When can you start?</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-cyan-400">
                    SHOWCASE COMMITMENT
                  </label>
                  <textarea
                    value={formData.showcase}
                    onChange={(e) => handleChange('showcase', e.target.value)}
                    rows="3"
                    className="w-full bg-black border border-green-500/30 px-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500 resize-none"
                    placeholder="After the grant, you'll publish a project report. What will you share? (e.g., code, datasets, learnings, demo)"
                  />
                </div>
              </div>
            </div>

            <div className="border border-yellow-500/30 bg-yellow-500/5 p-6">
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="mb-2 text-yellow-400 font-bold">Remember:</p>
                  <p className="opacity-90">
                    We're betting on <span className="font-bold">you</span>, not your credentials. 
                    Students, indie devs, career switchers — if you're hungry to build and willing to share what you learn, 
                    you belong here. Be real. Be ambitious. Show us the vision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="text-sm opacity-70">
              <div className="mb-1">* Required fields</div>
              <div>Review time: ~7 days</div>
            </div>
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-green-500 text-black font-bold hover:bg-green-400 transition flex items-center text-lg"
            >
              <Rocket className="w-5 h-5 mr-2" />
              SUBMIT APPLICATION
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm opacity-70">
          Questions about your application? Email <a href="mailto:grants@trustcat.ai" className="text-cyan-400">grants@trustcat.ai</a>
        </div>
      </div>
    </div>
  );
}
