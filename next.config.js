/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE", "ms-MY"],
  },
};

module.exports = nextConfig;
