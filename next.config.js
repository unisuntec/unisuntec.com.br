/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Exportação estática
  // basePath: '/unisuntec.com.br', // Caminho base no GitHub Pages - deve ser descomentado se usar username.github.io/repo_name
  // assetPrefix: '/unisuntec.com.br/', // Prefixo correto para assets - deve ser descomentado se usar username.github.io/repo_name
  // Ambos devem permanecer comentados se estiver usando um domínio personalizado
  // trailingSlash: true, // Garante compatibilidade com arquivos estáticos
  images: { unoptimized: true }, // Desativa otimização de imagens para exportação

  // Experimental otimização de CSS pode ser removido se causar problemas
  // experimental: { optimizeCss: true },

  reactStrictMode: true, // Ativa modo estrito do React para capturar erros
};

module.exports = nextConfig;
