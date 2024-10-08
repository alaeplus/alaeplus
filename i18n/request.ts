import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const lang = 'fr'

  return {
    locale: lang,
    messages: (await import(`./${lang}.json`)).default,
  }
})
