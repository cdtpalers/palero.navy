import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.png';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center animate-fade-in relative overflow-hidden">
      {/* Background Image with Aesthetic Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 bg-cover bg-[center_right] md:bg-right bg-no-repeat opacity-20 md:opacity-40 mix-blend-screen"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlays for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-tokyo-bg via-tokyo-bg/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-tokyo-bg via-tokyo-bg/50 to-transparent" />
      </div>

      <div className="space-y-6 max-w-2xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tokyo-green/30 bg-tokyo-green/10 text-tokyo-green text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-tokyo-green animate-pulse"></span>
          OPERATIONAL
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
          Building Bridges. <br />
          <span className="text-tokyo-comment">Securing Networks.</span>
        </h1>

        <p className="text-xl text-tokyo-fg max-w-xl leading-relaxed">
          I bridge the gap between tactical discipline and modern software engineering.
          Specializing in <span className="text-tokyo-blue">React</span>, <span className="text-tokyo-purple">TypeScript</span>, and mission-critical applications.
        </p>

        <div className="flex gap-4 pt-4">
          <Link
            to="/work"
            className="px-6 py-3 bg-tokyo-blue text-tokyo-bg_dark font-bold rounded hover:bg-tokyo-cyan transition-colors"
          >
            View Operations
          </Link>
          <Link
            to="/career"
            className="px-6 py-3 border border-tokyo-comment text-tokyo-fg rounded hover:border-tokyo-fg transition-colors"
          >
            Service Record
          </Link>
        </div>

        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-tokyo-comment border-t border-tokyo-comment/20">
          <div>
            <div className="text-tokyo-purple mb-1">CURRENT STATUS</div>
            <div>Developing @ TechCorp</div>
          </div>
          <div>
            <div className="text-tokyo-purple mb-1">LOCATION</div>
            <div>Tokyo, JP (Remote)</div>
          </div>
          <div>
            <div className="text-tokyo-purple mb-1">CLEARANCE</div>
            <div>Secret (Inactive)</div>
          </div>
          <div>
            <div className="text-tokyo-purple mb-1">UPTIME</div>
            <div>99.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;