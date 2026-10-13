import { useTranslation } from 'react-i18next'
import AboutSection from './AboutSection'
import FooterPoster from './FooterPoster'
import HeroPoster from './HeroPoster'
import PortfolioNav from './PortfolioNav'

function PortfolioPage() {
  const { t } = useTranslation()
  return <main><PortfolioNav /><HeroPoster /><AboutSection /><div className="sr-only" aria-live="polite">{t('accessibility.languageChanged')}</div><FooterPoster /></main>
}

export default PortfolioPage