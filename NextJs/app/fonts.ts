import { Inter, Nunito } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: '300'
})

export const spaceMono = localFont({
  src: '../public/fonts/SpaceMono-Bold.ttf',
  display: 'swap',
})