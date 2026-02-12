import type { Metadata } from 'next'
import './globals.css'

import { Providers } from 'app/providers/providers'
import localfont from 'next/font/local'

import OrderModal from '@/components/modals/OrderModal'

const tacticsans = localfont({
  src: [{ path: '../fonts/tacticsans-reg.otf', weight: '400' }],
  variable: '--font-tacticsans',
})
const boldTacticsans = localfont({
  src: [{ path: '../fonts/tacticsans-bld.otf', weight: '700' }],
  variable: '--font-tacticsans-bold',
})

export const metadata: Metadata = {
  title: 'Pixel Studio',
  description: 'looks like you have not seen cool project',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${tacticsans.variable} ${boldTacticsans.variable} bg-primaryBackground font-tacticsans max-w-[1920px] overflow-x-hidden`}
      >
        <Providers>
          <OrderModal />
          {children}
        </Providers>
      </body>
    </html>
  )
}
