export function WebArchitectureDiagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 500"
      className={className}
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6b6b6b" strokeWidth="0.5" opacity="0.1" />
        </pattern>
        
        {/* Gradients */}
        <linearGradient id="fwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c78f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4c78f1" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="logicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a34ceb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a34ceb" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e09f3c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e09f3c" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="infraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39e0c4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#39e0c4" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b6b6b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6b6b6b" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <style>{`
        .label { font-family: system-ui, sans-serif; font-size: 11px; font-weight: 700; fill: #6b6b6b; letter-spacing: 0.5px; }
        .sublabel { font-family: system-ui, sans-serif; font-size: 9px; font-weight: 500; fill: #6b6b6b; opacity: 0.8; }
        .title { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 700; fill: #6b6b6b; }
        .detail { font-family: system-ui, sans-serif; font-size: 8px; font-weight: 400; fill: #6b6b6b; opacity: 0.7; }
      `}</style>

      <rect width="1000" height="500" fill="url(#grid)" />
      <rect x="10" y="10" width="980" height="480" rx="16" stroke="#6b6b6b" strokeWidth="1" opacity="0.15" fill="none" />

      {/* Layer 1: Frontend Frameworks */}
      <g id="frameworks">
        <rect x="30" y="30" width="220" height="360" rx="10" fill="url(#fwGrad)" stroke="#4c78f1" strokeWidth="1.2" opacity="0.4" />
        <text x="140" y="52" textAnchor="middle" className="label" style={{ fill: '#4c78f1' }}>FRONTEND ECOSYSTEM</text>
        
        <rect x="45" y="70" width="190" height="60" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="140" y="88" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>Core Frameworks</text>
        <text x="140" y="105" textAnchor="middle" className="detail">React / Next.js • Svelte / Kit</text>
        <text x="140" y="118" textAnchor="middle" className="detail">Vue / Nuxt • Astro</text>

        <rect x="45" y="145" width="190" height="60" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="140" y="163" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>State & Data Fetching</text>
        <text x="140" y="180" textAnchor="middle" className="detail">React Query • SWR • Redux</text>
        <text x="140" y="193" textAnchor="middle" className="detail">Zustand • Signal State</text>

        <rect x="45" y="220" width="190" height="60" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="140" y="238" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>Styling & UI</text>
        <text x="140" y="255" textAnchor="middle" className="detail">CSS Modules • Framer Motion</text>
        <text x="140" y="268" textAnchor="middle" className="detail">GSAP • Lottie Animations</text>

        <rect x="45" y="295" width="190" height="80" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="140" y="313" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>Observability</text>
        <text x="140" y="330" textAnchor="middle" className="detail">Real User Monitoring (RUM)</text>
        <text x="140" y="343" textAnchor="middle" className="detail">Sentry Error Tracking</text>
        <text x="140" y="356" textAnchor="middle" className="detail">Web Vitals Analytics</text>
      </g>

      <path d="M250 210 L280 210" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 2: Logic & Orchestration */}
      <g id="logic">
        <rect x="280" y="30" width="220" height="360" rx="10" fill="url(#logicGrad)" stroke="#a34ceb" strokeWidth="1.2" opacity="0.4" />
        <text x="390" y="52" textAnchor="middle" className="label" style={{ fill: '#a34ceb' }}>LOGIC & ORCHESTRATION</text>

        <rect x="295" y="70" width="190" height="90" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
        <text x="390" y="88" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>Rendering Patterns</text>
        <text x="390" y="110" textAnchor="middle" className="detail">SSR (Server Side Rendering)</text>
        <text x="390" y="125" textAnchor="middle" className="detail">SSG (Static Site Gen)</text>
        <text x="390" y="140" textAnchor="middle" className="detail">ISR (Incremental Regeneration)</text>

        <rect x="295" y="175" width="190" height="90" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
        <text x="390" y="193" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>Edge Logic</text>
        <text x="390" y="215" textAnchor="middle" className="detail">Edge Middleware / Functions</text>
        <text x="390" y="230" textAnchor="middle" className="detail">Geo-location Routing</text>
        <text x="390" y="245" textAnchor="middle" className="detail">Edge Auth & A/B Testing</text>

        <rect x="295" y="280" width="190" height="95" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
        <text x="390" y="298" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>Asset Optimization</text>
        <text x="390" y="320" textAnchor="middle" className="detail">Dynamic Image Optimization</text>
        <text x="390" y="335" textAnchor="middle" className="detail">Modern Formats (WebP / AVIF)</text>
        <text x="390" y="350" textAnchor="middle" className="detail">Font Subset Delivery</text>
      </g>

      <path d="M500 210 L530 210" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 3: Network & Security */}
      <g id="network">
        <rect x="530" y="30" width="220" height="360" rx="10" fill="url(#edgeGrad)" stroke="#e09f3c" strokeWidth="1.2" opacity="0.4" />
        <text x="640" y="52" textAnchor="middle" className="label" style={{ fill: '#e09f3c' }}>NETWORK & SECURITY</text>

        <rect x="545" y="70" width="190" height="90" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="640" y="88" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>Global Edge Network</text>
        <text x="640" y="110" textAnchor="middle" className="detail">Multi-Region CDN Cache</text>
        <text x="640" y="125" textAnchor="middle" className="detail">Anycast Global Routing</text>
        <text x="640" y="140" textAnchor="middle" className="detail">Edge KV / Durable Objects</text>

        <rect x="545" y="175" width="190" height="90" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="640" y="193" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>Hardened Perimeter</text>
        <text x="640" y="215" textAnchor="middle" className="detail">WAF (Web App Firewall)</text>
        <text x="640" y="230" textAnchor="middle" className="detail">DDoS Mitigation (L3/L4/L7)</text>
        <text x="640" y="245" textAnchor="middle" className="detail">Bot Protection & Rate Limit</text>

        <rect x="545" y="280" width="190" height="95" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="640" y="298" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>Encryption & Compliance</text>
        <text x="640" y="320" textAnchor="middle" className="detail">TLS 1.3 / mTLS Protocol</text>
        <text x="640" y="335" textAnchor="middle" className="detail">Automatic HSTS / CSP Policy</text>
        <text x="640" y="350" textAnchor="middle" className="detail">Secure Cookies & Headers</text>
      </g>

      <path d="M750 210 L780 210" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 4: Integrations & Infrastructure */}
      <g id="integrations">
        <rect x="780" y="30" width="190" height="360" rx="10" fill="url(#infraGrad)" stroke="#39e0c4" strokeWidth="1.2" opacity="0.4" />
        <text x="875" y="52" textAnchor="middle" className="label" style={{ fill: '#39e0c4' }}>INTEGRATIONS & INFRA</text>

        <rect x="795" y="70" width="160" height="90" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="875" y="88" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Data Pipelines</text>
        <text x="875" y="110" textAnchor="middle" className="detail">GraphQL / Apollo</text>
        <text x="875" y="125" textAnchor="middle" className="detail">WebSockets / gRPC</text>
        <text x="875" y="140" textAnchor="middle" className="detail">Real-time DB Sync</text>

        <rect x="795" y="175" width="160" height="90" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="875" y="193" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Headless Ecosystem</text>
        <text x="875" y="215" textAnchor="middle" className="detail">Headless CMS / Commerce</text>
        <text x="875" y="230" textAnchor="middle" className="detail">External API Mashup</text>
        <text x="875" y="245" textAnchor="middle" className="detail">Serverless Actions</text>

        <rect x="795" y="280" width="160" height="95" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="875" y="298" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Automated DevOps</text>
        <text x="875" y="320" textAnchor="middle" className="detail">CI/CD Previews</text>
        <text x="875" y="335" textAnchor="middle" className="detail">Blue-Green Deployment</text>
        <text x="875" y="350" textAnchor="middle" className="detail">Instant Rollback Logic</text>
      </g>

      {/* Metrics Row at Bottom */}
      <g id="metrics-expanded">
        <rect x="30" y="415" width="940" height="65" rx="12" fill="url(#boxGrad)" stroke="#6b6b6b" strokeWidth="1" opacity="0.1" />
        
        <text x="150" y="445" textAnchor="middle" className="label" opacity="0.8">ULTRA-PERFORMANCE</text>
        <text x="150" y="462" textAnchor="middle" className="sublabel">Sub-100ms Global Latency</text>

        <line x1="270" y1="430" x2="270" y2="465" stroke="#6b6b6b" strokeWidth="1" opacity="0.2" />

        <text x="390" y="445" textAnchor="middle" className="label" opacity="0.8">SEO & ACCESSIBILITY</text>
        <text x="390" y="462" textAnchor="middle" className="sublabel">100/100 Lighthouse Ready</text>

        <line x1="510" y1="430" x2="510" y2="465" stroke="#6b6b6b" strokeWidth="1" opacity="0.2" />

        <text x="630" y="445" textAnchor="middle" className="label" opacity="0.8">MODERN CORE</text>
        <text x="630" y="462" textAnchor="middle" className="sublabel">Edge-First Architecture</text>

        <line x1="750" y1="430" x2="750" y2="465" stroke="#6b6b6b" strokeWidth="1" opacity="0.2" />

        <text x="870" y="445" textAnchor="middle" className="label" opacity="0.8">ENTERPRISE SCALE</text>
        <text x="870" y="462" textAnchor="middle" className="sublabel">Unlimited Global Scalability</text>
      </g>
    </svg>
  );
}