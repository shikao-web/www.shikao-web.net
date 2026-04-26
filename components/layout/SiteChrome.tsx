'use client';

import { usePathname } from 'next/navigation';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="site-shell">
      <SiteHeader currentPath={pathname} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
