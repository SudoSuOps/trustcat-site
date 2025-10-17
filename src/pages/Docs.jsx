import React, { useState } from 'react';
import { Terminal, Book, Code, Shield, Zap, Users, FileText, ChevronRight, Search } from 'lucide-react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const sections = {
    'getting-started': {
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5" />,
      content: `# Getting Started with TrustCat

## What is TrustCat?

TrustCat.ai is the first verifiable compute ecosystem where every participant—provider, broker, and client—is connected through C.A.T: Compute · Adoption · Trust.

### Core Pillars

**Compute**: Verified NVIDIA hardware operated by independent micro-datacenter owners. Certified builds with minimum baselines.

**Adoption**: Decentralized "Remax-style" sales model—brokers onboard real customers into verified compute capacity. 100% transparent revenue split.

**Trust**: Chainlink-verified data, immutable records, full visibility into workloads, uptime, and utilization metrics on-chain via CAT Chain.

## Quick Start

### For Clients

1. Browse verified providers on the marketplace
2. Submit compute requirements via inquiry form
3. Get matched with suitable providers within 24 hours
4. Deploy workloads with USDC escrow protection
5. Receive Chainlink-verified job completion proofs

### For Providers

1. Apply with hardware specifications
2. Complete certification audit
3. Deploy verification node
4. Register compute vault (NFT-anchored)
5. Go live and start earning

### For Brokers

1. Submit broker application
2. Complete background check
3. Access CAM network terminal
4. Onboard clients and earn commissions
5. Build your book of verified business`
    },
    'providers': {
      title: 'For Providers',
      icon: <Shield className="w-5 h-5" />,
      content: `# Provider Documentation

## Hardware Requirements

### Minimum Specifications

- **GPU**: NVIDIA RTX 4090 / 5090 (or certified equivalent)
- **Network**: 10Gbps uplink minimum
- **Uptime**: 99.5% SLA capability
- **Facility**: Secure location with audit access

### Recommended Specifications

- **GPU**: 8+ RTX 5090s for optimal utilization
- **Network**: 25Gbps+ redundant uplink
- **Cooling**: Liquid cooling or immersion
- **Power**: Redundant power with UPS backup
- **Monitoring**: 24/7 automated systems

## Revenue Model

### Standard Split

- **Provider**: 70% of workload revenue
- **CAM Fund**: 20% (adoption desk + marketing)
- **Protocol**: 10% (verification + infrastructure)

### Bonus Tiers

- **99.9% uptime**: +5% revenue share
- **Security audit**: Premium client access
- **Multi-location**: Volume discounts

## Kubernetes Integration

Deploy provider infrastructure using Kubernetes for seamless orchestration and scaling.

## Monitoring & Alerts

Track your provider metrics in real-time:

- GPU utilization
- Network throughput
- Job queue status
- Revenue tracking
- Uptime SLA compliance`
    },
    'brokers': {
      title: 'For Brokers',
      icon: <Users className="w-5 h-5" />,
      content: `# Broker Documentation

## CAM Network Overview

The Core Adoption Marketplace (CAM) enables brokers to earn transparent commissions by onboarding enterprise clients to verified compute infrastructure.

## Commission Structure

### Initial Onboarding

- **15%** of first 12 months revenue
- Paid automatically via smart contract
- USDC settlement (no token volatility)

### Recurring Revenue

- **5%** ongoing commission on repeat workloads
- Lifetime client relationship value
- Compounding book of business

### Referral Bonuses

- **2%** of referred broker's deals
- Build your broker network
- Passive income stream

## Target Verticals

### Healthcare AI

- Medical imaging (MONAI)
- Drug discovery
- Clinical research
- HIPAA compliance built-in

### Research Institutions

- University ML labs
- Academic computing
- Grant-funded projects
- Long-term contracts

### Enterprise AI

- LLM fine-tuning
- Computer vision
- Simulation workloads
- Custom ML pipelines

## Terminal Access

The Broker Terminal provides real-time pipeline tracking, compute availability matrix, commission dashboard, deal room access, and performance analytics.`
    },
    'clients': {
      title: 'For Clients',
      icon: <Code className="w-5 h-5" />,
      content: `# Client Documentation

## Supported Workloads

### AI Training & Inference

- LLM training (PyTorch, JAX)
- Computer vision pipelines
- Multi-GPU distributed training
- Model fine-tuning

### Healthcare AI

- MONAI medical imaging
- Drug discovery simulations
- Clinical data analysis
- HIPAA-compliant environments

### Research Computing

- Academic ML workloads
- HPC simulation
- Batch processing
- Data-intensive computing

## Getting Started

### 1. Submit Inquiry

Use the compute inquiry form with workload type, GPU requirements, duration and timeline, and budget range.

### 2. Provider Matching

Within 24 hours, receive matched provider recommendations, pricing quotes, SLA guarantees, and availability confirmation.

### 3. Deploy Workload

Connect to your assigned provider and deploy your job.

### 4. USDC Escrow

Smart contract holds payment with funds locked until job completion, Chainlink verification required, automatic release on proof, and dispute resolution available.

### 5. Job Completion

Receive immutable proof including Chainlink attestation, on-chain verification, job artifacts, and performance metrics.

## Pricing Example

RTX 5090 Compute:
- On-demand: $2.80/GPU-hour
- Reserved (monthly): $1,850/GPU/month
- Volume (10+ GPUs): Custom pricing

Includes Chainlink verification, 99.5% uptime SLA, 24/7 monitoring, and USDC settlement.`
    },
    'architecture': {
      title: 'Architecture',
      icon: <Book className="w-5 h-5" />,
      content: `# Technical Architecture

## CAT Chain Overview

### Layer 2 Protocol

CAT Chain is an OP Stack app-rollup serving as the "title company" of compute:

- **Execution**: OP Stack (Cannon/Bedrock)
- **Settlement**: Ethereum mainnet
- **Data Availability**: L1 DA (roadmap to EigenDA)
- **Sequencer**: Initially centralized, roadmap to decentralized

### USDC Native

Circle CCTP integration for native USDC with mint/burn bridging, no token volatility, EIP-4337 gasless transactions, and permit flows for better UX.

## Smart Contract Architecture

### Core Modules

**ProviderRegistry.sol** - Verify and activate providers, store hardware specs on-chain, reputation scoring, upgradeable governance.

**JobMarket.sol** - Job posting and matching, USDC escrow (EIP-2612 permit), SLA encoding, provider selection.

**RevenueSplit.sol** - CAM fund distribution (70/20/10), automated payouts, Safe multisig integration, streaming payments (optional).

**AttestationBridge.sol** - Chainlink oracle integration, job completion verification, uptime attestations, billing proofs.

## Compute Vaults

NFT-anchored provider identities with on-chain hardware certification and automated job assignment.

## Chainlink Integration

### Job Completion Oracles

Verify compute work completed with cryptographic proof validation.

### Uptime Attestations

Continuous monitoring with heartbeat checks every 5 minutes, SLA compliance tracking, automatic penalty calculations, and on-chain dispute evidence.

## Security Model

### Multi-Layer Verification

1. Hardware certification (initial audit)
2. Real-time uptime monitoring
3. Job completion proofs (Chainlink)
4. Client payment attestation
5. Community auditor checks

### Immutable Records

All transactions stored on CAT Chain including job specifications, completion proofs, payment records, SLA metrics, and dispute resolutions.`
    },
    'api': {
      title: 'API Reference',
      icon: <FileText className="w-5 h-5" />,
      content: `# API Reference

## Authentication

All API requests require authentication. Get your API key from the dashboard.

## Endpoints

### Jobs

**Create Job** - POST /v1/jobs

**Get Job Status** - GET /v1/jobs/:job_id

### Providers

**List Providers** - GET /v1/providers

Query params: available, min_gpus, location

**Get Provider Details** - GET /v1/providers/:provider_id

### Marketplace

**Get Available Capacity** - GET /v1/marketplace/capacity

Returns real-time GPU availability across network.

## Webhooks

Subscribe to job events including job.started, job.completed, job.failed, and attestation.received.

## Rate Limits

- 100 requests/minute for standard tier
- 1000 requests/minute for enterprise

## SDKs

### Python
pip install trustcat

### JavaScript
npm install @trustcat/sdk

### Go
go get github.com/trustcat/go-sdk`
    }
  };

  const sidebarItems = [
    { id: 'getting-started', label: 'Getting Started', icon: <Zap className="w-4 h-4" /> },
    { id: 'providers', label: 'For Providers', icon: <Shield className="w-4 h-4" /> },
    { id: 'brokers', label: 'For Brokers', icon: <Users className="w-4 h-4" /> },
    { id: 'clients', label: 'For Clients', icon: <Code className="w-4 h-4" /> },
    { id: 'architecture', label: 'Architecture', icon: <Book className="w-4 h-4" /> },
    { id: 'api', label: 'API Reference', icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl font-bold">TrustCat.ai</span>
            <span className="text-sm opacity-70 ml-4">/ Documentation</span>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="text-sm hover:text-cyan-400 transition"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className="w-full bg-black border-2 border-green-500/30 pl-12 pr-4 py-3 focus:border-cyan-400 focus:outline-none text-green-500"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="border-2 border-green-500/30 bg-green-500/5 p-4 sticky top-24">
              <div className="text-sm font-bold text-cyan-400 mb-4">DOCUMENTATION</div>
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-3 py-2 flex items-center space-x-2 transition ${
                      activeSection === item.id
                        ? 'bg-green-500 text-black font-bold'
                        : 'hover:bg-green-500/10'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                    {activeSection === item.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="border-2 border-green-500/30 bg-green-500/5 p-8">
              <div className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap leading-relaxed">
                  {sections[activeSection].content}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-8 border-t border-green-500/30">
              <div className="text-sm opacity-70">
                Questions? Contact <a href="mailto:terminal@trustcat.ai" className="text-cyan-400">terminal@trustcat.ai</a>
              </div>
              <div className="text-sm">
                <a href="https://github.com/trustcat" className="text-cyan-400 hover:text-cyan-300">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
