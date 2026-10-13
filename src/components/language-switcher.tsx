import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage?.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'

  return (
    <div className="language-switcher" role="group" aria-label={t('nav.language')}>
      <button type="button" aria-pressed={language === 'pt-BR'} onClick={() => void i18n.changeLanguage('pt-BR')}>PT</button>
      <span aria-hidden="true">/</span>
      <button type="button" aria-pressed={language === 'en'} onClick={() => void i18n.changeLanguage('en')}>EN</button>
    </div>
  )
}

export default LanguageSwitcher