import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none select-none w-screen h-screen left-0 top-0 bg-tokyo-bg_dark overflow-hidden">
        {/* Grainy Noise Layer */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-tokyo-blue blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-tokyo-purple blur-[120px] opacity-10" />
        <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-tokyo-cyan blur-[100px] opacity-10" />

        {/* Overall Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-tokyo-bg via-transparent to-transparent" />
      </div>

      <div className="min-h-[calc(100vh-64px)] flex flex-col justify-center animate-fade-in relative overflow-hidden">
        <div className="space-y-6 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tokyo-green/30 bg-tokyo-green/10 text-tokyo-green text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-tokyo-green animate-pulse"></span>
            OPERATIONAL
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Leading people, <br />
            <span className="text-tokyo-comment">changing lives.</span>
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
              <div>Baguio, Philippines</div>
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
    </>
  );
};

export default Home;