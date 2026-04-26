import type { Metadata } from 'next';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

export const metadata: Metadata = {
  title: 'SHIKAO-WEB',
  description: 'SHIKAO-WEB official site'
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
