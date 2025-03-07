#!/bin/bash

# Exit on any error
set -e

# Enable verbose output
set -x

# Definir repositório remoto
REMOTE_REPO="github"
BRANCH="gh-pages"

# Buscar e sincronizar `gh-pages`
git fetch $REMOTE_REPO $BRANCH

# Se o diretório out existe, removê-lo manualmente
if [ -d "out" ]; then
    echo "Removendo diretório out..."
    # Força a remoção sem depender do git worktree
    rm -rf out
    # Limpar referências de worktree
    git worktree prune
fi

# Criar um worktree para `gh-pages`
git worktree add out $BRANCH

# Remover arquivos antigos do diretório `out/`, mantendo o histórico
rm -rf out/* .next

# Instalar dependências
pnpm install

# Build para GitHub Pages
GITHUB_PAGES=true pnpm build

# Criar o arquivo CNAME para manter o domínio personalizado
echo "unisuntec.com.br" > out/CNAME  # Substitua pelo seu domínio
cat out/CNAME  # Verifica se o domínio foi salvo corretamente

# Criar .nojekyll para evitar problemas no GitHub Pages
touch out/.nojekyll

# Ir para a pasta `out/` e fazer commit diretamente no `gh-pages`
cd out
git add .
git commit -m "Deploy atualizado: $(date +'%Y-%m-%d %H:%M:%S')"

# Enviar mudanças para `gh-pages`
git push $REMOTE_REPO $BRANCH

# Voltar para a raiz do projeto e remover o worktree
cd ..
# Remover o worktree de forma segura
rm -rf out
git worktree prune
