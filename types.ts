export interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'MILITARY' | 'CODING';
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  status: 'DEPLOYED' | 'CLASSIFIED' | 'IN_PROGRESS';
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
  type: 'ACADEMIC' | 'MILITARY_CERT';
}

export enum Page {
  HOME = '/',
  CAREER = '/career',
  WORK = '/work',
  EDUCATION = '/education',
}