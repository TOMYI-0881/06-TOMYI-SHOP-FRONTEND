import CustomPagination from "@/components/custom/CustomPagination";
import { products } from "@/mocks/Products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";
import { useProduct } from "@/shop/hooks/useProduct";

export const HomePage = () => {
  const { data } = useProduct();
  return (
    <>
      <CustomJumbotron title="Todos los Productos" />

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};
