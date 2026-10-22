import { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage.ts";

interface FavoritesContextValue {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<number[]>("favoritos", []);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: number) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Hook de consumo: qualquer componente chama useFavorites() sem receber props.
export function useFavorites(): FavoritesContextValue {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites deve ser usado dentro de <FavoritesProvider>");
  return ctx;
}
