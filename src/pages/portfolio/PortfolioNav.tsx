import { ArrowUpRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import LanguageSwitcher from '../../components/language-switcher'
import { portfolioContent } from './content'

function PortfolioNav() {
  const { t } = useTranslation()
  const links = [['#stack', t('nav.stack')], ['#projetos', t('nav.projects')], ['#experiencia', t('nav.experience')], ['#contato', t('nav.contact')]]

  return (
    <header className="site-header">
      <a className="site-header__identity" href="#top" aria-label={t('nav.home')}>
        <span>{portfolioContent.name}</span><span className="mono-label">// {portfolioContent.role}</span>
      </a>
      <nav className="site-header__anchors" aria-label={t('nav.sections')}>
        {links.map(([href, label]) => <a className="mono-label" href={href} key={href}>// {label}</a>)}
      </nav>
      <div className="site-header__right">
        <a className="site-header__social" href={portfolioContent.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={15} /><span>GitHub</span><ArrowUpRight size={11} /></a>
        <a className="site-header__social" href={portfolioContent.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={15} /><span>LinkedIn</span><ArrowUpRight size={11} /></a>
        <a className="site-header__social site-header__email" href="#contato" aria-label={t('nav.email')}><Mail size={15} /></a>
        <LanguageSwitcher />
      </div>
    </header>
  )
}

export default PortfolioNav