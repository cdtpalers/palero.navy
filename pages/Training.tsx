import React from 'react';

interface TrainingModule {
    id: string;
    title: string;
    provider: string;
    date: string;
    status: 'COMPLETED' | 'IN_PROGRESS';
    description: string;
    type: 'TECHNICAL' | 'TACTICAL';
}

const Training: React.FC = () => {
    const trainings: TrainingModule[] = [
        {
            id: 't1',
            title: 'Advanced React Patterns & Performance',
            provider: 'Frontend Masters',
            date: '2025',
            status: 'COMPLETED',
            description: 'Deep dive into specialized React rendering patterns, state management at scale, and performance optimization techniques for high-load applications.',
            type: 'TECHNICAL'
        },
        {
            id: 't2',
            title: 'Naval Leadership Development Course',
            provider: 'Naval War College',
            date: '2024',
            status: 'COMPLETED',
            description: 'Senior-level leadership training focused on strategic decision making, personnel management under pressure, and operational planning.',
            type: 'TACTICAL'
        },
        {
            id: 't3',
            title: 'Cloud Native Architecture',
            provider: 'AWS Certification',
            date: '2025',
            status: 'IN_PROGRESS',
            description: 'Designing resilient, high-availability systems on AWS. Focus on serverless architectures and container orchestration.',
            type: 'TECHNICAL'
        },
        {
            id: 't4',
            title: 'Operational Risk Management',
            provider: 'Navy Safety Center',
            date: '2023',
            status: 'COMPLETED',
            description: 'Systematic approach to identifying, assessing, and managing risks in high-stakes operational environments.',
            type: 'TACTICAL'
        },
        {
            id: 't5',
            title: 'Effective Technical Writing',
            provider: 'Google',
            date: '2024',
            status: 'COMPLETED',
            description: 'Structuring technical documentation for clarity and precision. Essential for bridging engineering and command communications.',
            type: 'TECHNICAL'
        }
    ];

    return (
        <div className="pt-24 pb-16 animate-fade-in relative z-10 w-full max-w-5xl mx-auto">
            <div className="flex flex-col mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 self-start rounded-full border border-tokyo-yellow/30 bg-tokyo-yellow/10 text-tokyo-yellow text-xs font-mono mb-4">
                    <span>// CONTINUOUS_IMPROVEMENT</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Training & <span className="text-tokyo-yellow">readiness</span>
                </h1>
                <p className="text-tokyo-fg text-lg max-w-2xl leading-relaxed">
                    Maintaining peak performance through rigorous technical study and tactical drills.
                    Bridging the gap between code and command.
                </p>
            </div>

            <div className="grid gap-6">
                {trainings.map((training, index) => (
                    <div
                        key={training.id}
                        className="group relative bg-tokyo-bg_dark/50 border border-tokyo-comment/20 rounded-lg p-6 hover:border-tokyo-yellow/50 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 text-6xl font-bold text-tokyo-bg flex select-none pointer-events-none glow-text">
                            0{index + 1}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${training.type === 'TECHNICAL'
                                            ? 'bg-tokyo-blue/10 text-tokyo-blue border border-tokyo-blue/20'
                                            : 'bg-tokyo-green/10 text-tokyo-green border border-tokyo-green/20'
                                        }`}>
                                        {training.type}
                                    </span>
                                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${training.status === 'COMPLETED'
                                            ? 'text-tokyo-comment'
                                            : 'bg-tokyo-yellow/10 text-tokyo-yellow border border-tokyo-yellow/20 animate-pulse'
                                        }`}>
                                        {training.status === 'COMPLETED' ? 'COMPLETED' : 'IN_PROGRESS...'}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-tokyo-yellow transition-colors">
                                    {training.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-tokyo-purple mb-3 font-mono">
                                    <span>@{training.provider}</span>
                                    <span>//</span>
                                    <span>{training.date}</span>
                                </div>

                                <p className="text-tokyo-fg/80 text-sm leading-relaxed max-w-3xl">
                                    {training.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Training;
