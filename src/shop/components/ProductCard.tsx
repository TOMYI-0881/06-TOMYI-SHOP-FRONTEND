import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ViewMode = "grid" | "list";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  viewMode?: ViewMode;
}

const ProductsCard = ({
  id,
  name,
  price,
  image,
  category,
  viewMode = "grid",
}: ProductCardProps) => {
  const isListView = viewMode === "list";

  return (
    <Card
      className={cn(
        "group border-0 shadow-none product-card-hover cursor-pointer",
        isListView && "w-full",
      )}
    >
      <CardContent className={cn(
        "p-0",
        isListView && "flex flex-row gap-4 p-4"
      )}>
        {/* Image Container */}
        <div
          className={cn(
            "relative overflow-hidden bg-muted rounded-lg",
            isListView ? "w-40 h-40 flex-shrink-0" : "aspect-square",
          )}
        >
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="image-overlay" />
        </div>

        {/* Content Container */}
        <div
          className={cn(
            isListView && "flex flex-col flex-1 justify-between py-2",
          )}
        >
          <div
            className={cn(
              isListView ? "space-y-2" : "pt-6 px-4 pb-4 space-y-3",
            )}
          >
            <div className={cn(isListView ? "space-y-0.5" : "space-y-1")}>
              <h3
                className={cn(
                  "font-medium tracking-tight",
                  isListView ? "text-base" : "text-sm",
                )}
              >
                {name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase">
                {category}
              </p>
            </div>
          </div>

          {/* Footer: Price and Button */}
          <div
            className={cn(
              "flex items-center justify-between",
              !isListView && "px-4 pb-4",
            )}
          >
            <p className="font-semibold text-lg">
              ${price}
            </p>
            <Button
              size="sm"
              variant="outline"
              className={cn(
                "transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20",
                isListView
                  ? "opacity-100 text-xs px-3 py-1 h-7"
                  : "opacity-0 group-hover:opacity-100 text-xs px-4 py-2 h-8",
              )}
            >
              Agregar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsCard;
