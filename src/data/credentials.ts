export interface EducationItem {
  id: string;
  degree: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  iconType: 'ai' | 'code' | 'agile' | 'cloud';
}

export interface LanguageItem {
  id: string;
  name: string;
  proficiency: 'NATIVE' | 'FLUENT' | 'INTERMEDIATE' | 'BASIC';
}

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Science and Engineering',
    location: 'India',
    period: 'Aug 2013 - Mar 2017',
  },
];

export const certificationData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'AI Agents and Agentic AI with Python & Generative AI',
    organization: 'Vanderbilt University',
    date: 'May 2025',
    iconType: 'ai',
  },
  {
    id: 'cert-2',
    title: 'Associate Developer ODC',
    organization: 'OutSystems',
    date: 'Sep 2024',
    iconType: 'code',
  },
  {
    id: 'cert-3',
    title: 'Introduction to Agile Development and Scrum',
    organization: 'IBM Skills Network',
    date: 'Aug 2022',
    iconType: 'agile',
  },
  {
    id: 'cert-4',
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    date: 'Aug 2021',
    iconType: 'cloud',
  },
];

export const languageData: LanguageItem[] = [
  {
    id: 'lang-1',
    name: 'English',
    proficiency: 'FLUENT',
  },
  {
    id: 'lang-2',
    name: 'Kannada',
    proficiency: 'NATIVE',
  },
];
