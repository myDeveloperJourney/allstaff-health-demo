import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polaris Pathways Behavioral Talent - Your North Star for ABA Staffing',
  description: 'Guiding ABA clinics toward stable teams and BCBAs/RBTs toward careers where they can grow, stay, and thrive.',
  keywords: 'ABA staffing, BCBA jobs, RBT jobs, behavioral health recruiting, ABA therapy staffing, behavior analyst careers, applied behavior analysis',
  authors: [{ name: 'Polaris Pathways Behavioral Talent' }],
  openGraph: {
    title: 'Polaris Pathways Behavioral Talent - Your North Star for ABA Staffing',
    description: 'Guiding ABA clinics toward stable teams and BCBAs/RBTs toward careers where they can grow, stay, and thrive.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Polaris Pathways Behavioral Talent',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polaris Pathways Behavioral Talent - Your North Star for ABA Staffing',
    description: 'Guiding ABA clinics toward stable teams and BCBAs/RBTs toward careers where they can grow, stay, and thrive.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}