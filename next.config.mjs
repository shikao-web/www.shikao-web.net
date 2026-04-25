/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/services', destination: '/services.html', permanent: false },
      { source: '/news', destination: '/news.html', permanent: false },
      { source: '/privacy-policy', destination: '/privacy-policy.html', permanent: false }
    ];
  }
};

export default nextConfig;
