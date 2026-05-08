export function MobileArchitectureDiagram({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 640"
      className={className}
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6b6b6b" strokeWidth="0.5" opacity="0.12" />
        </pattern>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b6b6b" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6b6b6b" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="uiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c78f1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4c78f1" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="logicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a34ceb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a34ceb" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#39e0c4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#39e0c4" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="backendGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff8282" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ff8282" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <style>{`
        .label { font-family: system-ui, sans-serif; font-size: 12px; font-weight: 700; fill: #6b6b6b; letter-spacing: 0.5px; }
        .sublabel { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 500; fill: #6b6b6b; opacity: 0.8; }
        .title { font-family: system-ui, sans-serif; font-size: 10px; font-weight: 700; fill: #6b6b6b; }
        .detail { font-family: system-ui, sans-serif; font-size: 9px; font-weight: 400; fill: #6b6b6b; opacity: 0.7; }
      `}</style>

      <rect width="900" height="640" fill="url(#grid)" />

      <rect x="10" y="10" width="880" height="620" rx="16" stroke="#6b6b6b" strokeWidth="1" opacity="0.2" fill="none" />

      {/* Layer 1: UI & Frameworks */}
      <g id="ui-layer">
        <rect x="30" y="30" width="840" height="90" rx="10" fill="url(#uiGrad)" stroke="#4c78f1" strokeWidth="1.2" opacity="0.4" />
        <text x="450" y="52" textAnchor="middle" className="label" style={{ fill: '#4c78f1' }}>UI & UX FRAMEWORKS</text>

        <rect x="50" y="70" width="180" height="35" rx="6" fill="#4c78f1" opacity="0.1" stroke="#4c78f1" strokeWidth="1" />
        <text x="140" y="92" textAnchor="middle" className="sublabel">React Native / Flutter</text>

        <rect x="245" y="70" width="180" height="35" rx="6" fill="#4c78f1" opacity="0.1" stroke="#4c78f1" strokeWidth="1" />
        <text x="335" y="92" textAnchor="middle" className="sublabel">Native (Swift / Kotlin)</text>

        <rect x="440" y="70" width="180" height="35" rx="6" fill="#4c78f1" opacity="0.1" stroke="#4c78f1" strokeWidth="1" />
        <text x="530" y="92" textAnchor="middle" className="sublabel">Custom Design Systems</text>

        <rect x="635" y="70" width="220" height="35" rx="6" fill="#4c78f1" opacity="0.1" stroke="#4c78f1" strokeWidth="1" />
        <text x="745" y="92" textAnchor="middle" className="sublabel">Micro-Animations (GSAP/Lottie)</text>
      </g>

      <path d="M450 120 L450 145" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 2: Hardware & Integration */}
      <g id="logic-layer">
        <rect x="30" y="155" width="840" height="90" rx="10" fill="url(#logicGrad)" stroke="#a34ceb" strokeWidth="1.2" opacity="0.4" />
        <text x="450" y="177" textAnchor="middle" className="label" style={{ fill: '#a34ceb' }}>HARDWARE & SENSORS INTEGRATION</text>

        <rect x="50" y="195" width="180" height="35" rx="6" fill="#a34ceb" opacity="0.1" stroke="#a34ceb" strokeWidth="1" />
        <text x="140" y="217" textAnchor="middle" className="sublabel">NFC / BLE / Bluetooth</text>

        <rect x="245" y="195" width="180" height="35" rx="6" fill="#a34ceb" opacity="0.1" stroke="#a34ceb" strokeWidth="1" />
        <text x="335" y="217" textAnchor="middle" className="sublabel">Advanced Camera APIs</text>

        <rect x="440" y="195" width="180" height="35" rx="6" fill="#a34ceb" opacity="0.1" stroke="#a34ceb" strokeWidth="1" />
        <text x="530" y="217" textAnchor="middle" className="sublabel">Accelerometer & Gyro</text>

        <rect x="635" y="195" width="220" height="35" rx="6" fill="#a34ceb" opacity="0.1" stroke="#a34ceb" strokeWidth="1" />
        <text x="745" y="217" textAnchor="middle" className="sublabel">On-Device AI/ML (CoreML/TFLite)</text>
      </g>

      <path d="M450 245 L450 270" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 3: Security & Persistence */}
      <g id="security-layer">
        <rect x="30" y="280" width="840" height="160" rx="10" fill="url(#securityGrad)" stroke="#39e0c4" strokeWidth="1.2" opacity="0.4" />
        <text x="450" y="302" textAnchor="middle" className="label" style={{ fill: '#39e0c4' }}>SECURITY, PERSISTENCE & OFFLINE-FIRST</text>

        {/* Biometrics */}
        <rect x="50" y="325" width="250" height="100" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="175" y="342" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Biometric Authentication</text>
        <text x="175" y="365" textAnchor="middle" className="detail">Face ID / Fingerprint / Iris</text>
        <text x="175" y="385" textAnchor="middle" className="detail">Biometric Auth API v2</text>
        <text x="175" y="405" textAnchor="middle" className="detail">Secure Keychain / Keystore</text>

        {/* Encryption */}
        <rect x="320" y="325" width="250" height="100" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="445" y="342" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Advanced Cryptography</text>
        <text x="445" y="365" textAnchor="middle" className="detail">AES-256-GCM / RSA-4096</text>
        <text x="445" y="385" textAnchor="middle" className="detail">End-to-End Encryption (E2E)</text>
        <text x="445" y="405" textAnchor="middle" className="detail">SQLCipher Persistence Layer</text>

        {/* Offline First */}
        <rect x="590" y="325" width="265" height="100" rx="6" fill="#39e0c4" opacity="0.08" stroke="#39e0c4" strokeWidth="1" />
        <text x="722" y="342" textAnchor="middle" className="title" style={{ fill: '#39e0c4' }}>Offline-First Engine</text>
        <text x="722" y="365" textAnchor="middle" className="detail">Local SQL / NoSQL Storage</text>
        <text x="722" y="385" textAnchor="middle" className="detail">Background Sync (CRDT)</text>
        <text x="722" y="405" textAnchor="middle" className="detail">Conflict Resolution Algorithms</text>
      </g>

      <path d="M450 440 L450 465" stroke="#6b6b6b" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.3" />

      {/* Layer 4: Infrastructure & Distribution */}
      <g id="backend-layer">
        <rect x="30" y="475" width="840" height="140" rx="10" fill="url(#backendGrad)" stroke="#ff8282" strokeWidth="1.2" opacity="0.4" />
        <text x="450" y="497" textAnchor="middle" className="label" style={{ fill: '#ff8282' }}>INFRASTRUCTURE & GLOBAL DISTRIBUTION</text>

        <rect x="50" y="515" width="250" height="85" rx="6" fill="#ff8282" opacity="0.08" stroke="#ff8282" strokeWidth="1" />
        <text x="175" y="532" textAnchor="middle" className="title" style={{ fill: '#ff8282' }}>Sync & Messaging</text>
        <text x="175" y="555" textAnchor="middle" className="detail">Push Notifications (FCM/APNs)</text>
        <text x="175" y="575" textAnchor="middle" className="detail">GraphQL Subscriptions / WebSockets</text>

        <rect x="320" y="515" width="250" height="85" rx="6" fill="#ff8282" opacity="0.08" stroke="#ff8282" strokeWidth="1" />
        <text x="445" y="532" textAnchor="middle" className="title" style={{ fill: '#ff8282' }}>DevOps & Automation</text>
        <text x="445" y="555" textAnchor="middle" className="detail">CI/CD Pipelines (Fastlane)</text>
        <text x="445" y="575" textAnchor="middle" className="detail">Over-The-Air (OTA) Updates</text>

        <rect x="590" y="515" width="265" height="85" rx="6" fill="#ff8282" opacity="0.08" stroke="#ff8282" strokeWidth="1" />
        <text x="722" y="532" textAnchor="middle" className="title" style={{ fill: '#ff8282' }}>Monitoring & Stability</text>
        <text x="722" y="555" textAnchor="middle" className="detail">Crashlytics / Real-time Logs</text>
        <text x="722" y="575" textAnchor="middle" className="detail">Performance Profiling & Metrics</text>
      </g>
    </svg>
  );
}