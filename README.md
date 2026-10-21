# Catálogo de Filmes

Trabalho final da disciplina **Front-end Frameworks** (AV2) do curso de Análise e Desenvolvimento de Sistemas.

Aplicação web para buscar filmes, filtrar por gênero, ver detalhes e salvar favoritos. Os dados vêm de um arquivo JSON local, sem back-end.

## O que o sistema faz

- **Home:** boas-vindas e os filmes mais bem avaliados.
- **Catálogo:** lista de todos os filmes com busca por título e filtro por gênero.
- **Detalhe do filme:** sinopse, diretor, ano, nota e botão de favoritar.
- **Favoritos:** lista dos filmes favoritados. Os favoritos continuam salvos ao recarregar a página.
- **Sobre:** descrição do projeto e integrantes.

## Tecnologias

- React 19 + TypeScript
- Vite
- React Router
- Dados em `public/movies.json`

## Como rodar

Requisitos: [Node.js](https://nodejs.org) 20.19 ou superior (versão LTS recomendada).

```bash
git clone https://github.com/SEU_USUARIO/catalogo-filmes.git
cd catalogo-filmes
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção:

```bash
npm run build
```

## Páginas e rotas

| Página | Rota |
| --- | --- |
| Home | `/` |
| Catálogo | `/catalogo` |
| Detalhe do filme | `/filme/:id` |
| Favoritos | `/favoritos` |
| Sobre | `/sobre` |

## Hooks utilizados

| Hook | Onde é usado |
| --- | --- |
| `useState` | busca e gênero no catálogo, estados do `useMovies` e do `useLocalStorage` |
| `useEffect` | carregar os filmes, salvar favoritos, atualizar o título da aba |
| `useContext` | `useFavorites`, que compartilha os favoritos entre as páginas |
| `useMemo` | lista de gêneros e lista filtrada no catálogo |
| `useParams` | ler o id do filme na página de detalhe |
| Custom hooks | `useLocalStorage`, `useMovies`, `usePageTitle` |

## Estrutura do repositório

```
/public/movies.json     dados dos filmes
/src/components/        componentes reutilizáveis (Header, Footer, MovieCard, ...)
/src/pages/             páginas (Home, Catálogo, Detalhe, Favoritos, Sobre)
/src/context/           contexto de favoritos
/src/hooks/             custom hooks
/src/types.ts           tipos TypeScript (interface Movie)
/docs/                  documentação da equipe
```

## Integrantes e componentes

| Integrante | Componentes e arquivos | Conceitos |
| --- | --- | --- |
| Hernandes | `App` (rotas), `Layout`, `FavoritesProvider` | React Router, `Outlet`, Context API |
| Carlos Rony | `CatalogPage`, `MovieDetailPage`, hooks `useLocalStorage`, `useMovies`, `usePageTitle` | `useEffect`, `useMemo`, `useParams`, custom hooks |
| Kallyson | `Header`, `Footer`, `HomePage` | JSX, `NavLink` |
| Francisco | `MovieCard`, `MovieList`, `AboutPage` | props, `interface`, `.map()` com `key` |
| Natanael | `SearchBar`, `GenreFilter` | input controlado, props de função |
| Lucas | `FavoriteButton`, `Rating`, `FavoritesPage` | `useContext`, renderização condicional |


## Documentação da equipe

Guia de trabalho em grupo, regras de Git e tarefa de cada integrante: [docs/manual-desenvolvimento.md](docs/manual-desenvolvimento.md)
