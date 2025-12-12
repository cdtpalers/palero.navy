import React from 'react';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="py-12 animate-fade-in">
       <h2 className="text-3xl font-bold text-white mb-2">Training & Intel</h2>
       <p className="text-tokyo-comment mb-12">Academic degrees and military certifications.</p>

       <div className="space-y-4">
         {EDUCATION_DATA.map((edu) => (
           <div key={edu.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-tokyo-bg_dark rounded-lg border border-transparent hover:border-tokyo-comment/30 transition-colors">
             <div className="mb-4 md:mb-0">
               <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
               <div className="text-tokyo-blue">{edu.institution}</div>
             </div>
             <div className="text-right md:w-1/2">
                <div className="font-mono text-xs text-tokyo-comment mb-1">{edu.year}</div>
                <div className="text-sm text-tokyo-fg/70">{edu.details}</div>
             </div>
           </div>
         ))}
       </div>

       <div className="mt-16 p-6 border border-dashed border-tokyo-comment/30 rounded-lg text-center">
         <h4 className="text-tokyo-yellow font-mono text-sm mb-2">CONTINUOUS LEARNING</h4>
         <p className="text-tokyo-comment text-sm max-w-lg mx-auto">
           Currently exploring LLM orchestration, Rust for embedded systems, and advanced Kubernetes operators.
         </p>
       </div>
    </div>
  );
};

export default Education;