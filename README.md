# Lendas do Brasil

**Lendas do Brasil** é um álbum digital interativo que celebra os maiores jogadores do futebol brasileiro em um formato de livro virtual. O projeto combina navegação fluida, design elegante e experiência responsiva para desktop, tablet e celular.

## Objetivo

Criar um portfólio funcional que apresente os craques do futebol brasileiro como uma coleção digital. A ideia é oferecer uma experiência moderna, acessível e visualmente consistente, com páginas internas que remetem a um álbum de figurinhas e uma navegação intuitiva.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS puro
- react-pageflip
- lucide-react

## Funcionalidades

- Álbum digital com virada de páginas animada
- Navegação por botões e teclado
- Tema claro e escuro
- Layout responsivo para múltiplos dispositivos
- Indicador de página atual
- Placeholders de imagem com fallback seguro
- Estrutura de dados para jogadores

## Capturas de tela

> Substitua os espaços abaixo pelas capturas oficiais do projeto.

![Tela inicial do álbum](docs/screenshot-1.png)

![Página interna do álbum](docs/screenshot-2.png)

![Tema escuro e navegação](docs/screenshot-3.png)

## Como executar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Em seguida, abra o endereço exibido no terminal para visualizar a aplicação localmente.

### Build de produção

```bash
npm run build
```

### Pré-visualização da build

```bash
npm run preview
```

## Como publicar

1. Gere a build de produção com `npm run build`
2. Envie o conteúdo da pasta `dist/` para o serviço de hospedagem desejado
3. Para GitHub Pages, configure o deploy para o diretório `dist`
4. Para Netlify ou Vercel, conecte o repositório e use `npm run build` como comando de build

## Estrutura do projeto

```text
src/
├── components/
│   ├── Album.jsx
│   ├── AlbumCover.jsx
│   ├── AlbumPage.jsx
│   ├── PlayerCard.jsx
│   ├── NavigationControls.jsx
│   ├── ThemeToggle.jsx
├── data/
│   └── players.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Autor

**Wesley Farias**

## Licença

Esse projeto está licenciado sob a licença MIT.
