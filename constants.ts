import { Job, Project, EducationItem } from './types';

export const CAREER_DATA: Job[] = [
  {
    id: 'c1',
    title: 'Data Analytics & Machine Learning Researcher',
    company: 'Institutional Research',
    period: '2024 - Present',
    description: 'Leveraged Python and R to develop machine learning models focused on institutional readiness and performance metrics. Competed in an intensive data analytics datathon, translating complex datasets into actionable operational insights and presenting data-driven strategies to leadership.',
    type: 'CODING',
    skills: ['Python', 'R', 'Machine Learning', 'Data Analytics', 'Predictive Modeling']
  },
  {
    id: 'c2',
    title: 'Embedded Systems Engineer',
    company: 'Defense & Automation Projects',
    period: '2023 - Present',
    description: 'Designed and programmed sensor-based systems utilizing Arduino and ESP32 microcontrollers. Developed functional prototypes for automated sentry units and environmental monitors, integrating hardware and software for practical defense and situational awareness applications.',
    type: 'CODING',
    skills: ['Arduino', 'ESP32', 'C/C++', 'IoT', 'Sensor Integration']
  },
  {
    id: 'c3',
    title: 'GIS Analyst & Tactical Mapper',
    company: 'Military Geospatial Operations',
    period: '2023 - Present',
    description: 'Conducted advanced geographic analysis and military mapping using QGIS. Executed georeferencing of campus topographies, digitized simulated enemy positions, and generated detailed thematic maps to support tactical planning and terrain analysis.',
    type: 'MILITARY',
    skills: ['QGIS', 'Georeferencing', 'Spatial Analysis', 'Terrain Analysis', 'Military Mapping']
  },
  {
    id: 'c4',
    title: 'Naval Operations & Navigation Officer',
    company: 'Naval Science Division',
    period: '2022 - Present',
    description: 'Applied advanced naval science principles to solve complex maritime navigation challenges. Executed comprehensive voyage planning, calculated complex Maneuvering Board problems, and analyzed technical specifications of naval vessels for precise operational routing.',
    type: 'MILITARY',
    skills: ['Voyage Planning', 'Maneuvering Board', 'Naval Science', 'Maritime Navigation', 'Vessel Analysis']
  },
  {
    id: 'c5',
    title: 'Organizational Development Lead',
    company: 'Chivalry Battalion / Institutional Leadership',
    period: '2022 - Present',
    description: 'Spearheaded multiple initiatives aimed at improving peer mentorship, facility serviceability, and knowledge sharing. Authored the Battalion Squadding System framework, managed Project AYOS for facility optimization, and synthesized AYLC leadership concepts into a digital sharing platform.',
    type: 'MILITARY',
    skills: ['Strategic Planning', 'Mentorship', 'Systems Optimization', 'Facility Management', 'Policy Development']
  }
];

export const PROJECT_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Predictive Modeling for Operational Readiness',
    description: 'Machine learning models focused on institutional readiness and performance metrics. Competed in an intensive data analytics datathon, translating complex datasets into actionable operational insights.',
    stack: ['Python', 'R', 'scikit-learn', 'Pandas'],
    status: 'DEPLOYED'
  },
  {
    id: 'p2',
    title: 'Automated Security & Environmental Monitoring',
    description: 'Sensor-based systems utilizing Arduino and ESP32 microcontrollers. Functional prototypes for automated sentry units and environmental monitors for defense and situational awareness.',
    stack: ['Arduino', 'ESP32', 'C/C++', 'IoT Sensors'],
    status: 'DEPLOYED'
  },
  {
    id: 'p3',
    title: 'Tactical Mapping & Spatial Analysis',
    description: 'Advanced geographic analysis and military mapping using QGIS. Georeferencing of campus topographies, digitized simulated enemy positions, and detailed thematic map generation.',
    stack: ['QGIS', 'GIS', 'Geospatial Data', 'Cartography'],
    status: 'DEPLOYED'
  },
  {
    id: 'p4',
    title: 'Voyage Planning & Naval Navigation',
    description: 'Comprehensive voyage planning system applying advanced naval science principles. Maneuvering Board problem calculations and vessel specification analysis for precise operational routing.',
    stack: ['Naval Science', 'Navigation', 'Maneuvering Board'],
    status: 'DEPLOYED'
  },
  {
    id: 'p5',
    title: 'Battalion Squadding System',
    description: 'Pilot framework authored for the Chivalry Battalion to institutionalize effective peer-to-peer mentorship. Includes Project AYOS for facility optimization and an AYLC digital leadership platform.',
    stack: ['Policy Design', 'Systems Optimization', 'Digital Platforms'],
    status: 'IN_PROGRESS'
  },
  {
    id: 'p6',
    title: 'Digital Storytelling & Environmental Security',
    description: 'Educational video project on environmental security combined with AI-scripted graphic comic book series. Communicating complex themes through innovative multimedia formats.',
    stack: ['Video Production', 'AI Scripting', 'Storyboarding', 'Digital Media'],
    status: 'DEPLOYED'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'e1',
    degree: 'Ayala Young Leaders Congress (AYLC)',
    institution: 'Ayala Corporation',
    year: '2024',
    details: 'Synthesized key leadership concepts into a dedicated digital platform for peer knowledge-sharing and best practices.',
    type: 'ACADEMIC'
  },
  {
    id: 'e2',
    degree: 'Data Analytics Datathon',
    institution: 'Institutional Research Division',
    year: '2024',
    details: 'Competed in an intensive analytics competition, presenting data-driven strategies to leadership using ML models.',
    type: 'ACADEMIC'
  },
  {
    id: 'e3',
    degree: 'Naval Science & Navigation',
    institution: 'Naval Training Command',
    year: '2023',
    details: 'Advanced coursework in voyage planning, Maneuvering Board, and maritime navigation.',
    type: 'MILITARY_CERT'
  },
  {
    id: 'e4',
    degree: 'GIS & Military Mapping',
    institution: 'Geospatial Intelligence Unit',
    year: '2023',
    details: 'Certified in QGIS operations, georeferencing, terrain analysis, and tactical map production.',
    type: 'MILITARY_CERT'
  },
  {
    id: 'e5',
    degree: 'Embedded Systems & IoT',
    institution: 'Engineering Division',
    year: '2023',
    details: 'Hands-on training in Arduino, ESP32 microcontrollers, and sensor-based defense system prototyping.',
    type: 'MILITARY_CERT'
  }
];

export const SYSTEM_PROMPT = `
You are an AI assistant living in the portfolio website of Palero, a military cadet and aspiring software engineer.
Your persona is "The Operator" - professional, concise, slightly tactical/military in tone, but friendly.
Use the following data to answer questions:

CAREER:
${JSON.stringify(CAREER_DATA)}

PROJECTS:
${JSON.stringify(PROJECT_DATA)}

EDUCATION:
${JSON.stringify(EDUCATION_DATA)}

If asked about contact info, suggest looking at the footer.
If asked about skills, synthesize from both military (leadership, GIS, naval science) and technical (Python, ML, embedded systems, web dev).
Keep answers short (under 100 words) and use markdown if needed.
`;