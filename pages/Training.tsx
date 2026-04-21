import React from 'react';
import { CAREER_DATA, EDUCATION_DATA } from '../constants';

// Synthesize skills from all data sources
const getAllSkills = () => {
  const skillMap = new Map<string, { category: string; count: number }>();

  CAREER_DATA.forEach((job) => {
    job.skills.forEach((skill) => {
      const existing = skillMap.get(skill);
      skillMap.set(skill, {
        category: job.type === 'MILITARY' ? 'TACTICAL' : 'TECHNICAL',
        count: existing ? existing.count + 1 : 1,
      });
    });
  });

  return Array.from(skillMap.entries()).map(([name, data]) => ({
    name,
    category: data.category,
    count: data.count,
  }));
};

const CERTIFICATIONS = [
  { name: 'Officer Candidate School', issuer: 'U.S. Army', year: '2018', status: 'VERIFIED' },
  { name: 'Advanced Network Defense', issuer: 'Cyber Center of Excellence', year: '2020', status: 'VERIFIED' },
  { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023', status: 'ACTIVE' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2021', status: 'ACTIVE' },
];

const CORE_COMPETENCIES = [
  { area: 'Frontend', level: 95, tools: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { area: 'Backend', level: 75, tools: ['Node.js', 'PostgreSQL', 'Redis'] },
  { area: 'DevOps', level: 70, tools: ['AWS', 'Docker', 'CI/CD'] },
  { area: 'Leadership', level: 90, tools: ['Team Mgmt', 'Risk Assessment', 'Strategic Planning'] },
  { area: 'Cybersecurity', level: 80, tools: ['Network Defense', 'Threat Analysis', 'OPSEC'] },
];

const Training: React.FC = () => {
  const skills = getAllSkills();

  return (
    <div className="py-12 md:py-20 animate-fade-in">
      {/* Header */}
      <div className="mb-10">
        <p className="text-tokyo-comment font-mono text-sm mb-2 tracking-widest">// CAPABILITY ASSESSMENT</p>
        <h1 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          <span className="text-tokyo-blue">TRAINING_</span>
          <span className="text-tokyo-fg">&amp;_SKILLS</span>
        </h1>
        <p className="text-tokyo-comment text-sm max-w-xl leading-relaxed">
          Technical proficiencies and certifications acquired through military service
          and professional software engineering.
        </p>
      </div>

      {/* Core Competencies */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-tokyo-green font-mono text-sm">▸</span>
          <h2 className="text-xl font-bold font-mono text-tokyo-fg">CORE_COMPETENCIES</h2>
          <div className="flex-1 border-t border-tokyo-comment/10"></div>
        </div>
        <div className="space-y-4">
          {CORE_COMPETENCIES.map((comp, idx) => (
            <div
              key={comp.area}
              className="glass rounded-lg p-5 hover:border-tokyo-comment/15 transition-all duration-300 hover:shadow-lg hover:shadow-tokyo-blue/5"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono font-bold text-sm text-tokyo-fg">{comp.area}</h3>
                <span className="font-mono text-xs text-tokyo-cyan">{comp.level}%</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-tokyo-comment/10 rounded-full h-1.5 mb-3">
                <div
                  className="h-1.5 rounded-full bg-gradient-to-r from-tokyo-blue to-tokyo-cyan transition-all duration-1000"
                  style={{ width: `${comp.level}%` }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {comp.tools.map((tool) => (
                  <span key={tool} className="text-[10px] font-mono text-tokyo-purple bg-tokyo-purple/5 border border-tokyo-purple/10 px-2 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-tokyo-green font-mono text-sm">▸</span>
          <h2 className="text-xl font-bold font-mono text-tokyo-fg">CERTIFICATIONS</h2>
          <div className="flex-1 border-t border-tokyo-comment/10"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={cert.name}
              className="group glass rounded-lg p-5 hover:border-tokyo-green/20 transition-all duration-300 hover:shadow-lg hover:shadow-tokyo-green/5"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-mono font-bold text-sm text-tokyo-fg group-hover:text-tokyo-green transition-colors">
                  {cert.name}
                </h3>
                <span className={`shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  cert.status === 'ACTIVE'
                    ? 'text-tokyo-green border-tokyo-green/30 bg-tokyo-green/5'
                    : 'text-tokyo-cyan border-tokyo-cyan/30 bg-tokyo-cyan/5'
                }`}>
                  {cert.status}
                </span>
              </div>
              <p className="text-tokyo-comment text-xs font-mono">{cert.issuer}</p>
              <p className="text-tokyo-comment/60 text-xs font-mono mt-1">Issued: {cert.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Cloud */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-tokyo-green font-mono text-sm">▸</span>
          <h2 className="text-xl font-bold font-mono text-tokyo-fg">SKILL_MATRIX</h2>
          <div className="flex-1 border-t border-tokyo-comment/10"></div>
        </div>
        <div className="glass rounded-lg p-6">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200 hover:scale-105 cursor-default ${
                  skill.category === 'TECHNICAL'
                    ? 'text-tokyo-cyan border-tokyo-cyan/20 bg-tokyo-cyan/5 hover:bg-tokyo-cyan/10'
                    : 'text-tokyo-red border-tokyo-red/20 bg-tokyo-red/5 hover:bg-tokyo-red/10'
                }`}
              >
                {skill.name}
              </span>
            ))}
            {/* Additional static skills */}
            {['Git', 'Docker', 'Linux', 'Agile', 'CI/CD', 'REST APIs', 'GraphQL', 'Tailwind CSS', 'Vite', 'WebSocket'].map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1.5 rounded border text-tokyo-cyan border-tokyo-cyan/20 bg-tokyo-cyan/5 hover:bg-tokyo-cyan/10 transition-all duration-200 hover:scale-105 cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
