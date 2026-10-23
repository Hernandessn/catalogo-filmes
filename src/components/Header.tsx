import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) => (isActive ? "active" : undefined);

  return (
    <header>
      <span className="brand">🎬 Catálogo de Filmes</span>
      <nav>
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/catalogo" className={linkClass}>Catálogo</NavLink>
        <NavLink to="/favoritos" className={linkClass}>Favoritos</NavLink>
        <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
      </nav>
    </header>
  );
}
