import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { portfolioContent } from './content'

function ContactBlock() {
  const { t } = useTranslation()

  return (
    <section className="contact-block" id="contato" aria-labelledby="contact-title">
      <div><p className="mono-label">// 04 — {t('contact.kicker')}</p><h2 id="contact-title">{t('contact.title')}</h2>
        <div className="tech-chips" aria-label={t('contact.technologies')}>{portfolioContent.technologyChips.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
      <a className="contact-block__button hover-invert" href={`mailto:${portfolioContent.email}`}><span>{t('contact.button')}</span><ArrowUpRight size={19} /></a>
    </section>
  )
}

export default ContactBlock