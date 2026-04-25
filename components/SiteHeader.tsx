import Link from 'next/link';
import { navLinks } from './site-data';

export default function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="SHIKAO-WEB Home">
          <img src="/index_files/TitleLogo-1.png" alt="SHIKAO-WEB" />
          <span>SHIKAO-WEB</span>
        </Link>

        <nav className="main-nav" aria-label="メインナビゲーション">
          <ul>
            {navLinks.map((link) => {
              const active = !link.external && link.href === currentPath;
              return (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" data-active="false">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} data-active={active ? 'true' : 'false'}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
