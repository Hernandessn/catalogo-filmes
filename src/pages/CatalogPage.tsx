// useMemo guarda um cálculo; useState guarda busca e diretor.
import { useMemo, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { usePageTitle } from "../hooks/usePageTitle";
import SearchBar from "../components/SearchBar";
import SelectFilter from "../components/SelectFilter";
import MovieList from "../components/MovieList";

export default function CatalogPage() {
  // Atualiza o título da aba.
  usePageTitle("Catálogo");
  // Busca os filmes e os estados de carregamento e erro.
  const { movies, loading, error } = useMovies();
  // O estado fica AQUI (na página) e não nos filhos, porque a busca
  // e o filtro precisam ser combinados para filtrar a lista.
  const [search, setSearch] = useState("");
  const [director, setDirector] = useState("");

  // Lista de diretores sem repetição (Set), recalculada só quando os filmes mudam.
  const directors = useMemo(
    () => Array.from(new Set(movies.map((m) => m.director))).sort(),
    [movies],
  );

  // Aplica busca por título E filtro de diretor.
  // Só recalcula quando movies, search ou director mudam.
  const filtered = useMemo(
    () =>
      movies.filter(
        (m) =>
          m.title.toLowerCase().includes(search.toLowerCase()) &&
          (director === "" || m.director === director),
      ),
    [movies, search, director],
  );

  // Enquanto carrega e se der erro.
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <h1>Catálogo</h1>
      <div className="filters">
        {/* Input controlado: o valor vem daqui e cada digitação chama setSearch. */}
        <SearchBar value={search} onChange={setSearch} />
        <SelectFilter
          options={directors}
          selected={director}
          allLabel="Todos os diretores"
          onChange={setDirector}
        />
      </div>
      <p className="meta">{filtered.length} filme(s)</p>
      <MovieList movies={filtered} />
    </>
  );
}