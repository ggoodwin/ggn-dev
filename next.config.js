/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/ggoodwin/ggn-dev",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
