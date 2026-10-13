import { useTranslation } from 'react-i18next'
import ContactBlock from './ContactBlock'
import TechStackColumns from './TechStackColumns'

const currentYear = new Date().getFullYear()

function FooterPoster() {
  const { t } = useTranslation()

  return (
    <footer className="footer-poster">
      <TechStackColumns /><ContactBlock />
      <div className="footer-bottom mono-label"><span>© {currentYear} {t('footer.copyright')}</span><a href="#top">{t('footer.backToTop')} ↑</a><span>{t('footer.location')} / BR</span></div>
    </footer>
  )
}

export default FooterPoster