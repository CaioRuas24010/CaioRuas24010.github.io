# Portfólio Acadêmico & de Projetos — Caio Ruas

Site pessoal, acadêmico e de projetos desenvolvido com **Astro**, **Tailwind CSS**, **View Transitions** e **KaTeX (LaTeX)** para renderização matemática nativa.

## ✨ Funcionalidades

- **Modo Escuro / Claro**: Persistência automática de tema integrada às transições de página.
- **View Transitions**: Navegação fluida sem recarregamento brusco entre páginas.
- **Suporte Nativo a LaTeX / KaTeX**: Renderização rápida de equações tanto via componente `<Katex />` quanto em arquivos Markdown (`remark-math` + `rehype-katex`).
- **Fundo Interativo Sutil**: Malha de partículas e constelações em HTML5 Canvas que reage suavemente ao cursor e ao tema ativo.
- **Páginas Inclusas**:
  - **Home (`/`)**: Apresentação acadêmica, destaques de fórmulas, artigos e projetos.
  - **Publicações (`/publicacoes`)**: Listagem com busca em tempo real, filtro por tipo e botões para **PDF**, **DOI** e **BibTeX** (com visualização expansível e cópia em 1 clique).
  - **Projetos (`/projetos`)**: Cards animados com efeito spotlight interativo e filtros para **Códigos & Pesquisa**, **Hackathons** e **Jogos**.
  - **Sobre Mim (`/sobre`)**: Biografia acadêmica (Ilum Escola de Ciência / CNPEM), matriz de competências e linha do tempo.

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm.cmd install

# Iniciar servidor de desenvolvimento (http://localhost:4321)
npm.cmd run dev

# Gerar versão de produção na pasta dist/
npm.cmd run build
```

## 📝 Como Personalizar Dados

Todos os dados de publicações e projetos estão centralizados em `src/data/portfolioData.ts`. Basta adicionar ou editar itens nos arrays `publications` e `projects`.
