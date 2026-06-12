import { useStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getProductAction } from "@/shop/actions/get-product.action";
import { useProduct } from "@/shop/hooks/useProduc";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";

// export const ProductPage = () => {
// const { hola, count, inc, incD } = useStore();
// const count = useStore((state) => state.count);
// const incD = useStore((state) => state.incD);

//   return (
//     <>
//       <h1>contador {count}</h1>
//       <Button onClick={() => useStore.getState().inc()}>+1</Button>
//       <Button onClick={() => incD(5)}>-1</Button>
//     </>
//   );
// };

export const ProductPage = () => {
  // const { id } = Route.useParams();
  // const router = useRouter();
  // const product = getProductById(id);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query");
  // if (query) {
  //   console.log("hola");
  //   navigate("/");
  //   return;
  // }
  const { data: product } = useProduct();

  console.log({ product });

  const corte = ["regular", "oversize"];

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = (product?.price || 0) * quantity;
  console.log({ totalPrice });

  console.log({ quantity });

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-display text-4xl font-medium text-foreground">
            Producto no encontrado
          </h1>
          <p className="mt-3 text-muted-foreground">
            El producto que buscas no existe o fue removido.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images;
  const prevImage = () =>
    setActiveImage((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setActiveImage((i) => (i + 1) % images.length);

  // const related = product.filter((p) => p.id !== product.id);

  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-[1400px] px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">
            Inicio
          </Link>
          <span>/</span>
          <span className="uppercase tracking-wide">{product.gender}</span>
          <span>/</span>
          <span className="text-foreground">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={images[activeImage]}
                alt={`${product.id} — vista ${activeImage + 1}`}
                width={1024}
                height={1024}
                className="size-full object-cover"
              />
              <button
                onClick={prevImage}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={nextImage}
                aria-label="Imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
              >
                <ChevronRight className="size-5" />
              </button>
              <span className="absolute bottom-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
                {activeImage + 1} / {images.length}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={cn(
                    "aspect-square overflow-hidden rounded-lg border bg-card transition-all",
                    activeImage === i
                      ? "border-foreground ring-1 ring-foreground"
                      : "border-border opacity-70 hover:opacity-100",
                  )}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${i + 1}`}
                    loading="lazy"
                    width={256}
                    height={256}
                    className="size-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {product.gender}
            </span>
            <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-semibold text-foreground">
                ${totalPrice.toLocaleString("es-CO")}
              </span>
              {/* {product.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.compareAtPrice}
                </span>
              )} */}
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Color */}
            {product.colors && (
              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Color
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {product.colors[selectedColor].name}
                  </span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(i)}
                      aria-label={color.name}
                      className={cn(
                        "size-9 rounded-full border transition-all",
                        selectedColor === i
                          ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                          : "border-border",
                      )}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Talla
                </span>
                <button className="text-sm text-muted-foreground underline underline-offset-4">
                  Guía de tallas
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-12 rounded-md border px-4 py-2.5 text-sm font-medium transition-all",
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card text-foreground hover:border-foreground",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center rounded-md border border-border bg-card">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                  className="p-3 text-foreground transition-colors hover:bg-secondary"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                  className="p-3 text-foreground transition-colors hover:bg-secondary"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  if (!selectedSize) {
                    alert("Por favor selecciona una talla.");
                    return;
                  }
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ShoppingBag className="size-4" />
                Agregar al carrito
              </button>

              <button
                aria-label="Agregar a favoritos"
                className="rounded-md border border-border bg-card p-3.5 text-foreground transition-colors hover:bg-secondary"
              >
                <Heart className="size-5" />
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-8 sm:grid-cols-3">
              <Perk
                icon={<Truck className="size-5" />}
                label="Envío gratis +$170.000"
              />
              <Perk
                icon={<RefreshCw className="size-5" />}
                label="30 días de cambio"
              />
              <Perk
                icon={<ShieldCheck className="size-5" />}
                label="Calidad premium"
              />
            </div>

            {/* /* Description */}
            <div className="mt-10 space-y-6 border-t border-border pt-8">
              <div>
                <h2 className="font-display text-xl font-medium text-foreground">
                  Descripción
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.descriptionDetails}
                </p>
              </div>

              {product.details && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Detalles
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {product.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-foreground">·</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <dl className="grid grid-cols-2 gap-4 rounded-xl border border-border bg-card p-5">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Material
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {product.details[1]}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                    Corte
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {corte[Math.floor(Math.random() * 2)]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Related products */}
        {/* {related.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-8 font-display text-3xl font-medium text-foreground">
              También te puede gustar
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/producto/$id"
                  params={{ id: p.id }}
                  onClick={() => {
                    setActiveImage(0);
                    setSelectedSize(null);
                    router.invalidate();
                  }}
                  className="group block"
                >
                  <div className="aspect-square overflow-hidden rounded-xl border border-border bg-card">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {p.category} - {p.sizes.join(",")}
                    </p>
                    <p className="pt-1 text-lg font-semibold text-foreground">
                      ${p.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )} */}
      </main>
    </div>
  );
};

function Perk({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-foreground">
      <span className="text-muted-foreground">{icon}</span>
      {label}
    </div>
  );
}
