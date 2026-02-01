import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n.ts');
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'medium.com' },
      { protocol: 'https', hostname: '*.medium.com' },
    ],
  },
};
export default withNextIntl(nextConfig);
