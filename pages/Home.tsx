import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../types';
import { PROJECT_DATA, CAREER_DATA } from '../constants';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 50 }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);
  return <>{displayed}<span className="animate-cursor-blink text-tokyo-red">_</span></>;
};

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  const stats = [
    { label: 'DEPLOYMENTS', value: PROJECT_DATA.filter(p => p.status === 'DEPLOYED').length.toString(), color: 'text-tokyo-green' },
    { label: 'IN_PROGRESS', value: PROJECT_DATA.filter(p => p.status === 'IN_PROGRESS').length.toString(), color: 'text-tokyo-yellow' },
    { label: 'CLASSIFIED', value: PROJECT_DATA.filter(p => p.status === 'CLASSIFIED').length.toString(), color: 'text-tokyo-red' },
    { label: 'ROLES', value: CAREER_DATA.length.toString(), color: 'text-tokyo-cyan' },
  ];

  return (
    <div className={`py-12 md:py-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

      {/* Hero Section */}
      <section className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-tokyo-blue/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-48 h-48 bg-tokyo-purple/5 rounded-full blur-3xl pointer-events-none"></div>

        <p className="text-tokyo-comment font-mono text-sm mb-4 tracking-widest">// TACTICAL DEVELOPER</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-tokyo-blue">PALERO</span>
          <span className="text-tokyo-comment">.</span>
          <span className="text-tokyo-cyan">NAVY</span>
        </h1>
        <div className="font-mono text-lg md:text-xl text-tokyo-fg mb-8 h-8">
          <TypewriterText text="Operational Software Engineering & Design" delay={40} />
        </div>
        <p className="text-tokyo-comment max-w-2xl text-sm md:text-base leading-relaxed mb-10">
          Former military officer turned software engineer. Bridging tactical discipline
          with modern web development. Building mission-critical applications with precision
          and purpose.
        </p>
        <div className="flex flex-wrap gap-4">
          <NavLink
            to={Page.WORK}
            className="inline-flex items-center gap-2 bg-tokyo-blue/10 border border-tokyo-blue/30 text-tokyo-blue px-6 py-3 rounded font-mono text-sm hover:bg-tokyo-blue/20 hover:border-tokyo-blue/50 transition-all duration-200"
          >
            <span>VIEW_PROJECTS</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </NavLink>
          <NavLink
            to={Page.CAREER}
            className="inline-flex items-center gap-2 border border-tokyo-comment/30 text-tokyo-comment px-6 py-3 rounded font-mono text-sm hover:text-tokyo-fg hover:border-tokyo-fg/30 transition-all duration-200"
          >
            <span>SERVICE_RECORD</span>
          </NavLink>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass rounded-lg p-5 hover:border-tokyo-comment/20 transition-all duration-200 hover:shadow-lg hover:shadow-tokyo-blue/5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <p className={`text-3xl font-bold font-mono ${stat.color}`}>{stat.value}</p>
              <p className="text-tokyo-comment text-xs font-mono mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-tokyo-green font-mono text-sm">▸</span>
          <h2 className="text-xl font-bold font-mono text-tokyo-fg">RECENT_OPERATIONS</h2>
          <div className="flex-1 border-t border-tokyo-comment/10"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECT_DATA.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-lg p-5 hover:border-tokyo-blue/20 transition-all duration-300 hover:shadow-lg hover:shadow-tokyo-blue/5"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono font-bold text-tokyo-fg text-sm group-hover:text-tokyo-blue transition-colors">{project.title}</h3>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  project.status === 'DEPLOYED' ? 'text-tokyo-green border-tokyo-green/30 bg-tokyo-green/5' :
                  project.status === 'IN_PROGRESS' ? 'text-tokyo-yellow border-tokyo-yellow/30 bg-tokyo-yellow/5' :
                  'text-tokyo-red border-tokyo-red/30 bg-tokyo-red/5'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-tokyo-comment text-xs leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-tokyo-purple bg-tokyo-purple/5 border border-tokyo-purple/10 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Nav */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-tokyo-green font-mono text-sm">▸</span>
          <h2 className="text-xl font-bold font-mono text-tokyo-fg">QUICK_NAV</h2>
          <div className="flex-1 border-t border-tokyo-comment/10"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: '_WORK', desc: 'Project portfolio', path: Page.WORK, icon: '⚡' },
            { label: '_CAREER', desc: 'Service history', path: Page.CAREER, icon: '🎖️' },
            { label: '_EDUCATION', desc: 'Academic record', path: Page.EDUCATION, icon: '📡' },
            { label: '_TRAINING', desc: 'Certs & skills', path: Page.TRAINING, icon: '🔧' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="group p-4 glass rounded-lg hover:border-tokyo-cyan/20 transition-all duration-200 hover:shadow-lg hover:shadow-tokyo-cyan/5"
            >
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <p className="font-mono text-sm text-tokyo-fg group-hover:text-tokyo-cyan transition-colors">{item.label}</p>
              <p className="text-tokyo-comment text-xs mt-1">{item.desc}</p>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
