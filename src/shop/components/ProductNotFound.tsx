import { SearchX } from "lucide-react";

interface ProductNotFoundProps {
  searchTerm?: string;
  onClearSearch?: () => void;
}

export function ProductNotFound({
  searchTerm,
  onClearSearch,
}: ProductNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-muted/50">
        <SearchX
          className="h-10 w-10 text-muted-foreground"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="mt-6 text-xl font-medium text-foreground">
        Producto no encontrado
      </h3>

      {searchTerm && (
        <p className="mt-2 text-center text-muted-foreground">
          No encontramos resultados para{" "}
          <span className="font-medium text-foreground">
            &quot;{searchTerm}&quot;
          </span>
        </p>
      )}

      <p className="mt-4 max-w-md text-center text-sm text-muted-foreground">
        Intenta buscar con otras palabras clave o explora nuestras categorías
        para encontrar lo que buscas.
      </p>

      {onClearSearch && (
        <button
          onClick={onClearSearch}
          className="mt-6 rounded-md border border-foreground bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Limpiar búsqueda
        </button>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-muted-foreground">Sugerencias:</span>
        {["Camisetas", "Pantalones", "Sudaderas"].map((suggestion) => (
          <button
            key={suggestion}
            className="rounded-md border border-border px-3 py-1 text-sm text-foreground transition-colors hover:bg-muted"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
