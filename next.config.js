/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE", "ms-MY"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nsfw",
        destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
