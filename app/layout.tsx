import '@/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

export const metadata = {
  title: 'ALAE+',
  description:
    "Solution de facturation pour les structures d'accueil périscolaire",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
