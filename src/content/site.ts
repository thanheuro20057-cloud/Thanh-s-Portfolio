/**
 * Site content — edit this file to customize your portfolio
 */

export const site = {
  name: 'Tuan Thanh Nguyen',
  title: 'Software Engineer Technology Student',
  tagline: 'Welcome to my portfolio',
  shortBio:
    'I am a software engineering technology student at Conestoga College. I am interested in web development and software development.',
} as const;

export const projects = [
  {
    id: 'project-1',
    title: 'Full Stack Web Application',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'JavaScript','HTML', 'Express', 'Next.js'],
    description: 'A web application built for students to track their job applications and interviews.',
    links: {
      live: 'https://job-tracking-application-project.vercel.app/',
      github: 'https://github.com/thanheuro20057-cloud/job-tracking-application-project',
    },
    image: "/images/JobTrackerApp.png",
  },
  {
    id: 'project-2',
    title: 'User Activity Analytics Reporting System',
    stack: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
    description: 'A system that analyzes user activity data and generates reports.',
    links: {
      live: 'https://github.com/thanheuro20057-cloud/user-activity-analytics-reporting-system',
      github: 'https://github.com/thanheuro20057-cloud/user-activity-analytics-reporting-system',
    },
    image: '/images/UAARS.png',
  },


] as const;

export const experience = [
  {
    role: 'Server/Busser',
    company: 'Pho Anh Vu Waterloo Restaurant',
    period: '2024 — Present',
    description: 'Responsible for serving customers, taking orders, and serving food.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Self-employed',
    period: '2024 — Present',
    description: 'Built web applications for clients and self-employed.',
  },
  {
    role: 'Junior Developer/Secretary',
    company: 'Conestoga Student Inc',
    period: '2024 — 2025',
    description: 'Responsible for delivering client websites and landing pages.',
  },
] as const;

export const education = [
  {
    degree: 'Software Engineering Technology Advanced Diploma',
    school: 'Conestoga College',
    period: '2024 — 2027',
    description: 'A program that teaches the fundamentals of software engineering and technology.',
  },
] as const;

export const skills = [
  'TypeScript',
  'Python',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Tailwind CSS',
  'HTML',
  'CSS',
  'JavaScript',
  'Next.js',
  'Figma',
  'Github',
  'Jira',
  'AzureDevOps',
] as const;

export const contact = {
  email: 'hello@example.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/thanheuro20057-cloud' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/thanh-nguyen-tuan-593975333' },

  ],
} as const;

export const sectionIds = [
  'intro',
  'about',
  'projects',
  'experience',
  'skills',
  'contact',
  'playground',
] as const;
