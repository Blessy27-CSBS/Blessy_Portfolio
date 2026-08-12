import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maria Blessy R J | Aspiring Data Analyst & AI Engineer | Portfolio',
  description: 'Portfolio of Maria Blessy R J - Aspiring Data Analyst, Computer Science & Business Systems student at KGiSL Institute of Technology. Experienced in EDA, Predictive ML Modeling, PostgreSQL, and Zoho Extension Engineering.',
  keywords: [
    'Maria Blessy R J',
    'Data Analyst',
    'AI Engineer',
    'Machine Learning',
    'Python',
    'SQL',
    'PostgreSQL',
    'Scikit-learn',
    'Zoho Deluge',
    'KGiSL',
    'CSBS',
    'Portfolio'
  ],
  authors: [{ name: 'Maria Blessy R J' }],
  openGraph: {
    title: 'Maria Blessy R J | Aspiring Data Analyst & AI Engineer',
    description: 'Third-year Computer Science & Business Systems student with experience in EDA, predictive modeling, SQL database engineering, and AI extensions.',
    type: 'website',
    url: 'https://github.com/Blessy27-CSBS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maria Blessy R J | Data Analyst & AI Engineer',
    description: 'Data analysis, machine learning models, and AI systems built end to end.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#FAFAF8] text-[#1A1A1A] antialiased selection:bg-[#84CC16]/30 selection:text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
