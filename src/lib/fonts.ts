import { Cairo as FontCairo } from 'next/font/google'

export const fontCairo = FontCairo({
  subsets: ['latin'],
  variable: '--font-cairo'
})
