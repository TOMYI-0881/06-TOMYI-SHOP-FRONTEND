import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router";

const FilterPriceProps: string[] = ["any", "0-50", "50-100", "100-200", "200+"];

const sizes = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
];

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSizes = searchParams.get("sizes")?.split(",") || [];
  const currentPrice = searchParams.get("price") || "any";
  const filterPrice = FilterPriceProps.includes(currentPrice)
    ? currentPrice
    : "any";

  //funcion para manejar el cambio de talla, agregando o quitando la talla seleccionada del array de tallas actuales y persistiendo el cambio en la URL
  const handleSizeChanged = (size: string) => {
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter((s) => s !== size)
      : [...currentSizes, size];

    // Creamos una copia de los query params actuales
    // para evitar mutar directamente searchParams.
    const nextParams = new URLSearchParams(searchParams);
    // Cuando cambia un filtro, la paginación se reinicia a 1
    // para evitar páginas inválidas con los nuevos resultados.
    nextParams.set("page", "1");

    if (newSizes.length === 0) {
      nextParams.delete("sizes");
    } else {
      //convertir el array a string separado por comas para persistirlo en la URL
      nextParams.set("sizes", newSizes.join(","));
    }

    setSearchParams(nextParams);
  };

  const handlePriceChange = (price: string) => {
    //persistencia URL
    searchParams.set("page", "1");
    searchParams.set("price", price);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filtros</h3>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h4 className="font-medium">Tallas</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size.id}
              variant={currentSizes.includes(size.id) ? "default" : "outline"}
              size="sm"
              className="h-8"
              onClick={() => handleSizeChanged(size.id)}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Precio</h4>
        <RadioGroup defaultValue={filterPrice} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="any"
              id="priceAny"
              checked={filterPrice === "any"}
              onClick={() => handlePriceChange("any")}
            />
            <Label htmlFor="priceAny" className="text-sm cursor-pointer">
              Cualquier precio
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="0-50"
              id="price1"
              checked={filterPrice === "0-50"}
              onClick={() => handlePriceChange("0-50")}
            />
            <Label htmlFor="price1" className="text-sm cursor-pointer">
              $0 - $50
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="50-100"
              id="price2"
              checked={filterPrice === "50-100"}
              onClick={() => handlePriceChange("50-100")}
            />
            <Label htmlFor="price2" className="text-sm cursor-pointer">
              $50 - $100
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="100-200"
              id="price3"
              checked={filterPrice === "100-200"}
              onClick={() => handlePriceChange("100-200")}
            />
            <Label htmlFor="price3" className="text-sm cursor-pointer">
              $100 - $200
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="200+"
              id="price4"
              checked={filterPrice === "200+"}
              onClick={() => handlePriceChange("200+")}
            />
            <Label htmlFor="price4" className="text-sm cursor-pointer">
              $200+
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterSidebar;
