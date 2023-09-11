import { Cairo as FontCairo } from 'next/font/google'

export const fontCairo = FontCairo({
  variable: '--font-cairo',
  subsets: ['latin'],
  display: 'swap'
})
