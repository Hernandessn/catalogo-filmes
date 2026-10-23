// Tipo que descreve um filme do catálogo.
// Todos os componentes importam este tipo (não criamos outra interface Movie).
export interface Movie {
  id: number; // identificador único (usado na rota /filme/:id)
  title: string; // título do filme
  year: number; // ano de lançamento
  genre: string; // gênero (ex.: "Ação")
  rating: number; // nota de 0 a 10
  synopsis: string; // sinopse
  director: string; // diretor
}
