# Instruções para Agentes de IA - Oficina-Typescript

## Visão Geral do Projeto
Este é o **Bingo Mixer**, um jogo de bingo social para mixers presenciais, construído com TypeScript, React e Vite. O objetivo é encontrar pessoas que correspondam às perguntas e fazer 5 em linha!

- **Tecnologias**: TypeScript, React 19, Vite, TailwindCSS v4, Vitest para testes.
- **Estrutura**: Componentes funcionais, hooks customizados para gerenciamento de estado, lógica em utils.

## Comandos Essenciais
- **Desenvolvimento**: `npm run dev` (servidor Vite em http://localhost:5173/)
- **Build**: `npm run build` (compila TypeScript e assets)
- **Testes**: `npm test` (executa testes com Vitest)
- **Lint**: `npm run lint` (verifica código com ESLint)

## Arquitetura e Convenções
- **Componentes**: Localizados em `src/components/`, use componentes funcionais com hooks.
- **Hooks**: `src/hooks/` para lógica de estado, como `useBingoGame`.
- **Utils**: `src/utils/` para lógica pura, com testes em `src/utils/*.test.ts`.
- **Tipos**: Definições em `src/types/index.ts`.
- **Estado**: Gerenciado via hooks customizados, com persistência em localStorage.
- **Convenções**: TypeScript estrito, testes obrigatórios para lógica crítica, TailwindCSS para estilos.

## Armadilhas Comuns
- Garanta Node.js 22+ instalado.
- Instale dependências com `npm install` antes de qualquer comando.
- Use o servidor de dev para desenvolvimento; builds são para produção.
- Testes usam jsdom; execute `npm test` após mudanças em utils.

## Recursos Adicionais
- [Guia do Workshop](workshop/GUIDE.md): Aprenda TypeScript através de exercícios práticos.
- [README](README.md): Configuração e visão geral.
- Documentação em `docs/` para estilos e temas.

Siga estas instruções para ser produtivo no desenvolvimento do Bingo Mixer!
