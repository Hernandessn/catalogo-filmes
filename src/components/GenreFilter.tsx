interface GenreFilterProps {
  genres: string[];
  selected: string;
  onChange: (genre: string) => void;
}

export default function GenreFilter({ genres, selected, onChange }: GenreFilterProps) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">Todos os gêneros</option>
      {genres.map((g) => (
        <option key={g} value={g}>
          {g}
        </option>
      ))}
    </select>
  );
}
