// Components
import ThemeProvider from '@/components/layouts/ThemeProvider'
// Utils
import { cn } from '@/lib/utils'
// Config
import { siteConfig } from '@/config/site'
// Types
import { type LayoutProps } from '@/types'
import { type Metadata } from 'next'
// Assets
import { fontCairo } from '@/lib/fonts'
// Styles
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.description}`,
    template: `${siteConfig.name} – %s`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.description
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  generator: 'Next.js 13',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
}

export default function RootLayout ({ children }: LayoutProps) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={cn(fontCairo.variable, 'min-h-screen bg-background antialiased overflow-hidden')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
