import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AllStaff Health - Healthcare Staffing Solutions',
  description: 'Connect healthcare professionals with facilities. Find your next opportunity or request skilled staff.',
  keywords: 'healthcare staffing, nursing jobs, medical professionals, healthcare facilities',
  authors: [{ name: 'AllStaff Health' }],
  openGraph: {
    title: 'AllStaff Health - Healthcare Staffing Solutions',
    description: 'Connect healthcare professionals with facilities. Find your next opportunity or request skilled staff.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'AllStaff Health',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllStaff Health - Healthcare Staffing Solutions',
    description: 'Connect healthcare professionals with facilities. Find your next opportunity or request skilled staff.',
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