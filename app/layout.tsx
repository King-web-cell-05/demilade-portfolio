import './globals.css'
import { JetBrains_Mono, Poppins } from 'next/font/google'
import Header from "@/components/ui/Header"
import PageTransition from "@/components/Pagetransition"
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
import Pagetransition from '@/components/Pagetransition'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Header/>
        <Pagetransition>   {children}  </Pagetransition>
       
       
        
      </body>
    </html>
  )
}
