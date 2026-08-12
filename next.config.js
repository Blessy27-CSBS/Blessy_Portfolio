/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'raw.githubusercontent.com', 'github.com'],
  },
};

module.exports = nextConfig;
