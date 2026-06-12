import { tesloApi } from "@/api/TesloApi";
import type { Product } from "@/interfaces/product.intertface";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProductAction = async (id: string): Promise<Product> => {
  const { data } = await tesloApi.get<Product>(`/products/${id}`);

  const productWithImageUrls = data.images.map(
    (image) => `${BASE_URL}/files/product/${image}`,
  );
  return {
    ...data,
    images: productWithImageUrls,
  };
};
