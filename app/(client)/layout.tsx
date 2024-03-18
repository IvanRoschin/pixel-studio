import OrderModal from '@/components/modals/OrderModal'
import { Providers } from 'app/providers/providers'
import type { Metadata } from 'next'

import localfont from 'next/font/local'

import './globals.css'

const tacticsans = localfont({
  src: [
    {
      path: '../fonts/tacticsans-reg.otf',
      weight: '400',
    },
  ],
  variable: '--font-tacticsans',
})

const boldTacticsans = localfont({
  src: [
    {
      path: '../fonts/tacticsans-bld.otf',
      weight: '700',
    },
  ],
  variable: '--font-tacticsans-bold',
})

export const metadata: Metadata = {
  title: 'Pixel Studio',
  description: 'looks like you have not seen cool project',
}

// export const viewport: Viewport = {
//   width: 'device-width',
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tacticsans.variable} ${boldTacticsans.variable} bg-primaryBackground font-tacticsans max-w-[1920px] `}
      >
        <Providers>
          <OrderModal />
          {children}
        </Providers>
      </body>
    </html>
  )
}
