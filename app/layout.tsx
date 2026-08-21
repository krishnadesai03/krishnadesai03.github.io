import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Krishna Desai - Portfolio',
  description: 'Portfolio of Krishna Desai, Master\'s in Data Science from Indiana University Bloomington, specializing in Data Engineering, Analytics, and Machine Learning. Showcasing professional achievements, projects, skills, and research work.',
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
        </div>
        <Toaster />
      </body>
    </html>
  );
}
