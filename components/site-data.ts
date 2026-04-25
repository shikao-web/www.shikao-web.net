export const navLinks = [
  { href: '/', label: 'Home', external: false },
  { href: '/services', label: '活動内容紹介', external: false },
  { href: '/news', label: 'News', external: false },
  { href: 'https://github.com/shikao-web', label: 'GitHub', external: true },
  { href: 'https://zenn.dev/shikaoweb', label: 'Zenn', external: true },
  { href: 'https://qiita.com/shikao-web', label: 'Qiita', external: true }
] as const;

export const serviceCards = [
  {
    title: 'SHIKAO CRAFT',
    image: '/services_files/01_SHIKAO-CRAFT.png',
    description: 'プログラミングを中心に、アイデアを形にする制作活動を継続しています。'
  },
  {
    title: '夏休み2025 情報実験',
    image: '/services_files/02_Summer2025.png',
    description: 'SNSアプリ開発やレポート公開など、実験と学びの記録を発信しています。'
  },
  {
    title: 'Tsutaeru Cercle',
    image: '/services_files/03_TsutaeruCercle.png',
    description: '伝える力を育てる活動として、文章・発表・振り返りを実践しています。'
  }
] as const;

export const newsItems = [
  {
    title: '新年度になったので、トップページの文章を更新しました。',
    date: '2026-04-01',
    excerpt: '技術に触って楽しい・面白いという感覚を得る学びの過程を振り返り、サイト文面を更新。'
  },
  {
    title: '【夏休み2025】夏休みの8月を振り返って',
    date: '2025-08-30',
    excerpt: '旅行やオープンキャンパス参加を通じて理想像を明確化した8月の振り返り。'
  },
  {
    title: '【レポート】情報実験~SNSアプリ開発~',
    date: '2025-08-25',
    excerpt: '2025年8月の情報実験で行ったSNSアプリ開発のまとめレポートを公開。'
  },
  {
    title: '【初投稿】トップページのデザイン',
    date: '2025-03-18',
    excerpt: 'Canvaで作成した自己紹介デザインを公開し、今後の発信方針を紹介。'
  }
] as const;
