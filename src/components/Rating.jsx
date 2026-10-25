interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  return <span className="rating">⭐ {value.toFixed(1)} / 10</span>;
}
