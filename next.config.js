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
        destination: "https://www.youtube.com/watch?v=LWAoYKIu7tg",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img2.finalfantasyxiv.com",
      },
      {
        protocol: "https",
        hostname: "img.finalfantasyxiv.com",
      },
      {
        protocol: "https",
        hostname: "lds-img.finalfantasyxiv.com",
      },
    ],
  },
};

module.exports = nextConfig;
