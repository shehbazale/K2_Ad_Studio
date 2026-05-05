import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'K2 Ad Studio - Video Ad Production',
  description: 'Premium video ad production and performance-focused creative for fast-growing brands.',
  icons: {
    icon: '/bg.png',
    shortcut: '/bg.png',
    apple: '/bg.png',
  },
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        style={{
          fontFamily:
            'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
