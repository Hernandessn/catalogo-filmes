interface SelectFilterProps {
  options: string[];
  selected: string;
  allLabel: string;
  onChange: (value: string) => void;
}

// Select reutilizável: serve para gênero, diretor, década...
export default function SelectFilter({ options, selected, allLabel, onChange }: SelectFilterProps) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">{allLabel}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}