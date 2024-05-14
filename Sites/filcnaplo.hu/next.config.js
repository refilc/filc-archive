/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  i18n: {
    locales: ['hu'],
    defaultLocale: 'hu',
  },
};

module.exports = nextConfig;
