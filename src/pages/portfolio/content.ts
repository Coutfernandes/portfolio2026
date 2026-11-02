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
    { number: '01', name: 'Manaus Tour AI', href: 'https://manaus-tour-ai.vercel.app/', github: 'https://github.com/Coutfernandes/manaus-tour-ai', image: '/projects/manaus-tour-ai.png', descriptionKey: 'projects.manausTour' },
    { number: '02', name: 'Portal de Solicitações', href: 'https://portal-solicitacoes-smoky.vercel.app/', github: 'https://github.com/Coutfernandes/portal-solicitacoes', image: '/projects/portal-solicitacoes.png', descriptionKey: 'projects.portal' },
    { number: '03', name: 'Casa das Letras', href: 'https://casa-das-letras.vercel.app/', github: 'https://github.com/Coutfernandes/casa-das-letras', image: '/projects/casa-das-letra.png', descriptionKey: 'projects.casaDasLetras' },
  ],
  technologyChips: ['Python', 'Django', 'React', 'Docker', 'YOLOv8', 'Gemini'],
} as const