/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Forçar basePath para /unisuntec.com.br
  basePath: '/unisuntec.com.br',
  assetPrefix: '/unisuntec.com.br/',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
