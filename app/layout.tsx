import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krishna Desai - Portfolio',
  description: 'Portfolio of Krishna Desai, a Data Science Master\'s student at Indiana University Bloomington, specializing in Data Engineering, Analytics, and Machine Learning. Showcasing professional achievements, projects, skills, and research work.',
  icons: {
    icon: 'https://tinyurl.com/2xhrkaao', // Link to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://tinyurl.com/2xhrkaao" />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
