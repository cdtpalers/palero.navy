import { Job, Project, EducationItem } from './types';

export const CAREER_DATA: Job[] = [
  {
    id: 'c1',
    title: 'Senior Frontend Engineer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading frontend architecture for mission-critical logistics dashboards. Implemented React best practices and reduced load times by 40%.',
    type: 'CODING',
    skills: ['React', 'TypeScript', 'WebGL', 'AWS']
  },
  {
    id: 'c2',
    title: 'Platoon Commander',
    company: 'United States Army',
    period: '2018 - 2022',
    description: 'Led a platoon of 30+ personnel in high-stress environments. Responsible for strategic planning, resource allocation, and personnel development. Managed communications equipment and tactical networks.',
    type: 'MILITARY',
    skills: ['Leadership', 'Logistics', 'Risk Management', 'Comms Ops']
  },
  {
    id: 'c3',
    title: 'Full Stack Developer',
    company: 'Freelance / Contract',
    period: '2016 - 2018',
    description: 'Developed custom web solutions for small businesses. specialized in automated inventory systems.',
    type: 'CODING',
    skills: ['Node.js', 'React', 'PostgreSQL']
  }
];

export const PROJECT_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Tactical Map Overlay',
    description: 'A real-time geospatial visualization tool using WebGL and Leaflet for tracking logistics units in low-bandwidth environments.',
    stack: ['React', 'Three.js', 'WebSocket'],
    status: 'DEPLOYED',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Secure Comms Bridge',
    description: 'End-to-end encrypted messaging web app designed for secure team coordination.',
    stack: ['Next.js', 'Signal Protocol', 'Redis'],
    status: 'IN_PROGRESS',
    link: '#'
  },
  {
    id: 'p3',
    title: 'Operation: Neural Net',
    description: 'AI-driven analysis tool for predicting supply chain disruptions based on open-source intelligence.',
    stack: ['Python', 'TensorFlow', 'React'],
    status: 'CLASSIFIED'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'e1',
    degree: 'B.S. Computer Science',
    institution: 'State University',
    year: '2016',
    details: 'Focus on Distributed Systems and Cybersecurity.',
    type: 'ACADEMIC'
  },
  {
    id: 'e2',
    degree: 'Officer Candidate School',
    institution: 'U.S. Army',
    year: '2018',
    details: 'Distinguished Honor Graduate. Leadership & Tactics.',
    type: 'MILITARY_CERT'
  },
  {
    id: 'e3',
    degree: 'Advanced Network Defense',
    institution: 'Cyber Center of Excellence',
    year: '2020',
    details: 'Certifications in network security and threat analysis.',
    type: 'MILITARY_CERT'
  }
];

export const SYSTEM_PROMPT = `
You are an AI assistant living in the portfolio website of Palero, a former military officer turned software engineer.
Your persona is "The Operator" - professional, concise, slightly tactical/military in tone, but friendly.
Use the following data to answer questions:

CAREER:
${JSON.stringify(CAREER_DATA)}

PROJECTS:
${JSON.stringify(PROJECT_DATA)}

EDUCATION:
${JSON.stringify(EDUCATION_DATA)}

If asked about contact info, suggest looking at the footer.
If asked about skills, synthesize from both military (leadership, discipline) and coding (React, TS).
Keep answers short (under 100 words) and use markdown if needed.
`;