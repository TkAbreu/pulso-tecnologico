# Pulso Tecnológico

[Português](#português) | [English](#english)

<a id="português"></a>

## 🇧🇷 Português

Blog editorial em português sobre EDI (Electronic Data Interchange), integração B2B, produtividade, automação e tendências de tecnologia. Construído com Astro e Tailwind CSS, o projeto prioriza geração estática, carregamento rápido, acessibilidade e SEO, além de oferecer um painel editorial integrado ao GitHub por meio do Sveltia CMS.

## 🚀 Demonstração

**Deploy:**  
[https://pulsotecnologico.com.br](https://pulsotecnologico.com.br)

## ✨ Funcionalidades

### Conteúdo e navegação

- Página inicial com artigo em destaque, publicações recentes e acesso por categoria;
- Catálogo de artigos paginado, com até nove publicações por página;
- Categorias de EDI, Produtividade e Tecnologia;
- Páginas individuais geradas estaticamente a partir de arquivos Markdown;
- Filtragem de rascunhos durante a geração do site;
- Exibição de autor, data, tempo estimado de leitura, categoria, tags e imagem de capa;
- Sugestão de até três artigos relacionados da mesma categoria;
- Compartilhamento de artigos no X/Twitter e LinkedIn;
- Layout responsivo, menu mobile sem JavaScript e barra de progresso de leitura baseada em CSS;
- Páginas institucionais de apresentação, contato, newsletter, privacidade e termos de uso.

### Gestão editorial

- Painel do Sveltia CMS disponível em `/admin`;
- Autenticação e persistência de conteúdo por meio do GitHub;
- Criação e edição de posts sem alterar os arquivos manualmente;
- Upload de imagens para `public/images/posts`;
- Campos editoriais para título, descrição SEO, data, capa, categoria, tags, autor, tempo de leitura, destaque e rascunho;
- Conteúdo validado com Astro Content Collections e Zod;
- Tela de carregamento e tema do painel alinhados à identidade visual do blog.

### SEO, distribuição e segurança

- Metadados de título e descrição por página;
- URL canônica, Open Graph e Twitter Cards;
- Dados estruturados JSON-LD para site e artigos;
- Feed RSS em `/rss.xml`;
- Sitemap gerado automaticamente no build;
- `robots.txt` com bloqueio de indexação do painel administrativo;
- Cabeçalhos HTTP de segurança configurados para a Vercel, incluindo CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e `Permissions-Policy`;
- Estrutura preparada para espaços publicitários do Google AdSense.

## 🛠️ Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| ![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro&logoColor=fff) | Geração estática, páginas, layouts e coleções de conteúdo |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff) | Estilização, tema e responsividade |
| ![Markdown](https://img.shields.io/badge/Markdown-Conteúdo-000?style=for-the-badge&logo=markdown&logoColor=fff) | Publicação dos artigos |
| ![Sveltia CMS](https://img.shields.io/badge/Sveltia_CMS-Painel-FF3E00?style=for-the-badge&logo=svelte&logoColor=fff) | Gestão editorial pelo navegador |
| ![GitHub](https://img.shields.io/badge/GitHub-Backend_CMS-181717?style=for-the-badge&logo=github&logoColor=fff) | Autenticação e versionamento das publicações |
| ![Zod](https://img.shields.io/badge/Zod-Validação-3E67B1?style=for-the-badge&logo=zod&logoColor=fff) | Validação do frontmatter dos posts |
| ![RSS](https://img.shields.io/badge/RSS-Feed-FFA500?style=for-the-badge&logo=rss&logoColor=fff) | Distribuição das publicações |
| ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000?style=for-the-badge&logo=vercel&logoColor=fff) | Hospedagem e cabeçalhos de segurança |

O projeto também utiliza as integrações oficiais `@astrojs/rss` e `@astrojs/sitemap`, além de `@tailwindcss/vite`.

## 🗺️ Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Artigo em destaque, publicações recentes e categorias |
| `/blog` | Listagem paginada dos artigos |
| `/blog/:slug` | Conteúdo completo de um artigo |
| `/categoria/:slug` | Artigos filtrados por categoria |
| `/sobre` | Apresentação do blog e de seu autor |
| `/contato` | Informações de contato |
| `/newsletter` | Página de inscrição na newsletter |
| `/politica-de-privacidade` | Política de privacidade |
| `/termos-de-uso` | Termos de uso |
| `/rss.xml` | Feed RSS |
| `/admin` | Painel editorial do Sveltia CMS |

Os slugs de categoria disponíveis são `edi`, `produtividade` e `tecnologia`.

## 📁 Estrutura do projeto

```text
pulso-tecnologico/
├── public/
│   ├── admin/
│   │   ├── config.yml              # Configuração editorial do Sveltia CMS
│   │   └── index.html              # Entrada e tema do painel
│   ├── images/posts/               # Imagens dos artigos
│   └── robots.txt                  # Regras para mecanismos de busca
├── src/
│   ├── components/                 # Cabeçalho, rodapé, cards e SEO
│   ├── content/blog/               # Artigos em Markdown
│   ├── layouts/                    # Layout base e layout de artigo
│   ├── pages/
│   │   ├── blog/                   # Listagem e páginas dinâmicas dos posts
│   │   ├── categoria/              # Páginas dinâmicas de categoria
│   │   ├── contato.astro
│   │   ├── index.astro
│   │   ├── newsletter.astro
│   │   ├── politica-de-privacidade.astro
│   │   ├── rss.xml.js
│   │   ├── sobre.astro
│   │   └── termos-de-uso.astro
│   ├── styles/global.css           # Tailwind, tema e estilos globais
│   └── content.config.js           # Schema da coleção de artigos
├── astro.config.mjs                # Site, sitemap e integração com Tailwind
├── vercel.json                     # Cabeçalhos HTTP de segurança
├── package.json
└── LICENSE
```

## ▶️ Como executar

### Pré-requisitos

- Node.js em versão compatível com Astro 5;
- npm.

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor local do Astro informará no terminal o endereço de acesso, normalmente `http://localhost:4321`.

### Build de produção

```bash
npm run build
```

Os arquivos estáticos serão gerados em `dist/`.

### Preview do build

```bash
npm run preview
```

O projeto não depende de variáveis de ambiente para o build do frontend. A autenticação do painel utiliza o serviço OAuth configurado em `public/admin/config.yml`.

## ✍️ Como publicar artigos

### Pelo painel

1. Acesse `/admin` no ambiente publicado.
2. Autentique-se com o GitHub.
3. Crie ou edite uma publicação na coleção **Posts**.
4. Preencha os campos editoriais e publique a alteração.

O CMS grava os arquivos Markdown em `src/content/blog` e as mídias em `public/images/posts`. Para funcionar em outro repositório ou domínio, ajuste `repo`, `branch` e `base_url` em `public/admin/config.yml` e disponibilize um serviço OAuth compatível.

### Manualmente

Crie um arquivo `.md` em `src/content/blog` com o seguinte frontmatter:

```yaml
---
title: "Título do artigo"
description: "Resumo utilizado por mecanismos de busca e redes sociais."
date: 2026-05-01
cover: "/images/posts/meu-artigo/capa.jpg"
category: "Tecnologia"
tags: ["tecnologia", "automação"]
author: "Thiago Abreu"
readTime: 5
draft: false
featured: false
---
```

As categorias aceitas pelo schema são `EDI`, `Produtividade` e `Tecnologia`. Posts com `draft: true` não são incluídos nas páginas, no RSS ou no build das rotas de artigos.

## ☁️ Deploy na Vercel

1. Envie o projeto para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com/) e selecione **Add New > Project**.
3. Importe o repositório `TkAbreu/pulso-tecnologico`.
4. Confirme **Astro** como framework.
5. Use `npm run build` como comando de build e `dist` como diretório de saída.
6. Configure o domínio desejado e faça o deploy.

O arquivo `vercel.json` já versiona os cabeçalhos de segurança gerais e uma política específica para `/admin`. Se o domínio mudar, atualize também `site` em `astro.config.mjs`, as URLs absolutas usadas pelo SEO e compartilhamento, o sitemap indicado em `public/robots.txt` e a configuração do OAuth do CMS.

## 📸 Screenshots

Espaço reservado para capturas reais da aplicação.

### Home

<!-- Adicione aqui a captura de tela da Home. -->

### Artigo

<!-- Adicione aqui a captura de tela de um artigo. -->

### Painel editorial

<!-- Adicione aqui a captura de tela do Sveltia CMS. -->

## 🧭 Roadmap

- [ ] Conectar o formulário da newsletter a um provedor de e-mail;
- [ ] Adicionar as imagens de capa referenciadas e ainda ausentes;
- [ ] Adicionar o favicon e a imagem Open Graph padrão referenciados pelo layout;
- [ ] Investigar e remover os avisos de IDs duplicados emitidos pela coleção de conteúdo durante o build;
- [ ] Adicionar uma página personalizada para rotas não encontradas;
- [ ] Integrar os espaços publicitários preparados no layout, caso a monetização seja ativada;
- [ ] Adicionar screenshots reais ao README;
- [ ] Criar testes automatizados e uma rotina de validação contínua.

### Estado da validação

Em 20 de julho de 2026, `npm run build` foi executado com sucesso: 13 páginas estáticas foram geradas, além do feed RSS e do sitemap. O build apresentou avisos de IDs duplicados para parte da coleção de artigos, registrados no roadmap acima.

## 👥 Autoria e desenvolvimento

O conteúdo editorial e a identidade pública do blog apresentam **Thiago Abreu** como fundador, autor e Analista de Sistemas EDI.

O projeto foi desenvolvido e é mantido por:

**Tharick Abreu**  
Fullstack JavaScript Developer | React | Astro | Tailwind CSS | Node.js

[![GitHub](https://img.shields.io/badge/GitHub-TkAbreu-181717?style=for-the-badge&logo=github)](https://github.com/TkAbreu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tharick_Abreu-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tharick-abreu-836aa33ab/)

## 📄 Licença

Este projeto é disponibilizado sob a [Licença MIT](LICENSE). Copyright © 2026 Tharick Abreu.

---

<a id="english"></a>

## 🇺🇸 English

Portuguese-language editorial blog about EDI (Electronic Data Interchange), B2B integration, productivity, automation, and technology trends. Built with Astro and Tailwind CSS, the project prioritizes static generation, fast loading, accessibility, and SEO, while providing a GitHub-integrated editorial dashboard powered by Sveltia CMS.

## 🚀 Demo

**Deployment:**  
[https://pulsotecnologico.com.br](https://pulsotecnologico.com.br)

## ✨ Features

### Content and navigation

- Home page with a featured article, recent posts, and category shortcuts;
- Paginated article catalog with up to nine posts per page;
- EDI, Productivity, and Technology categories;
- Individual pages statically generated from Markdown files;
- Draft filtering during site generation;
- Author, date, estimated reading time, category, tags, and cover image display;
- Up to three related articles from the same category;
- Article sharing on X/Twitter and LinkedIn;
- Responsive layout, JavaScript-free mobile menu, and CSS-based reading progress bar;
- About, contact, newsletter, privacy policy, and terms of use pages.

### Editorial management

- Sveltia CMS dashboard available at `/admin`;
- GitHub-based authentication and content persistence;
- Post creation and editing without manually changing files;
- Image uploads to `public/images/posts`;
- Editorial fields for title, SEO description, date, cover, category, tags, author, reading time, featured status, and draft status;
- Content validation with Astro Content Collections and Zod;
- Branded loading screen and dashboard theme.

### SEO, distribution, and security

- Per-page title and description metadata;
- Canonical URLs, Open Graph, and Twitter Cards;
- JSON-LD structured data for the website and articles;
- RSS feed at `/rss.xml`;
- Sitemap generated automatically during the build;
- `robots.txt` rules preventing admin dashboard indexing;
- Vercel security headers, including CSP, HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`;
- Layout prepared for Google AdSense placements.

## 🛠️ Technologies

| Technology | Purpose |
| --- | --- |
| ![Astro](https://img.shields.io/badge/Astro-5-BC52EE?style=for-the-badge&logo=astro&logoColor=fff) | Static generation, pages, layouts, and content collections |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=fff) | Styling, theme, and responsive layouts |
| ![Markdown](https://img.shields.io/badge/Markdown-Content-000?style=for-the-badge&logo=markdown&logoColor=fff) | Article authoring |
| ![Sveltia CMS](https://img.shields.io/badge/Sveltia_CMS-Dashboard-FF3E00?style=for-the-badge&logo=svelte&logoColor=fff) | Browser-based editorial management |
| ![GitHub](https://img.shields.io/badge/GitHub-CMS_Backend-181717?style=for-the-badge&logo=github&logoColor=fff) | Authentication and publication versioning |
| ![Zod](https://img.shields.io/badge/Zod-Validation-3E67B1?style=for-the-badge&logo=zod&logoColor=fff) | Post frontmatter validation |
| ![RSS](https://img.shields.io/badge/RSS-Feed-FFA500?style=for-the-badge&logo=rss&logoColor=fff) | Publication distribution |
| ![Vercel](https://img.shields.io/badge/Vercel-Deployment-000?style=for-the-badge&logo=vercel&logoColor=fff) | Hosting and security headers |

The project also uses the official `@astrojs/rss` and `@astrojs/sitemap` integrations, as well as `@tailwindcss/vite`.

## 🗺️ Routes

| Route | Description |
| --- | --- |
| `/` | Featured article, recent posts, and categories |
| `/blog` | Paginated article listing |
| `/blog/:slug` | Full article content |
| `/categoria/:slug` | Articles filtered by category |
| `/sobre` | Blog and author introduction |
| `/contato` | Contact information |
| `/newsletter` | Newsletter subscription page |
| `/politica-de-privacidade` | Privacy policy |
| `/termos-de-uso` | Terms of use |
| `/rss.xml` | RSS feed |
| `/admin` | Sveltia CMS editorial dashboard |

The available category slugs are `edi`, `produtividade`, and `tecnologia`.

## 📁 Project structure

```text
pulso-tecnologico/
├── public/
│   ├── admin/
│   │   ├── config.yml              # Sveltia CMS editorial configuration
│   │   └── index.html              # Dashboard entry point and theme
│   ├── images/posts/               # Article images
│   └── robots.txt                  # Search engine rules
├── src/
│   ├── components/                 # Header, footer, cards, and SEO
│   ├── content/blog/               # Markdown articles
│   ├── layouts/                    # Base and article layouts
│   ├── pages/
│   │   ├── blog/                   # Article listing and dynamic pages
│   │   ├── categoria/              # Dynamic category pages
│   │   ├── contato.astro
│   │   ├── index.astro
│   │   ├── newsletter.astro
│   │   ├── politica-de-privacidade.astro
│   │   ├── rss.xml.js
│   │   ├── sobre.astro
│   │   └── termos-de-uso.astro
│   ├── styles/global.css           # Tailwind, theme, and global styles
│   └── content.config.js           # Article collection schema
├── astro.config.mjs                # Site, sitemap, and Tailwind integration
├── vercel.json                     # HTTP security headers
├── package.json
└── LICENSE
```

## ▶️ Getting started

### Prerequisites

- A Node.js version compatible with Astro 5;
- npm.

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Astro will print the local address in the terminal, usually `http://localhost:4321`.

### Production build

```bash
npm run build
```

The static output is generated in `dist/`.

### Build preview

```bash
npm run preview
```

The frontend build does not require environment variables. Dashboard authentication uses the OAuth service configured in `public/admin/config.yml`.

## ✍️ Publishing articles

### Through the dashboard

1. Open `/admin` in the deployed environment.
2. Sign in with GitHub.
3. Create or edit a publication in the **Posts** collection.
4. Complete the editorial fields and publish the change.

The CMS writes Markdown files to `src/content/blog` and media to `public/images/posts`. To use a different repository or domain, update `repo`, `branch`, and `base_url` in `public/admin/config.yml` and provide a compatible OAuth service.

### Manually

Create a `.md` file in `src/content/blog` with the following frontmatter:

```yaml
---
title: "Article title"
description: "Summary used by search engines and social networks."
date: 2026-05-01
cover: "/images/posts/my-article/cover.jpg"
category: "Tecnologia"
tags: ["technology", "automation"]
author: "Thiago Abreu"
readTime: 5
draft: false
featured: false
---
```

The schema accepts `EDI`, `Produtividade`, and `Tecnologia` as category values. Posts with `draft: true` are excluded from pages, the RSS feed, and generated article routes.

## ☁️ Vercel deployment

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and select **Add New > Project**.
3. Import the `TkAbreu/pulso-tecnologico` repository.
4. Confirm **Astro** as the framework.
5. Use `npm run build` as the build command and `dist` as the output directory.
6. Configure the desired domain and deploy.

The versioned `vercel.json` file already defines general security headers and a dedicated policy for `/admin`. If the domain changes, also update `site` in `astro.config.mjs`, absolute URLs used by SEO and sharing, the sitemap declared in `public/robots.txt`, and the CMS OAuth configuration.

## 📸 Screenshots

Reserved space for real application screenshots.

### Home

<!-- Add the Home screenshot here. -->

### Article

<!-- Add an article screenshot here. -->

### Editorial dashboard

<!-- Add the Sveltia CMS screenshot here. -->

## 🧭 Roadmap

- [ ] Connect the newsletter form to an email provider;
- [ ] Add the referenced cover images that are currently missing;
- [ ] Add the favicon and default Open Graph image referenced by the layout;
- [ ] Investigate and remove duplicate ID warnings emitted by the content collection during builds;
- [ ] Add a custom not-found page;
- [ ] Integrate the prepared advertising slots if monetization is enabled;
- [ ] Add real screenshots to the README;
- [ ] Add automated tests and a continuous validation workflow.

### Validation status

On July 20, 2026, `npm run build` completed successfully: 13 static pages were generated, together with the RSS feed and sitemap. The build reported duplicate ID warnings for part of the article collection, as recorded in the roadmap above.

## 👥 Authorship and development

The blog's editorial content and public identity present **Thiago Abreu** as its founder, author, and EDI Systems Analyst.

The project was developed and is maintained by:

**Tharick Abreu**  
Fullstack JavaScript Developer | React | Astro | Tailwind CSS | Node.js

[![GitHub](https://img.shields.io/badge/GitHub-TkAbreu-181717?style=for-the-badge&logo=github)](https://github.com/TkAbreu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tharick_Abreu-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/tharick-abreu-836aa33ab/)

## 📄 License

This project is available under the [MIT License](LICENSE). Copyright © 2026 Tharick Abreu.
