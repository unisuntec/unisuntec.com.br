/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Sem basePath
  // basePath: '',

  // Aponta para a URL do seu projeto no GitHub Pages
  assetPrefix: 'https://unisuntec.github.io/unisuntec.com.br',

  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { optimizeCss: true },
};

module.exports = nextConfig;
