# UniSunTec Service - Tecnologia que não para

Este projeto é um site estático para a empresa UniSunTec Service, desenvolvido com [Next.js](https://nextjs.org) e exportado como HTML estático para hospedagem no GitHub Pages.

## Tecnologias Utilizadas

- **Next.js 15** - Framework React com suporte a exportação estática
- **React 19** - Biblioteca para construção de interfaces
- **TailwindCSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI reutilizáveis

## Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar o site.

## Estrutura do Projeto

- `/src/app` - Páginas e componentes principais
- `/src/components` - Componentes reutilizáveis
- `/src/lib` - Utilitários e funções auxiliares
- `/public` - Recursos estáticos (imagens, etc.)

## Construção e Implantação

### Construção Local

Para construir o site localmente e testá-lo:

```bash
# Script para construir e iniciar servidor local
./serve-local.sh
```

### Implantação no GitHub Pages

Para implantar o site no GitHub Pages:

```bash
# Script de implantação automatizada
./deploy.sh
```

Este script constrói o projeto, cria os arquivos necessários para o GitHub Pages e envia para a branch gh-pages.

## Otimizações

- Fontes otimizadas com next/font
- Imagens estáticas otimizadas
- CSS minificado
- Carregamento eficiente de recursos

## Personalização

As principais configurações de estilo estão em:
- `src/app/globals.css`
- `tailwind.config.js`

A configuração do Next.js está em `next.config.js`.
