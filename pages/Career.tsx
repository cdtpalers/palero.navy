import React from 'react';
import { CAREER_DATA } from '../constants';

const Career: React.FC = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-2">Service Record</h2>
      <p className="text-tokyo-comment mb-12">Timeline of deployments and corporate roles.</p>

      <div className="relative border-l border-tokyo-comment/20 ml-3 space-y-12">
        {CAREER_DATA.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 ${
              job.type === 'MILITARY' ? 'border-tokyo-red bg-tokyo-bg' : 'border-tokyo-blue bg-tokyo-bg'
            }`}></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold text-tokyo-fg">
                {job.title}
              </h3>
              <span className="font-mono text-xs text-tokyo-comment">
                {job.period}
              </span>
            </div>
            
            <div className="text-tokyo-purple text-sm font-mono mb-4">
              @ {job.company}
            </div>

            <p className="text-tokyo-fg/80 text-sm leading-relaxed max-w-2xl mb-4">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.skills.map(skill => (
                <span key={skill} className="px-2 py-1 bg-tokyo-bg_dark border border-tokyo-comment/30 rounded text-xs text-tokyo-cyan">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;