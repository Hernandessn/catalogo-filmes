# Manual de Desenvolvimento: Catálogo de Filmes

Guia para a equipe (6 pessoas) que vai construir o trabalho final de Front-end Frameworks. Fluxo simplificado de Git: **todo mundo trabalha na `main`, sem branches e sem Pull Request**. Por isso as regras da seção 4 são importantes. Leiam com atenção.

---

## 1. Visão geral do que vamos construir

Um catálogo de filmes com dados estáticos (`public/movies.json`), feito em **React + TypeScript**.

- **5 páginas:** Home, Catálogo, Detalhe do filme, Favoritos, Sobre
- **12 componentes/arquivos de interface**, divididos entre os 6 integrantes
- **4 ou mais hooks:** `useState`, `useEffect`, `useContext`, `useMemo`, `useParams` e 3 custom hooks
- **Sem login e sem back-end**

| Página | Rota |
| --- | --- |
| Home | `/` |
| Catálogo | `/catalogo` |
| Detalhe | `/filme/:id` |
| Favoritos | `/favoritos` |
| Sobre | `/sobre` |

**A nota do trabalho está na apresentação.** Cada pessoa precisa saber explicar, linha por linha, o código que escreveu. Código que você não consegue explicar vale menos do que um código simples que você domina. Por isso cada um escreve a sua parte, mesmo que demore mais.

---

## 2. Contas e ferramentas necessárias

### 2.1 Conta no GitHub

