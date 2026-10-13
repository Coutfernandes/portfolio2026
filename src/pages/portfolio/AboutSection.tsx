import { ArrowUpRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import CameraSketch from '../../components/graphics/CameraSketch'
import { portfolioContent } from './content'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="about-section" id="sobre" aria-labelledby="about-title">
      <div className="section-marker mono-label"><span>// 00</span><span>{t('about.kicker')}</span></div>
      <div className="about-section__grid">
        <div className="about-section__copy">
          <h2 className="marker-heading" id="about-title">{t('about.title')}</h2>
          <p className="about-section__bio">{t('about.bio')}</p>
          <p className="about-section__note mono-label">{t('about.note')}</p>
          <div className="terminal-contact">
            <p className="mono-label">{t('about.quickContact')}</p>
            <a href={`mailto:${portfolioContent.email}`}><Mail size={15} /><span>&gt; {portfolioContent.email}</span><ArrowUpRight size={13} /></a>
            <a href={portfolioContent.social.github} target="_blank" rel="noreferrer"><FaGithub size={15} /><span>&gt; github.com/Coutfernandes</span><ArrowUpRight size={13} /></a>
            <a href={portfolioContent.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={15} /><span>&gt; LinkedIn / Matheus Coutinho</span><ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="about-section__art">
          <div className="about-section__art-label mono-label">{t('about.cameraLabel')}</div>
          <CameraSketch ariaLabel={t('about.cameraAlt')} />
          <p className="about-section__caption mono-label">01 / MANAUS TOUR AI — {t('about.cameraCaption')}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection