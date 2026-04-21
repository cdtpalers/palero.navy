import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="py-12 md:py-20 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <p className="text-tokyo-comment font-mono text-sm mb-2 tracking-widest">// ACADEMIC DOSSIER</p>
        <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          <span className="text-tokyo-blue">EDUCATION_</span>
          <span className="text-tokyo-fg">RECORD</span>
        </h1>
        <p className="text-tokyo-comment text-sm max-w-xl leading-relaxed">
          Formal education and military certifications that form the foundation
          of operational and technical expertise.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-4">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={item.id}
            className="group glass rounded-lg p-6 hover:border-tokyo-blue/20 transition-all duration-300 hover:shadow-lg hover:shadow-tokyo-blue/5"
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`mt-1 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                  item.type === 'ACADEMIC'
                    ? 'bg-tokyo-blue/10 border-tokyo-blue/20 text-tokyo-blue'
                    : 'bg-tokyo-red/10 border-tokyo-red/20 text-tokyo-red'
                }`}>
                  {item.type === 'ACADEMIC' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 10 3 12 0v-5"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  )}
                </div>

                <div>
                  <h2 className="font-mono font-bold text-lg text-tokyo-fg group-hover:text-tokyo-blue transition-colors">
                    {item.degree}
                  </h2>
                  <p className="text-tokyo-cyan text-sm font-mono">{item.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:shrink-0">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                  item.type === 'ACADEMIC'
                    ? 'text-tokyo-blue border-tokyo-blue/30 bg-tokyo-blue/5'
                    : 'text-tokyo-red border-tokyo-red/30 bg-tokyo-red/5'
                }`}>
                  {item.type === 'ACADEMIC' ? 'ACADEMIC' : 'MIL_CERT'}
                </span>
                <span className="text-tokyo-comment text-xs font-mono bg-tokyo-bg_dark px-2.5 py-1 rounded border border-tokyo-comment/10">
                  {item.year}
                </span>
              </div>
            </div>

            <p className="text-tokyo-comment text-sm leading-relaxed pl-14">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
