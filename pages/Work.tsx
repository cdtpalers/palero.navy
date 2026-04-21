import React, { useState } from 'react';
import { PROJECT_DATA } from '../constants';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const statuses = ['ALL', 'DEPLOYED', 'IN_PROGRESS', 'CLASSIFIED'];
  const filtered = filter === 'ALL' ? PROJECT_DATA : PROJECT_DATA.filter(p => p.status === filter);

  return (
    <div className="py-12 md:py-20 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <p className="text-tokyo-comment font-mono text-sm mb-2 tracking-widest">// OPERATIONS LOG</p>
        <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          <span className="text-tokyo-blue">PROJECT_</span>
          <span className="text-tokyo-fg">PORTFOLIO</span>
        </h1>
        <p className="text-tokyo-comment text-sm max-w-xl leading-relaxed">
          Mission-critical applications and systems built with tactical precision. Each project represents
          a deployment in the ongoing mission to build better software.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`font-mono text-xs px-4 py-2 rounded border transition-all duration-200 ${
              filter === s
                ? 'bg-tokyo-blue/10 border-tokyo-blue/40 text-tokyo-blue'
                : 'border-tokyo-comment/20 text-tokyo-comment hover:text-tokyo-fg hover:border-tokyo-comment/40'
            }`}
          >
            {s.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="space-y-4">
        {filtered.map((project, idx) => (
          <div
            key={project.id}
            className="group bg-tokyo-bg_dark/50 border border-tokyo-comment/10 rounded-lg p-6 hover:border-tokyo-blue/30 transition-all duration-300"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-2 h-2 rounded-full ${
                    project.status === 'DEPLOYED' ? 'bg-tokyo-green shadow-[0_0_6px] shadow-tokyo-green/50' :
                    project.status === 'IN_PROGRESS' ? 'bg-tokyo-yellow shadow-[0_0_6px] shadow-tokyo-yellow/50' :
                    'bg-tokyo-red shadow-[0_0_6px] shadow-tokyo-red/50'
                  }`}></span>
                  <h2 className="font-mono font-bold text-lg text-tokyo-fg group-hover:text-tokyo-blue transition-colors">
                    {project.title}
                  </h2>
                </div>
                <p className="text-tokyo-comment text-sm leading-relaxed mb-4 pl-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 pl-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[11px] font-mono text-tokyo-purple bg-tokyo-purple/5 border border-tokyo-purple/15 px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${
                  project.status === 'DEPLOYED' ? 'text-tokyo-green border-tokyo-green/30 bg-tokyo-green/5' :
                  project.status === 'IN_PROGRESS' ? 'text-tokyo-yellow border-tokyo-yellow/30 bg-tokyo-yellow/5' :
                  'text-tokyo-red border-tokyo-red/30 bg-tokyo-red/5'
                }`}>
                  {project.status}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    className="text-tokyo-cyan text-xs font-mono hover:underline transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [OPEN_LINK →]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-tokyo-comment font-mono text-sm">NO_OPERATIONS_FOUND // Adjust filter parameters.</p>
        </div>
      )}
    </div>
  );
};

export default Work;
