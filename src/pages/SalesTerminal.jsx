import React, { useState, useEffect } from 'react';
import { Terminal, DollarSign, TrendingUp, Users, Zap, Clock, Target, CheckCircle, AlertCircle, MessageSquare, BarChart3, Search, Filter } from 'lucide-react';

export default function SalesTerminal() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedDeal, setSelectedDeal] = useState(null);

  const brokerStats = {
    name: 'broker_001',
    monthlyCommission: 12440,
    pendingRevenue: 247000,
    deals: {
      active: 12,
      hot: 3,
      pending: 8,
      closed: 27
    },
    performance: {
      closeRate: 68,
      avgDealSize: 9145,
      avgCloseTime: 8,
      repeatClients: 78
    }
  };

  const computeAvailability = {
    totalGPUs: 96,
    available: 54,
    booked: 32,
    maintenance: 10,
    providers: 8,
    avgUtilization: 67
  };

  const activePipeline = [
    { 
      id: 'DEAL-847', 
      client: 'Healthcare AI Corp', 
      type: 'Medical Imaging', 
      gpus: 200, 
      budget: 48000, 
      commission: 7200,
      stage: 'pending_escrow', 
      probability: 90,
      contact: 'sarah.chen@healthcare-ai.com',
      provider: 'CAT-FL-001',
      urgency: 'high'
    },
    { 
      id: 'DEAL-846', 
      client: 'Research Lab X', 
      type: 'ML Training Pipeline', 
      gpus: 80, 
      budget: 19200, 
      commission: 2880,
      stage: 'in_negotiation', 
      probability: 75,
      contact: 'mike.rodriguez@researchlab.edu',
      provider: 'CAT-FL-002',
      urgency: 'medium'
    },
    { 
      id: 'DEAL-845', 
      client: 'Enterprise AI Startup', 
      type: 'LLM Fine-tuning', 
      gpus: 120, 
      budget: 33600, 
      commission: 5040,
      stage: 'job_active', 
      probability: 100,
      contact: 'james.kim@aistart.io',
      provider: 'CAT-FL-001',
      urgency: 'low'
    },
    { 
      id: 'DEAL-844', 
      client: 'BioTech Solutions', 
      type: 'Drug Discovery Sim', 
      gpus: 160, 
      budget: 44800, 
      commission: 6720,
      stage: 'proposal_sent', 
      probability: 60,
      contact: 'lisa.wang@biotech.com',
      provider: 'CAT-FL-003',
      urgency: 'high'
    },
    { 
      id: 'DEAL-843', 
      client: 'Autonomous Systems Inc', 
      type: 'Simulation Workload', 
      gpus: 100, 
      budget: 28000, 
      commission: 4200,
      stage: 'discovery', 
      probability: 40,
      contact: 'raj.patel@autonomous.com',
      provider: null,
      urgency: 'medium'
    }
  ];

  const providerCapacity = [
    { id: 'CAT-FL-001', name: 'Miami Compute Labs', gpus: 8, available: 3, utilization: 62, uptime: 99.9 },
    { id: 'CAT-FL-002', name: 'TampaBay AI Infrastructure', gpus: 12, available: 7, utilization: 42, uptime: 99.6 },
    { id: 'CAT-FL-003', name: 'Orlando Research Cluster', gpus: 6, available: 0, utilization: 100, uptime: 99.8 },
    { id: 'CAT-FL-004', name: 'Fort Lauderdale GPU Farm', gpus: 10, available: 6, utilization: 40, uptime: 99.7 },
    { id: 'CAT-FL-005', name: 'Jacksonville AI Hub', gpus: 8, available: 8, utilization: 0, uptime: 100 }
  ];

  const recentActivity = [
    { time: '14:23', event: 'DEAL-847 moved to pending_escrow', type: 'success' },
    { time: '13:45', event: 'New lead: Pharma Research Co.', type: 'info' },
    { time: '12:18', event: 'DEAL-845 job started on CAT-FL-001', type: 'success' },
    { time: '11:32', event: 'Client response: Healthcare AI Corp', type: 'info' },
    { time: '10:05', event: 'Provider capacity increased: CAT-FL-005', type: 'info' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStageColor = (stage) => {
    const colors = {
      discovery: 'text-gray-400',
      proposal_sent: 'text-yellow-400',
      in_negotiation: 'text-cyan-400',
      pending_escrow: 'text-yellow-400',
      job_active: 'text-green-400',
      completed: 'text-green-500'
    };
    return colors[stage] || 'text-gray-400';
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      high: 'border-red-500 bg-red-500/10 text-red-400',
      medium: 'border-yellow-500 bg-yellow-500/10 text-yellow-400',
      low: 'border-green-500 bg-green-500/10 text-green-400'
    };
    return colors[urgency] || 'border-gray-500 bg-gray-500/10 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <div>
              <div className="text-lg font-bold">SALES TERMINAL</div>
              <div className="text-xs opacity-70">session: {brokerStats.name}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>system_operational</span>
            </div>
            <div className="opacity-70">
              {currentTime.toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>
        </div>
      </header>

      {/* Command Bar */}
      <div className="border-b border-green-500/30 bg-green-500/5">
        <div className="max-w-[1600px] mx-auto px-4 py-2">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-cyan-400">$</span>
            <span>trustcat.terminal</span>
            <span className="opacity-50">&gt;</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Stats */}
          <div className="col-span-3 space-y-6">
            {/* Personal Stats */}
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-4 text-cyan-400 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                YOUR PERFORMANCE
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs opacity-70 mb-1">THIS MONTH</div>
                  <div className="text-3xl font-bold text-green-400">
                    ${brokerStats.monthlyCommission.toLocaleString()}
                  </div>
                  <div className="text-xs opacity-70">commissions earned</div>
                </div>

                <div>
                  <div className="text-xs opacity-70 mb-1">PENDING REVENUE</div>
                  <div className="text-2xl font-bold text-cyan-400">
                    ${brokerStats.pendingRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-yellow-400">in pipeline</div>
                </div>

                <div className="border-t border-green-500/30 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="opacity-70">Active deals:</span>
                    <span className="font-bold">{brokerStats.deals.active}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Hot leads:</span>
                    <span className="font-bold text-red-400">{brokerStats.deals.hot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Close rate:</span>
                    <span className="font-bold text-green-400">{brokerStats.performance.closeRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Avg. close:</span>
                    <span className="font-bold">{brokerStats.performance.avgCloseTime} days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compute Availability */}
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-4 text-cyan-400 flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                NETWORK CAPACITY
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs opacity-70 mb-1">AVAILABLE NOW</div>
                  <div className="text-3xl font-bold text-green-400">{computeAvailability.available}</div>
                  <div className="text-xs opacity-70">/ {computeAvailability.totalGPUs} GPUs</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="opacity-70">Booked:</span>
                    <span className="text-cyan-400">{computeAvailability.booked} GPUs</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-70">Maintenance:</span>
                    <span className="text-yellow-400">{computeAvailability.maintenance} GPUs</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="opacity-70">Utilization:</span>
                    <span className="font-bold">{computeAvailability.avgUtilization}%</span>
                  </div>
                </div>

                <div className="h-2 bg-green-500/20 rounded overflow-hidden">
                  <div 
                    className="h-full bg-green-500"
                    style={{ width: `${computeAvailability.avgUtilization}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-4 text-cyan-400 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                RECENT ACTIVITY
              </h3>
              
              <div className="space-y-2 text-xs">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-start space-x-2 py-2 border-b border-green-500/20 last:border-0">
                    <span className="opacity-50 flex-shrink-0">{activity.time}</span>
                    <span className={activity.type === 'success' ? 'text-green-400' : 'opacity-80'}>
                      {activity.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Pipeline */}
          <div className="col-span-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                <Target className="w-6 h-6 mr-2 text-cyan-400" />
                ACTIVE PIPELINE
              </h2>
              <div className="flex items-center space-x-3">
                <button className="px-3 py-1 border border-green-500/30 hover:bg-green-500/10 transition text-sm flex items-center">
                  <Filter className="w-3 h-3 mr-2" />
                  Filter
                </button>
                <button className="px-3 py-1 bg-green-500 text-black font-bold hover:bg-green-400 transition text-sm">
                  + New Deal
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {activePipeline.map((deal) => (
                <div 
                  key={deal.id}
                  className="border-2 border-green-500/30 bg-green-500/5 p-4 hover:border-cyan-400/50 transition cursor-pointer"
                  onClick={() => setSelectedDeal(deal)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-cyan-400 font-mono text-sm">{deal.id}</span>
                        <span className={`text-xs px-2 py-1 border ${getUrgencyColor(deal.urgency)} font-bold uppercase`}>
                          {deal.urgency}
                        </span>
                        <span className={`text-xs font-bold ${getStageColor(deal.stage)}`}>
                          {deal.stage.replace(/_/g, ' ')}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{deal.client}</h3>
                      <p className="text-sm opacity-70">{deal.type} • {deal.gpus} GPUs</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm opacity-70 mb-1">EST. VALUE</div>
                      <div className="text-xl font-bold text-cyan-400">
                        ${deal.budget.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-400">
                        ${deal.commission.toLocaleString()} commission
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="opacity-70">Contact: </span>
                      <span className="text-cyan-400">{deal.contact}</span>
                    </div>
                    <div>
                      <span className="opacity-70">Provider: </span>
                      <span className="font-bold">{deal.provider || 'TBD'}</span>
                    </div>
                    <div className="text-right">
                      <span className="opacity-70">Win prob: </span>
                      <span className={`font-bold ${deal.probability > 70 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {deal.probability}%
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center space-x-2">
                    <button className="flex-1 py-1 border border-green-500/30 hover:bg-green-500/10 transition text-xs">
                      View Details
                    </button>
                    <button className="flex-1 py-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition text-xs flex items-center justify-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar - Provider Capacity */}
          <div className="col-span-3 space-y-6">
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-4 text-cyan-400 flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                PROVIDER CAPACITY
              </h3>

              <div className="space-y-3">
                {providerCapacity.map((provider) => (
                  <div key={provider.id} className="border border-green-500/30 bg-black/50 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold">{provider.name}</div>
                      <div className="flex items-center space-x-1">
                        {provider.available > 0 ? (
                          <>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">{provider.available} free</span>
                          </>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-xs text-red-400">busy</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="text-xs space-y-1 mb-2">
                      <div className="flex justify-between">
                        <span className="opacity-70">GPUs:</span>
                        <span>{provider.available}/{provider.gpus}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-70">Utilization:</span>
                        <span className={provider.utilization > 80 ? 'text-yellow-400' : 'text-green-400'}>
                          {provider.utilization}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="opacity-70">Uptime:</span>
                        <span className="text-green-400">{provider.uptime}%</span>
                      </div>
                    </div>

                    <div className="h-1 bg-green-500/20 rounded overflow-hidden">
                      <div 
                        className={`h-full ${provider.utilization > 80 ? 'bg-yellow-400' : 'bg-green-500'}`}
                        style={{ width: `${provider.utilization}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 border-2 border-green-500 hover:bg-green-500/10 transition text-sm font-bold">
                VIEW ALL PROVIDERS
              </button>
            </div>

            {/* Quick Actions */}
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4">
              <h3 className="text-sm font-bold mb-4 text-cyan-400">QUICK ACTIONS</h3>
              
              <div className="space-y-2">
                <button className="w-full py-2 border border-green-500/30 hover:bg-green-500/10 transition text-sm text-left px-3">
                  → Create new proposal
                </button>
                <button className="w-full py-2 border border-green-500/30 hover:bg-green-500/10 transition text-sm text-left px-3">
                  → Schedule client call
                </button>
                <button className="w-full py-2 border border-green-500/30 hover:bg-green-500/10 transition text-sm text-left px-3">
                  → Generate commission report
                </button>
                <button className="w-full py-2 border border-green-500/30 hover:bg-green-500/10 transition text-sm text-left px-3">
                  → View deal room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Terminal */}
      <div className="border-t border-green-500/30 bg-black/80 py-3 mt-8">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-6 opacity-70">
              <span>session: {brokerStats.name}</span>
              <span>uptime: 24h</span>
              <span>latency: &lt;2ms</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-cyan-400">trust_the_machine</span>
              <span className="opacity-70">TrustCat LLC © 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
