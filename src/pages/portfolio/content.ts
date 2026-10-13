export const portfolioContent = {
  name: 'Matheus Coutinho',
  role: 'Full Stack Developer',
  location: 'Manaus, AM',
  email: 'coutfernandes@gmail.com',
  social: {
    github: 'https://github.com/Coutfernandes',
    linkedin: 'https://www.linkedin.com/in/matheus-fernandes-coutinho-27512a328/',
  },
  stack: {
    languages: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
    frameworks: ['Django', 'React'],
    infrastructure: ['MySQL', 'PostgreSQL', 'Docker', 'Nginx', 'VPS'],
    ai: ['YOLOv8', 'RAG', 'Gemini', 'LangChain'],
  },
  projects: [
    { number: '01', name: 'Manaus Tour AI', href: 'https://github.com/Coutfernandes/manaus-tour-ai', descriptionKey: 'projects.manausTour' },
    { number: '02', name: 'Guardião EPI', href: 'https://github.com/Coutfernandes/guardiao-epi', descriptionKey: 'projects.guardiao' },
    { number: '03', name: 'ToVerde', href: 'https://github.com/Coutfernandes/ToVerde', descriptionKey: 'projects.toVerde' },
    { number: '04', name: 'Portal de Solicitações', href: 'https://github.com/Coutfernandes/portal-solicitacoes', descriptionKey: 'projects.portal' },
  ],
  technologyChips: ['Python', 'Django', 'React', 'Docker', 'YOLOv8', 'Gemini'],
} as const