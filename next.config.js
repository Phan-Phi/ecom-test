/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.t-solution.vn",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "*.t-solution.vn",
        pathname: "**",
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
};

module.exports = nextConfig;
