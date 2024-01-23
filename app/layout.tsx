import { Khand } from 'next/font/google'

import type { Metadata } from 'next'
import './ui/globals.css'

const khand = Khand({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio for Suhaas V',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${khand.className} px-16`}>{children}</body>
    </html>
  )
}
