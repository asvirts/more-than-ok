import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {ThemeProvider} from '@/app/components/ThemeProvider'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | More Than OK',
      default: 'More Than OK',
    },
    description: 'A simple blog built with Next.js and MDX',
  }
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        <ThemeProvider>
          <section className="min-h-screen pt-24">
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
