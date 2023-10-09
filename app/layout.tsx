import './globals.css'
import AppHeader from '@/components/widgets/AppHeader'
import type { Metadata } from 'next'
import { Rubik, Spectral } from 'next/font/google'
import StateProvider from '@/components/StateProvider'
import SessionWatcher from '@/components/entities/session/session.watcher'
import TokenWatcher from '@/components/entities/session/token.watcher'

const rubik = Rubik({ subsets: ['latin', 'cyrillic'], variable: '--root-font' })
const spectral = Spectral({ subsets: ['latin', 'cyrillic'], weight: ['600', '400'], variable: '--second-font' })

export const metadata: Metadata = {
  title: 'DM+',
  description: 'Управление подпиской DM+',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StateProvider>
      <html lang="en" className={`${rubik.className} ${rubik.variable} ${spectral.variable}`}>
        <body id='root' className='flex dark flex-col overflow-x-hidden body_wrapper'>
          <SessionWatcher />
          <TokenWatcher />
          <AppHeader />
          <div className='max-w-5xl w-full page_wrapper h-full px-4 mx-auto'>
            {children}
          </div>
        </body>
      </html>
    </StateProvider>
  )
}
