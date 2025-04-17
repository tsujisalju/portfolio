/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "de-DE", "ms-MY"],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/artworks",
        permanent: true,
      },
      {
        source: "/nsfw",
        destination: "https://www.youtube.com/watch?v=LWAoYKIu7tg",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
