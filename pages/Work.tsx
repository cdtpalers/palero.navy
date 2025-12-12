import React from 'react';
import { PROJECT_DATA } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-2">Operational Outputs</h2>
      <p className="text-tokyo-comment mb-12">Selected works from civilian and military tenure.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECT_DATA.map((project) => (
          <div 
            key={project.id}
            className="group relative p-6 bg-tokyo-bg_dark border border-tokyo-comment/20 rounded-lg hover:border-tokyo-blue/50 transition-all hover:translate-y-[-2px]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`text-xs font-mono px-2 py-1 rounded ${
                project.status === 'DEPLOYED' ? 'bg-tokyo-green/20 text-tokyo-green' :
                project.status === 'CLASSIFIED' ? 'bg-tokyo-red/20 text-tokyo-red' :
                'bg-tokyo-yellow/20 text-tokyo-yellow'
              }`}>
                {project.status}
              </div>
              <svg className="w-5 h-5 text-tokyo-comment group-hover:text-tokyo-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-tokyo-fg mb-2 group-hover:text-tokyo-cyan transition-colors">
              {project.title}
            </h3>
            
            <p className="text-tokyo-comment text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs font-mono text-tokyo-purple">
                  #{tech}
                </span>
              ))}
            </div>
            
            {project.link && project.link !== '#' && (
              <a 
                href={project.link} 
                className="absolute inset-0" 
                aria-label={`View project ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;