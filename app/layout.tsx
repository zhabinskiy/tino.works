import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tino Zhabinskiy',
  description: 'Freelance 3D artist & motion designer',
  openGraph: {
    images: '/og.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' antialiased'}>{children}</body>
    </html>
  )
}