1. Acesse [github.com](https://github.com) e clique em **Sign up**
2. Use um e-mail que você acesse com frequência
3. Confirme o e-mail
4. Mande seu **usuário do GitHub** para o Hernandes, para ele te adicionar no repositório

### 2.2 Instalar o Git

- **Windows:** baixe em [git-scm.com](https://git-scm.com/downloads) e instale com as opções padrão
- **Mac:** abra o Terminal e digite `git --version`; se não tiver, o Mac oferece a instalação

Configure seu nome e e-mail **uma única vez**. Use o **mesmo e-mail do GitHub**, senão seus commits não aparecem ligados ao seu perfil e fica difícil provar quem fez o quê:

```
git config --global user.name "Seu Nome"
git config --global user.email "seu-email-do-github@exemplo.com"
git config --global pull.rebase true
```

A terceira linha faz o `git pull` funcionar sem criar commits de "merge" desnecessários. Não pule.

### 2.3 Instalar o Node.js

1. Baixe a versão **LTS** em [nodejs.org](https://nodejs.org) e instale com as opções padrão
2. Feche e reabra o terminal
3. Confirme com `node -v` (precisa ser 20.19 ou superior) e `npm -v`

### 2.4 Instalar o VS Code

1. Baixe em [code.visualstudio.com](https://code.visualstudio.com)
2. Extensões recomendadas (ícone de blocos na lateral):
   - **ESLint** (mostra erros no código)
   - **Prettier** (formata o código)
   - **ES7+ React/Redux/React-Native snippets** (atalhos, como `rafce`)

---

## 3. Entrando no projeto

1. Abra o terminal na pasta onde quer guardar o projeto
2. Clone o repositório (o Hernandes manda o link no grupo):

```
git clone https://github.com/SEU_USUARIO/catalogo-filmes.git
cd catalogo-filmes
```

3. Instale as dependências e rode o projeto:

```
npm install
npm run dev
```

4. Abra o endereço que aparecer no terminal (normalmente http://localhost:5173)
5. Abra no VS Code com `code .`

A pasta `node_modules` é criada pelo `npm install` e **não vai para o GitHub**. Se ela aparecer no `git status`, avise o Hernandes.

---

## 4. Fluxo de trabalho (todos na `main`)

Não usamos branches. Isso simplifica, mas tem um risco: um erro de qualquer pessoa aparece para todo mundo. Para isso não virar problema, **sigam estas regras**:

1. **Antes de começar a trabalhar, sempre:** `git pull`
2. **Só edite os arquivos da sua tarefa** (seção 8). Cada arquivo tem um dono. Duas pessoas no mesmo arquivo causam conflito.
3. **Arquivos compartilhados** (veja a tabela abaixo das regras) têm um responsável. Se você precisar de uma mudança neles, avise no grupo e combine com o responsável antes de mexer.
4. **Antes de commitar, rode `npm run build`.** Se der erro de TypeScript, corrija antes. Nunca suba código que quebra o build.
5. **Rode `git status` antes do `git add`** e confira que só aparecem **os seus arquivos**.
6. **Commits pequenos e frequentes.** Termine um componente, commite e suba. Não acumule três dias de trabalho num commit só.
7. **Se o `git push` for rejeitado**, outra pessoa subiu antes de você. Rode `git pull` e depois `git push` de novo.
8. **Se aparecer conflito, pare.** Não apague nada às pressas. Peça ajuda no grupo: quem já entendeu conflito de Git ajuda, de preferência em chamada com tela compartilhada. Conflito é hora de aprender com calma, não de resolver sozinho no susto.
9. **Nunca use `git push --force`.** Isso pode apagar o trabalho dos outros.
10. **Se um commit quebrar o projeto**, quem perceber avisa no grupo na hora, sem apontar culpado. Quem fez o commit conserta com um novo commit. Se ele não estiver online e for urgente, qualquer um que saiba pode desfazer com `git revert` (seção 6).

### Arquivos compartilhados e seus responsáveis

| Arquivo | Responsável |
| --- | --- |
| `src/App.tsx`, `src/main.tsx` | Hernandes |
| `src/types.ts`, `public/movies.json`, `package.json` | Rony |
| `src/index.css` | Kallyson |
| `README.md` | Francisco |

Responsável não é "quem faz tudo". É quem decide como a mudança entra, para não ter duas pessoas editando ao mesmo tempo.

### Como é feita a revisão (em duplas)

Depois do seu push, **o seu par de revisão** abre o commit no GitHub (aba *Commits*), lê o código e confere duas coisas:

1. Faz sentido e roda?
2. Ele consegue **explicar com as próprias palavras** o que o código faz? Se não conseguir, a dúvida vai para você, e é uma ótima ocasião para você treinar a explicação da apresentação.

| Dupla | Cada um revisa os commits do outro |
| --- | --- |
| Hernandes e Rony | `FavoritesProvider` e hooks |
| Kallyson e Francisco | `Header`, `HomePage` e `MovieCard`, `MovieList` |
| Natanael e Lucas | `SearchBar`, `GenreFilter` e `FavoriteButton`, `Rating` |

Se algo precisar mudar, avisem no grupo e quem escreveu corrige **com um novo commit**. Isso é normal e esperado. Ninguém acerta de primeira, nem quem já conhece React.

### Como pedir e dar ajuda

**Para pedir:**
- Pergunte **no grupo**, não no privado. Assim qualquer um pode responder e todo mundo aprende.
- Mande o que você tentou, a mensagem de erro (texto ou print) e o nome do arquivo. "Não funciona" sozinho não ajuda ninguém.
- Travou por mais de 20 a 30 minutos? Pergunte. Não é fraqueza, é economia de tempo.

**Para ajudar:**
- Ajuda é **explicar, não escrever pelo colega**. Mostre onde olhar, faça perguntas, e deixe a pessoa digitar.
- Se for demorar, chame para uma ligação com tela compartilhada.
- Hernandes e Rony já conhecem React e vão ajudar bastante, mas **ninguém precisa esperar por eles**. Quem já entendeu um conceito (props, `.map()`, `useContext`) ajuda quem ainda não entendeu. Explicar para um colega é o melhor jeito de testar se você sabe.

### Ordem de entrega (quem depende de quem)

| Quem espera | Espera por | Quem avisa no grupo |
| --- | --- | --- |
| Hernandes (`FavoritesProvider`) | `useLocalStorage` do Rony | Rony |
| Lucas (`FavoriteButton`, `FavoritesPage`) | `FavoritesProvider` do Hernandes | Hernandes |
| Kallyson (`HomePage`) | `useMovies` do Rony e `MovieList` do Francisco | Rony e Francisco |
| Rony (`CatalogPage`) | `SearchBar` e `GenreFilter` do Natanael | Natanael |

**Hernandes e Rony fazem primeiro** o `useLocalStorage` e o `FavoritesProvider`, na semana 1. Enquanto isso não estiver na `main`, o Lucas começa pelo `Rating`.

Quando terminar uma peça de que outra pessoa depende, **avise no grupo** com "pronto, já está na main".

---

## 5. Commits (conventional commits)

Toda mensagem de commit segue este padrão:

```
tipo: descrição curta do que foi feito
```

| Tipo | Quando usar | Exemplo |
| --- | --- | --- |
| `feat` | Nova funcionalidade ou componente | `feat: adiciona componente SearchBar` |
| `fix` | Correção de erro | `fix: corrige filtro que ignorava maiúsculas` |
| `style` | Ajuste visual, sem mudar funcionalidade | `style: ajusta espaçamento do card` |
| `docs` | Documentação | `docs: adiciona prints das telas no README` |
| `refactor` | Reorganiza código sem mudar o que ele faz | `refactor: separa lógica de filtro em função` |

Comandos para commitar:

```
git status
git add src/components/SearchBar.tsx
git commit -m "feat: adiciona componente SearchBar"
git push
```

Dica: dá para adicionar só os seus arquivos pelo nome, como acima, em vez de `git add .`. É mais seguro.

---

## 6. Comandos essenciais (cola rápida)

| Comando | O que faz |
| --- | --- |
| `git status` | Mostra o que mudou desde o último commit |
| `git pull` | Traz as atualizações mais recentes do GitHub |
| `git add arquivo` | Marca um arquivo para o commit |
| `git commit -m "mensagem"` | Salva as mudanças com uma mensagem |
| `git push` | Envia os commits para o GitHub |
| `git log --oneline` | Mostra o histórico resumido, com o código de cada commit |
| `git revert código` | Desfaz um commit criando um novo commit (não apaga o histórico) |
| `npm install` | Instala as dependências |
| `npm run dev` | Roda o projeto no navegador |
| `npm run build` | Confere se o TypeScript está correto e gera a versão final |

---

## 7. Boas práticas

- **Escreva o seu código.** Você pode pesquisar, ler a documentação em [react.dev](https://react.dev) e pedir ajuda aos colegas no grupo. Mas o que você commita precisa ser algo que você sabe explicar. Se não entendeu uma linha, pergunte antes de subir.
- **Tipagem:** use os tipos de `src/types.ts` (`Movie`). Não crie outra interface `Movie` e não use `any`.
- **Não mude os nomes de props e funções combinados** (por exemplo `toggleFavorite`, `isFavorite`, `onChange`). Outros componentes dependem deles.
- **Teste no navegador** antes de commitar, não só o `npm run build`.
- **Não commite** `node_modules`, arquivos de configuração do seu computador ou prints soltos na raiz.
- **Dúvida trava mais que erro.** Se travou por mais de 20 a 30 minutos, avise no grupo.
- **Apague** os comentários `TODO` dos seus arquivos quando terminar a tarefa.

---

## 8. Divisão de tarefas

As classes CSS já existem em `src/index.css`. Use-as com `className`: `app`, `brand`, `grid`, `card`, `card-actions`, `meta`, `filters`, `fav-btn` (e `fav-btn on` quando favoritado), `detail`, `empty`, `rating`. Para alterar o CSS, peça ao Hernandes.

### Hernandes: contexto e rotas

**Arquivos:** `src/context/FavoritesContext.tsx`, `src/components/Layout.tsx`, `src/App.tsx`, `src/main.tsx`

- `FavoritesContext`: criar o contexto com `favoriteIds`, `toggleFavorite(id)` e `isFavorite(id)`. O Provider guarda os ids usando o `useLocalStorage` do Rony, com a chave `"favoritos"`. Criar o hook `useFavorites()` que lança erro se usado fora do Provider.
- `Layout`: `Header`, `<Outlet />` dentro de `<main>` e `Footer`.
- `App.tsx`: as 5 rotas e uma rota `*` para página não encontrada.

**Além do código:** responsável por `App.tsx` e `main.tsx`; revisa os commits do Rony.

**Vai explicar na apresentação:** Context API (por que `useContext` e não props), `<Outlet />`, como as rotas funcionam.
**Pronto quando:** favoritar numa página aparece em outra, e continua depois de recarregar.

### Carlos Rony: hooks e páginas dinâmicas

**Arquivos:** `src/hooks/useLocalStorage.ts`, `src/hooks/useMovies.ts`, `src/hooks/usePageTitle.ts`, `src/pages/CatalogPage.tsx`, `src/pages/MovieDetailPage.tsx`

- `useLocalStorage<T>(key, initialValue)`: funciona como `useState`, mas lê o valor salvo no início e grava a cada mudança. **Prioridade 1**, o Hernandes depende dele.
- `useMovies()`: busca `/movies.json` com `fetch` e devolve `{ movies, loading, error }`.
- `usePageTitle(title)`: atualiza o título da aba do navegador.
- `CatalogPage`: estados de busca e gênero; lista de gêneros sem repetição com `useMemo`; lista filtrada por título e gênero; renderiza `SearchBar`, `GenreFilter` e `MovieList`; trata `loading` e `error`.
- `MovieDetailPage`: ler o id com `useParams`, achar o filme, tratar "filme não encontrado", mostrar os dados com `Rating` e `FavoriteButton`.

**Além do código:** responsável por `types.ts`, `movies.json` e `package.json`; revisa os commits do Hernandes; tira o print da página de Detalhe.

**Vai explicar na apresentação:** custom hooks, `useEffect` e o array de dependências, `useMemo`, por que o estado de busca fica na página e não nos componentes filhos, `useParams`.
**Pronto quando:** buscar e filtrar funcionam juntos, e abrir `/filme/999` não quebra a tela.

### Kallyson: navegação e página inicial

**Arquivos:** `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/pages/HomePage.tsx`

- `Header`: nome do site e 4 links com `NavLink` (Home, Catálogo, Favoritos, Sobre). O link da página atual recebe a classe `active`. Na Home, use `end` para ela não ficar ativa em todas as páginas.
- `Footer`: texto do curso e ano atual.
- `HomePage` (**faça por último**): boas-vindas, link para o catálogo e os 3 filmes mais bem avaliados usando `useMovies` e `MovieList`. Ordene uma **cópia** do array, nunca o original.

**Além do código:** responsável pelo `index.css`; revisa os commits do Francisco; tira o print da Home.

**Vai explicar na apresentação:** JSX, diferença entre `<a>`, `Link` e `NavLink`, como a rota ativa é detectada.
**Pronto quando:** clicar nos links troca de página sem recarregar o navegador.

### Francisco: cartões e lista de filmes

**Arquivos:** `src/components/MovieCard.tsx`, `src/components/MovieList.tsx`, `src/pages/AboutPage.tsx`

- `MovieCard`: recebe `movie: Movie` por props. Mostra título, ano e gênero, `Rating`, um `Link` para `/filme/:id` e o `FavoriteButton`.
- `MovieList`: recebe `movies: Movie[]`. Usa `.map()` renderizando um `MovieCard` por filme, **com `key`**. Se a lista estiver vazia, mostra "Nenhum filme encontrado."
- `AboutPage`: texto sobre o projeto e lista dos 6 integrantes usando `.map()`.

**Além do código:** responsável pelo `README.md` final (cada um manda o print da sua página para ele); revisa os commits da Kallyson; tira o print da página Sobre.

**Vai explicar na apresentação:** props e `interface`, `.map()` e por que a `key` existe e o que acontece sem ela, `Link` com rota dinâmica.
**Pronto quando:** a lista mostra os filmes e a mensagem de lista vazia aparece quando o filtro não acha nada.

### Natanael: busca e filtro

**Arquivos:** `src/components/SearchBar.tsx`, `src/components/GenreFilter.tsx`

- `SearchBar`: recebe `value` e `onChange(value: string)`. É um `<input>` controlado: o valor vem de fora e cada digitação chama `onChange`.
- `GenreFilter`: recebe `genres: string[]`, `selected: string` e `onChange(genre: string)`. É um `<select>` com a opção "Todos os gêneros" (valor vazio) e uma `<option>` por gênero, com `key`.

Os dois componentes **não guardam estado**. O estado fica no `CatalogPage` do Rony.

**Além do código:** revisa os commits do Lucas; tira o print do Catálogo; cuida do deploy opcional (Vercel ou Netlify).

**Vai explicar na apresentação:** input controlado (`value` + `onChange`), `e.target.value`, props que são funções, e o caminho completo do dado: digitar → `onChange` → `setSearch` no `CatalogPage` → lista filtrada. Sente com o Rony (que escreveu o `CatalogPage`) ou com qualquer colega que já tenha entendido esse fluxo, porque o professor pode perguntar sobre `useState` mesmo o seu código não usando.
**Pronto quando:** digitar na busca filtra a lista a cada letra.

### Lucas: favoritos

**Arquivos:** `src/components/Rating.tsx`, `src/components/FavoriteButton.tsx`, `src/pages/FavoritesPage.tsx`

- `Rating`: recebe `value: number` e mostra a nota com uma casa decimal (`toFixed(1)`), como "8.7 / 10".
- `FavoriteButton`: recebe `movieId: number`. Usa `useFavorites()` para saber se o filme é favorito. O texto e a classe mudam conforme o estado (`fav-btn on`), e o clique chama `toggleFavorite`. **Depende do Hernandes.**
- `FavoritesPage`: usa `useMovies` e `useFavorites`, filtra os filmes cujo id está em `favoriteIds` e mostra com `MovieList`. Se não houver nenhum, mostra uma mensagem e um link para o catálogo.

**Além do código:** revisa os commits do Natanael; tira o print de Favoritos.

**Vai explicar na apresentação:** `useContext` consumido por um hook, renderização condicional, por que o botão não recebe `isFavorite` por props.
**Pronto quando:** favoritar, trocar de página, recarregar o navegador, e o filme continuar favoritado.
