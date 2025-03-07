/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportação estática
  // basePath: '/unisuntec.com.br', // Caminho base no GitHub Pages
  // assetPrefix: '/unisuntec.com.br/', // Prefixo correto para assets
  // trailingSlash: true, // Garante compatibilidade com arquivos estáticos
  images: { unoptimized: true }, // Desativa otimização de imagens para exportação

  // Experimental otimização de CSS pode ser removido se causar problemas
  // experimental: { optimizeCss: true },

  reactStrictMode: true, // Ativa modo estrito do React para capturar erros
};

module.exports = nextConfig;
