import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { portfolioContent } from './content'

function TechStackColumns() {
  const { t } = useTranslation()

  return (
    <div className="footer-columns">
      <section className="footer-column" id="stack" aria-labelledby="stack-title">
        <div className="section-marker mono-label"><span>// 01</span><span>{t('footer.stack')}</span></div>
        <h2 id="stack-title" className="footer-column__title">{t('footer.stackTitle')}</h2>
        <div className="stack-groups">
          <div><h3 className="mono-label">{t('stack.languages')}</h3><p>{portfolioContent.stack.languages.join(' · ')}</p></div>
          <div><h3 className="mono-label">{t('stack.frameworks')}</h3><p>{portfolioContent.stack.frameworks.join(' · ')}</p></div>
          <div><h3 className="mono-label">{t('stack.infrastructure')}</h3><p>{portfolioContent.stack.infrastructure.join(' · ')}</p></div>
          <div><h3 className="mono-label">{t('stack.ai')}</h3><p>{portfolioContent.stack.ai.join(' · ')}</p></div>
        </div>
      </section>
      <section className="footer-column" id="projetos" aria-labelledby="projects-title">
        <div className="section-marker mono-label"><span>// 02</span><span>{t('footer.projects')}</span></div>
        <h2 id="projects-title" className="footer-column__title">{t('projects.title')}</h2>
        <ol className="project-list">
          {portfolioContent.projects.map((project) => <li key={project.number}><a href={project.href} target="_blank" rel="noreferrer"><span className="project-list__number mono-label">{project.number}</span><span className="project-list__text"><strong>{project.name}</strong><small>{t(project.descriptionKey)}</small></span><ArrowUpRight size={17} /></a></li>)}
        </ol>
      </section>
      <section className="footer-column" id="experiencia" aria-labelledby="experience-title">
        <div className="section-marker mono-label"><span>// 03</span><span>{t('footer.experience')}</span></div>
        <h2 id="experience-title" className="footer-column__title">{t('experience.title')}</h2>
        <div className="experience-entry"><span className="mono-label">{t('experience.workType')}</span><h3>{t('experience.internship')}</h3><p>{t('experience.internshipDetail')}</p></div>
        <div className="experience-entry"><span className="mono-label">{t('experience.educationType')}</span><h3>{t('experience.degree')}</h3><p>{t('experience.school')}</p></div>
        <div className="course-terminal"><p className="mono-label">$ cat cursos.log</p><pre>{t('experience.coursesPending')}</pre></div>
      </section>
    </div>
  )
}

export default TechStackColumns