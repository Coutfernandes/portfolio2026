import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const detectedLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
document.documentElement.lang = detectedLanguage

void i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: { loadPath: '/locales/{{lng}}.json' },
    fallbackLng: 'pt-BR',
    lng: detectedLanguage,
    supportedLngs: ['pt-BR', 'en'],
    defaultNS: 'translation',
    ns: ['translation'],
    keySeparator: false,
    react: { useSuspense: false },
    interpolation: { escapeValue: false },
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
})

export default i18n