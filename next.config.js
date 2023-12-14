/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "192.168.29.199",
      "images.unsplash.com",
      "127.0.0.1",
      "picsum.photos",
      "source.unsplash.com",
      "randomuser.me",
      "192.168.29.199",
      "tailwindui.com",
    ],
  },
};

module.exports = nextConfig;
