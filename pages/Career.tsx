import React from 'react';
import { CAREER_DATA } from '../constants';

const Career: React.FC = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <p className="text-tokyo-comment font-mono text-sm mb-2 tracking-widest">// PERSONNEL FILE</p>
        <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          <span className="text-tokyo-blue">SERVICE_</span>
          <span className="text-tokyo-fg">RECORD</span>
        </h1>
        <p className="text-tokyo-comment text-sm max-w-xl leading-relaxed">
          A chronicle of roles spanning military command and software engineering.
          Each position represents a mission completed and experience gained.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-tokyo-comment/20"></div>

        <div className="space-y-8">
          {CAREER_DATA.map((job, idx) => (
            <div key={job.id} className="relative pl-8 md:pl-10 group" style={{ animationDelay: `${idx * 150}ms` }}>
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 transition-all duration-300 ${
                job.type === 'MILITARY'
                  ? 'border-tokyo-red bg-tokyo-red/10 group-hover:bg-tokyo-red/30 group-hover:shadow-[0_0_10px] group-hover:shadow-tokyo-red/30'
                  : 'border-tokyo-cyan bg-tokyo-cyan/10 group-hover:bg-tokyo-cyan/30 group-hover:shadow-[0_0_10px] group-hover:shadow-tokyo-cyan/30'
              }`}></div>

              {/* Card */}
              <div className="glass rounded-lg p-6 hover:border-tokyo-comment/15 transition-all duration-300 hover:shadow-lg hover:shadow-tokyo-blue/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h2 className="font-mono font-bold text-lg text-tokyo-fg group-hover:text-tokyo-blue transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-tokyo-cyan text-sm font-mono">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                      job.type === 'MILITARY'
                        ? 'text-tokyo-red border-tokyo-red/30 bg-tokyo-red/5'
                        : 'text-tokyo-cyan border-tokyo-cyan/30 bg-tokyo-cyan/5'
                    }`}>
                      {job.type}
                    </span>
                    <span className="text-tokyo-comment text-xs font-mono">{job.period}</span>
                  </div>
                </div>

                <p className="text-tokyo-comment text-sm leading-relaxed mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-[11px] font-mono text-tokyo-purple bg-tokyo-purple/5 border border-tokyo-purple/15 px-2.5 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
