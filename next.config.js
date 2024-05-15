// next.config.js
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;