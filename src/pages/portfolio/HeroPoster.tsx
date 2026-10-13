import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import CrtMonitor from '../../components/graphics/CrtMonitor'
import { portfolioContent } from './content'

function HeroPoster() {
  const { t } = useTranslation()
  const [photoAvailable, setPhotoAvailable] = useState(true)
  const [photoShifted, setPhotoShifted] = useState(false)

  return (
    <section className="hero-poster grain" id="top" aria-labelledby="hero-title">
      <div className="hero-poster__topline mono-label"><span>{t('hero.availability')}</span></div>
      <div className="hero-poster__content">
        <div className="hero-poster__copy">
          <p className="hero-poster__eyebrow mono-label">{t('hero.eyebrow')}</p>
          <h1 id="hero-title">{portfolioContent.name}</h1>
          <p className="hero-poster__role">{portfolioContent.role}</p>
          <p className="hero-poster__location"><MapPin size={15} /> {portfolioContent.location} — {t('hero.country')}</p>
          <p className="hero-poster__availability">{t('hero.openToWork')}</p>
          <p className="hero-poster__stack-line">Python · Django · React · IA</p>
          <div className="hero-poster__monitor-label mono-label">{t('hero.terminalLabel')}</div>
          <CrtMonitor ariaLabel={t('hero.crtAlt')} />
        </div>
        <figure className="hero-poster__portrait brutal-frame">
          {photoAvailable ? <button
            className={`hero-poster__portrait-button${photoShifted ? ' is-shifted' : ''}`}
            type="button"
            aria-label={photoShifted ? t('hero.portraitReset') : t('hero.portraitMoveLeft')}
            aria-pressed={photoShifted}
            onClick={() => setPhotoShifted((shifted) => !shifted)}
          >
            <img src="/eu.JPG" alt={t('hero.portraitAlt')} width="720" height="960" fetchPriority="high" onError={() => setPhotoAvailable(false)} />
          </button> : (
            <div className="hero-poster__photo-placeholder" role="img" aria-label={t('hero.portraitAlt')}>
              <span className="mono-label">EU.JPG</span><strong>MC</strong><span className="mono-label">public/eu.JPG</span>
            </div>
          )}
        </figure>
      </div>
      <p className="hero-poster__vertical mono-label" aria-hidden="true">MANAUS / BRASIL / 2026</p>
      <p className="hero-poster__scroll mono-label">{t('hero.scroll')}</p>
      <div className="hero-poster__display" aria-hidden="true">PORTFOLIO <span>2026</span></div>
    </section>
  )
}

export default HeroPoster