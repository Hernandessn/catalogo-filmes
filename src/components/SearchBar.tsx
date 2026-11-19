interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// Input controlado: o valor vem do pai (props) e cada digitação avisa o pai.
export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar filme pelo título..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
