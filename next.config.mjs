/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@components'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;