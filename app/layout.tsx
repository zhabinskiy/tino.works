import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tino Zhabinskiy',
  description:
    "Hey there! I'm Tino, a tech-savvy curious designer, and an engineer that deeply cares about aesthetics and experience. Love to tinker with code and build stuff.",
  openGraph: {
    images: '/og.jpg',
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
