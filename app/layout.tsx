import './globals.css'
import { JetBrains_Mono, Poppins } from 'next/font/google'

// Load fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'King Portfolio',
  description: 'Using Next.js fonts',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <header/>
        {children}
      </body>
    </html>
  )
}
