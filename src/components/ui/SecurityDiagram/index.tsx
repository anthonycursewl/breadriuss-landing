export function SecurityDiagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 820"
      className={className}
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6b6b6b" strokeWidth="0.5" opacity="0.12" />
        </pattern>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b6b6b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6b6b6b" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b6b6b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6b6b6b" stopOpacity="0.05" />
        </linearGradient>

        {/* Colorful Gradients */}
        <linearGradient id="stratGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e09f3c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e09f3c" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c78f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4c78f1" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="devGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a34ceb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a34ceb" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39e0c4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#39e0c4" stopOpacity="0.05" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .label { font-family: system-ui, sans-serif; font-size: 11px; font-weight: 700; fill: #6b6b6b; letter-spacing: 0.5px; }
        .sublabel { font-family: system-ui, sans-serif; font-size: 9px; font-weight: 500; fill: #6b6b6b; }
        .detail { font-family: system-ui, sans-serif; font-size: 8px; font-weight: 400; fill: #6b6b6b; opacity: 0.7; }
        .title { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 700; fill: #6b6b6b; }
        .header { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 600; fill: #6b6b6b; opacity: 0.6; letter-spacing: 1px; }
        .highlight { font-family: system-ui, sans-serif; font-size: 9px; font-weight: 600; fill: #6b6b6b; }
      `}</style>

      <rect width="1000" height="820" fill="url(#grid)" />

      <rect x="10" y="10" width="980" height="800" rx="16" stroke="#6b6b6b" strokeWidth="1.5" opacity="0.2" fill="none" />

      {/* Header */}
      <text x="500" y="38" textAnchor="middle" className="header">CONCEPT: SECURITY BY DESIGN</text>
      <text x="500" y="54" textAnchor="middle" className="detail" style={{ opacity: 0.5 }}>INTEGRATED PROTECTION LAYERS FROM DAY ZERO</text>

      {/* Strategic Layer */}
      <g id="strategic-layer">
        <rect x="25" y="80" width="950" height="120" rx="10" fill="url(#stratGrad)" stroke="#e09f3c" strokeWidth="1.2" opacity="0.4" />
        <text x="500" y="98" textAnchor="middle" className="label" style={{ fill: '#e09f3c' }}>GLOBAL SECURITY STRATEGY</text>

        {/* Threat Modeling */}
        <rect x="40" y="120" width="180" height="65" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="130" y="138" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>THREAT MODELING</text>
        <rect x="52" y="145" width="55" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="80" y="155" textAnchor="middle" className="detail">STRIDE</text>
        <rect x="112" y="145" width="55" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="140" y="155" textAnchor="middle" className="detail">MITRE ATT&CK</text>
        <rect x="52" y="164" width="115" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="110" y="174" textAnchor="middle" className="detail">Attack Tree Analysis</text>

        {/* GDPR/SOC2 Compliance */}
        <rect x="240" y="120" width="180" height="65" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="330" y="138" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>REGULATORY COMPLIANCE</text>
        <rect x="252" y="145" width="70" height="14" rx="2" fill="#6b6b6b" opacity="0.12" />
        <text x="287" y="155" textAnchor="middle" className="detail">GDPR Ready</text>
        <rect x="332" y="145" width="80" height="14" rx="2" fill="#6b6b6b" opacity="0.12" />
        <text x="372" y="155" textAnchor="middle" className="detail">SOC2 Ready</text>
        <rect x="252" y="164" width="160" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="332" y="174" textAnchor="middle" className="detail">ISO 27001 / HIPAA Compliance</text>

        {/* Proactive Monitoring */}
        <rect x="440" y="120" width="180" height="65" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="530" y="138" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>PROACTIVE MONITORING</text>
        <rect x="452" y="145" width="75" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="490" y="155" textAnchor="middle" className="detail">SIEM/SOAR</text>
        <rect x="535" y="145" width="75" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="573" y="155" textAnchor="middle" className="detail">Threat Intel</text>
        <rect x="452" y="164" width="160" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="532" y="174" textAnchor="middle" className="detail">24/7 Security Operations Center</text>

        {/* Security Culture */}
        <rect x="640" y="120" width="180" height="65" rx="6" fill="#e09f3c" opacity="0.08" stroke="#e09f3c" strokeWidth="1" />
        <text x="730" y="138" textAnchor="middle" className="title" style={{ fill: '#e09f3c' }}>SECURITY CULTURE</text>
        <rect x="652" y="145" width="60" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="682" y="155" textAnchor="middle" className="detail">Training</text>
        <rect x="720" y="145" width="90" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="765" y="155" textAnchor="middle" className="detail">Code Review</text>
        <rect x="652" y="164" width="160" height="14" rx="2" fill="#6b6b6b" opacity="0.1" />
        <text x="732" y="174" textAnchor="middle" className="detail">Security Champions Program</text>

        {/* Shield Icon */}
        <g transform="translate(845, 120)">
          <path d="M0 10 L30 0 L60 10 L60 35 L30 60 L0 35 Z" fill="#e09f3c" stroke="#e09f3c" strokeWidth="1.5" opacity="0.2" />
          <path d="M20 30 L25 35 L40 20" stroke="#e09f3c" strokeWidth="3" fill="none" opacity="0.6" />
        </g>
      </g>

      {/* Arrow down */}
      <path d="M500 210 L500 240" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="6 3" opacity="0.4" />
      <polygon points="500,245 494,235 506,235" fill="#6b6b6b" opacity="0.4" />

      {/* Application Layer */}
      <g id="app-layer">
        <rect x="25" y="260" width="950" height="150" rx="10" fill="url(#appGrad)" stroke="#4c78f1" strokeWidth="1.2" opacity="0.4" />
        <text x="500" y="278" textAnchor="middle" className="label" style={{ fill: '#4c78f1' }}>APPLICATION & INFRASTRUCTURE - INTEGRATED SECURITY</text>

        {/* Military Grade Crypto */}
        <rect x="40" y="300" width="220" height="95" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="150" y="318" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>CRYPTOGRAPHIC PROTOCOLS</text>
        <text x="150" y="329" textAnchor="middle" className="detail" opacity="0.6">MILITARY GRADE</text>
        <rect x="52" y="336" width="85" height="18" rx="3" fill="#6b6b6b" opacity="0.12" />
        <text x="95" y="349" textAnchor="middle" className="detail">AES-256-GCM</text>
        <rect x="142" y="336" width="85" height="18" rx="3" fill="#6b6b6b" opacity="0.12" />
        <text x="185" y="349" textAnchor="middle" className="detail">ChaCha20-Poly</text>
        <rect x="52" y="358" width="85" height="18" rx="3" fill="#6b6b6b" opacity="0.12" />
        <text x="95" y="371" textAnchor="middle" className="detail">RSA-4096</text>
        <rect x="142" y="358" width="85" height="18" rx="3" fill="#6b6b6b" opacity="0.12" />
        <text x="185" y="371" textAnchor="middle" className="detail">ECC-P384</text>
        <rect x="52" y="378" width="175" height="16" rx="3" fill="#6b6b6b" opacity="0.08" />
        <text x="140" y="389" textAnchor="middle" className="detail">Post-Quantum Ready</text>

        {/* Secure Data Pipelines */}
        <rect x="280" y="300" width="220" height="95" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="390" y="318" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>SECURE DATA PIPELINES</text>
        <text x="390" y="329" textAnchor="middle" className="detail" opacity="0.6">ZERO TRUST ARCHITECTURE</text>
        <rect x="292" y="338" width="95" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="340" y="349" textAnchor="middle" className="detail">mTLS / SPA</text>
        <rect x="392" y="338" width="95" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="440" y="349" textAnchor="middle" className="detail">Secret Vault</text>
        <rect x="292" y="358" width="95" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="340" y="369" textAnchor="middle" className="detail">Input Validation</text>
        <rect x="392" y="358" width="95" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="440" y="369" textAnchor="middle" className="detail">Output Encoding</text>
        <rect x="292" y="378" width="195" height="16" rx="3" fill="#6b6b6b" opacity="0.08" />
        <text x="390" y="389" textAnchor="middle" className="detail">OWASP Top 10 Mitigation</text>

        {/* AppSec / SAST / DAST */}
        <rect x="520" y="300" width="220" height="95" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="630" y="318" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>APP SECURITY TESTING</text>
        <text x="630" y="329" textAnchor="middle" className="detail" opacity="0.6">SHIFT-LEFT SECURITY</text>
        <rect x="532" y="338" width="80" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="572" y="349" textAnchor="middle" className="detail">SAST</text>
        <rect x="617" y="338" width="80" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="657" y="349" textAnchor="middle" className="detail">DAST</text>
        <rect x="702" y="338" width="28" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="716" y="349" textAnchor="middle" className="detail">SCA</text>
        <rect x="532" y="358" width="195" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="630" y="369" textAnchor="middle" className="detail">Interactive AST (IAST)</text>
        <rect x="532" y="378" width="195" height="16" rx="3" fill="#6b6b6b" opacity="0.08" />
        <text x="630" y="389" textAnchor="middle" className="detail">Runtime Protection (RASP)</text>

        {/* Key Management */}
        <rect x="760" y="300" width="205" height="95" rx="6" fill="#4c78f1" opacity="0.08" stroke="#4c78f1" strokeWidth="1" />
        <text x="862" y="318" textAnchor="middle" className="title" style={{ fill: '#4c78f1' }}>KEY MANAGEMENT</text>
        <text x="862" y="329" textAnchor="middle" className="detail" opacity="0.6">HSM / KMS</text>
        <rect x="772" y="338" width="70" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="807" y="349" textAnchor="middle" className="detail">AWS KMS</text>
        <rect x="848" y="338" width="70" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="883" y="349" textAnchor="middle" className="detail">Azure Key</text>
        <rect x="924" y="338" width="30" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="939" y="349" textAnchor="middle" className="detail">HSM</text>
        <rect x="772" y="358" width="180" height="16" rx="3" fill="#6b6b6b" opacity="0.1" />
        <text x="862" y="369" textAnchor="middle" className="detail">Automatic Key Rotation</text>
        <rect x="772" y="378" width="180" height="16" rx="3" fill="#6b6b6b" opacity="0.08" />
        <text x="862" y="389" textAnchor="middle" className="detail">Hardware Security Module</text>
      </g>

      {/* Arrow down */}
      <path d="M500 420 L500 450" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="6 3" opacity="0.4" />
      <polygon points="500,455 494,445 506,445" fill="#6b6b6b" opacity="0.4" />

      {/* DevSecOps Pipeline Section */}
      <g id="devsecops-section">
        <rect x="25" y="470" width="950" height="240" rx="10" fill="url(#devGrad)" stroke="#a34ceb" strokeWidth="1.2" opacity="0.4" />
        <text x="500" y="488" textAnchor="middle" className="label" style={{ fill: '#a34ceb' }}>CI/CD PIPELINE - AUTOMATED DEVSECOPS</text>

        {/* Pipeline Flow */}
        <g id="pipeline">
          {/* Code */}
          <rect x="55" y="515" width="90" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="100" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>CODE</text>
          <text x="100" y="545" textAnchor="middle" className="detail">Git Hooks</text>
          <text x="100" y="558" textAnchor="middle" className="detail">Pre-commit</text>

          {/* Arrow */}
          <path d="M150 542 L180 542" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <polygon points="185,542 175,538 175,546" fill="#6b6b6b" opacity="0.4" />

          {/* Build + SAST */}
          <rect x="190" y="515" width="110" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="245" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>BUILD</text>
          <text x="245" y="545" textAnchor="middle" className="detail">SAST</text>
          <text x="245" y="558" textAnchor="middle" className="detail">Dependency Scan</text>

          {/* Exploit Interception Indicator */}
          <g transform="translate(245, 580)">
            <rect x="-30" y="0" width="60" height="16" rx="8" fill="#ff8282" opacity="0.15" />
            <text x="0" y="11" textAnchor="middle" className="detail" style={{ fontSize: '7px', fill: '#ff8282', fontWeight: 700 }}>EXPLOIT BLOCKED</text>
          </g>

          {/* Arrow */}
          <path d="M305 542 L335 542" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <polygon points="340,542 330,538 330,546" fill="#6b6b6b" opacity="0.4" />

          {/* Test + DAST */}
          <rect x="345" y="515" width="110" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="400" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>TEST</text>
          <text x="400" y="545" textAnchor="middle" className="detail">DAST</text>
          <text x="400" y="558" textAnchor="middle" className="detail">Penetration Test</text>

          {/* Exploit Interception Indicator */}
          <g transform="translate(400, 580)">
            <rect x="-30" y="0" width="60" height="16" rx="8" fill="#ff8282" opacity="0.15" />
            <text x="0" y="11" textAnchor="middle" className="detail" style={{ fontSize: '7px', fill: '#ff8282', fontWeight: 700 }}>EXPLOIT BLOCKED</text>
          </g>

          {/* Arrow */}
          <path d="M460 542 L490 542" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <polygon points="495,542 485,538 485,546" fill="#6b6b6b" opacity="0.4" />

          {/* Security Scan */}
          <rect x="500" y="515" width="110" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="555" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>SECURITY</text>
          <text x="555" y="545" textAnchor="middle" className="detail">SCA / SBOM</text>
          <text x="555" y="558" textAnchor="middle" className="detail">Container Scan</text>

          {/* Exploit Interception Indicator */}
          <g transform="translate(555, 580)">
            <rect x="-30" y="0" width="60" height="16" rx="8" fill="#ff8282" opacity="0.15" />
            <text x="0" y="11" textAnchor="middle" className="detail" style={{ fontSize: '7px', fill: '#ff8282', fontWeight: 700 }}>EXPLOIT BLOCKED</text>
          </g>

          {/* Arrow */}
          <path d="M615 542 L645 542" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <polygon points="650,542 640,538 640,546" fill="#6b6b6b" opacity="0.4" />

          {/* Deploy */}
          <rect x="655" y="515" width="110" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="710" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>DEPLOY</text>
          <text x="710" y="545" textAnchor="middle" className="detail">Policy Gate</text>
          <text x="710" y="558" textAnchor="middle" className="detail">Security Approval</text>

          {/* Arrow */}
          <path d="M770 542 L800 542" stroke="#6b6b6b" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <polygon points="805,542 795,538 795,546" fill="#6b6b6b" opacity="0.4" />

          {/* Monitor */}
          <rect x="810" y="515" width="90" height="55" rx="6" fill="#a34ceb" opacity="0.08" stroke="#a34ceb" strokeWidth="1" />
          <text x="855" y="532" textAnchor="middle" className="title" style={{ fill: '#a34ceb' }}>MONITOR</text>
          <text x="855" y="545" textAnchor="middle" className="detail">RASP</text>
          <text x="855" y="558" textAnchor="middle" className="detail">Threat Detect</text>
        </g>

        {/* Red Arrow indicators for exploit interception */}
        <g id="exploit-arrows" opacity="0.6">
          <path d="M245 600 L245 615 L400 615 L400 600" stroke="#ff8282" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.5" />
          <text x="322" y="630" textAnchor="middle" className="detail" style={{ fill: '#ff8282', fontWeight: 600 }}>Exploit Interception</text>

          <path d="M400 600 L400 615 L555 615 L555 600" stroke="#ff8282" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.5" />

          <path d="M555 600 L555 615 L710 615 L710 600" stroke="#ff8282" strokeWidth="1" strokeDasharray="3 2" fill="none" opacity="0.5" />
        </g>

        {/* Scanning tools detail */}
        <g id="scanning-tools">
          <rect x="55" y="655" width="200" height="40" rx="4" fill="#a34ceb" opacity="0.06" stroke="#a34ceb" strokeWidth="0.8" />
          <text x="155" y="670" textAnchor="middle" className="detail" style={{ fill: '#a34ceb', fontWeight: 600 }}>INTEGRATED TOOLS</text>
          <text x="155" y="685" textAnchor="middle" className="detail" opacity="0.6">SonarQube • Snyk • Qualys • Trivy • Falco</text>
        </g>

        {/* Policy as Code */}
        <g id="policy-as-code">
          <rect x="275" y="655" width="200" height="40" rx="4" fill="#a34ceb" opacity="0.06" stroke="#a34ceb" strokeWidth="0.8" />
          <text x="375" y="670" textAnchor="middle" className="detail" style={{ fill: '#a34ceb', fontWeight: 600 }}>POLICY AS CODE</text>
          <text x="375" y="685" textAnchor="middle" className="detail" opacity="0.6">Open Policy Agent • OPA Gatekeeper</text>
        </g>

        {/* Automated Response */}
        <g id="auto-response">
          <rect x="495" y="655" width="200" height="40" rx="4" fill="#a34ceb" opacity="0.06" stroke="#a34ceb" strokeWidth="0.8" />
          <text x="595" y="670" textAnchor="middle" className="detail" style={{ fill: '#a34ceb', fontWeight: 600 }}>AUTOMATED RESPONSE</text>
          <text x="595" y="685" textAnchor="middle" className="detail" opacity="0.6">SOAR Playbooks • Auto-remediation</text>
        </g>

        {/* Compliance as Code */}
        <g id="compliance">
          <rect x="715" y="655" width="200" height="40" rx="4" fill="#a34ceb" opacity="0.06" stroke="#a34ceb" strokeWidth="0.8" />
          <text x="815" y="670" textAnchor="middle" className="detail" style={{ fill: '#a34ceb', fontWeight: 600 }}>COMPLIANCE AS CODE</text>
          <text x="815" y="685" textAnchor="middle" className="detail" opacity="0.6">InSpec • Chef InSpec • Terraform</text>
        </g>
      </g>

      {/* Final Concept Box */}
      <g id="concept-box">
        <rect x="200" y="740" width="600" height="55" rx="8" fill="url(#securityGrad)" stroke="#39e0c4" strokeWidth="1.5" opacity="0.4" />
        <text x="500" y="760" textAnchor="middle" className="label" style={{ fill: '#39e0c4' }}>FINAL EQUILIBRIUM</text>
        <text x="320" y="780" textAnchor="middle" className="detail" style={{ fill: '#39e0c4' }}>Security Assurance</text>
        <text x="320" y="788" textAnchor="middle" className="detail" style={{ fill: '#39e0c4', fontWeight: 600 }}>of a Large Enterprise</text>
        <text x="680" y="780" textAnchor="middle" className="detail" style={{ fill: '#39e0c4' }}>Agile Innovation</text>
        <text x="680" y="788" textAnchor="middle" className="detail" style={{ fill: '#39e0c4', fontWeight: 600 }}>Startup Cycles</text>
      </g>
    </svg>
  );
}