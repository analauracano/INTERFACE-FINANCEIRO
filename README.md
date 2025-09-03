# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


INTERFACE-FINANCEIRO

💼 Aplicação web para gerenciamento financeiro pessoal, desenvolvida com React, TypeScript e Vite.

📄 Descrição

O INTERFACE-FINANCEIRO é uma aplicação moderna para controle de finanças pessoais, permitindo ao usuário registrar e visualizar suas receitas e despesas de forma intuitiva. Desenvolvido com React, TypeScript e Vite, o projeto visa proporcionar uma experiência de usuário eficiente e responsiva.

🚀 Tecnologias Utilizadas

React

TypeScript

Vite

ESLint

📂 Estrutura do Projeto

index.html: Estrutura principal da página.

src/: Diretório contendo os arquivos-fonte da aplicação.

package.json: Gerenciamento de dependências e scripts.

tsconfig.json: Configurações do TypeScript.

.env.example: Exemplo de arquivo de variáveis de ambiente.

.gitignore: Arquivos e pastas a serem ignorados pelo Git.

biome.json: Configurações do Biome.

eslint.config.js: Configurações do ESLint.

vite.config.ts: Configurações do Vite.

🧪 Como Rodar o Projeto

Clone o repositório:

git clone https://github.com/analauracano/INTERFACE-FINANCEIRO.git
cd INTERFACE-FINANCEIRO


Instale as dependências:

yarn install


Inicie o servidor de desenvolvimento:

yarn dev


Acesse a aplicação no navegador: http://localhost:3000.

🛠️ Como Contribuir

Faça um fork deste repositório.

Crie uma branch para sua modificação (git checkout -b feature/nova-funcionalidade).

Realize suas alterações e faça commit (git commit -am 'Adiciona nova funcionalidade').

Envie para o repositório remoto (git push origin feature/nova-funcionalidade).

Abra um pull request.

📌 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE
 para mais detalhes.
