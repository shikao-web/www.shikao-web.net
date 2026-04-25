import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__links">
          <Link href="/privacy-policy">プライバシーポリシー</Link>
        </div>
        <p className="site-footer__copy">Copyright © SHIKAO-WEB All Rights Reserved.</p>
      </div>
    </footer>
  );
}
