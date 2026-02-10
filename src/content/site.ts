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
    stack: ['HTML', 'CSS', 'JavaScript','TypeScript', 'Node.js', 'Express', 'MongoDB'],
    description: 'A web application built for scale.',
    links: {
      live: 'https://job-tracking-application-project.vercel.app/',
      github: 'https://github.com/thanheuro20057-cloud/job-tracking-application-project',
    },
    image: "/images/JobTrackerApp.png",
  },
  {
    id: 'project-2',
    title: 'Project Beta',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    description: 'Real-time collaboration platform for remote teams.',
    links: {
      live: 'https://example.com',
      github: null,
    },
    image: '/images/project-2.jpg',
  },
  {
    id: 'project-3',
    title: 'Project Gamma',
    stack: ['Vue', 'Firebase', 'Figma'],
    description: 'Design system and component library.',
    links: {
      live: null,
      github: 'https://github.com/example',
    },
    image: '/images/project-3.jpg',
  },
  {
    id: 'project-4',
    title: 'Project Delta',
    stack: ['Svelte', 'Rust', 'WebAssembly'],
    description: 'Performance-critical visualization tools.',
    links: {
      live: 'https://example.com',
      github: 'https://github.com/example',
    },
    image: '/images/project-4.jpg',
  },
  {
    id: 'project-5',
    title: 'Project Epsilon',
    stack: ['React Native', 'Expo'],
    description: 'Cross-platform mobile app for fitness tracking.',
    links: {
      live: null,
      github: 'https://github.com/example',
    },
    image: '/images/project-5.jpg',
  },
] as const;

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Tech Company',
    period: '2022 — Present',
    description: 'Leading frontend architecture and design systems.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup Inc',
    period: '2020 — 2022',
    description: 'Built customer-facing dashboards and internal tools.',
  },
  {
    role: 'Junior Developer',
    company: 'Agency XYZ',
    period: '2018 — 2020',
    description: 'Delivered client websites and landing pages.',
  },
] as const;

export const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University Name',
    period: '2014 — 2018',
  },
] as const;

export const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'Figma',
  'PostgreSQL',
  'Vercel',
  'Git',
] as const;

export const contact = {
  email: 'hello@example.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/example' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/example' },
    { label: 'Twitter', url: 'https://twitter.com/example' },
    { label: 'Dribbble', url: 'https://dribbble.com/example' },
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
