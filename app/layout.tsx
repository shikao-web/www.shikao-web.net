import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SHIKAO-WEB (Next.js)',
  description: 'Legacy HTML site migrated to Next.js'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
