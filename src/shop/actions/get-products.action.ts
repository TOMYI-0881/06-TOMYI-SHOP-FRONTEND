import { tesloApi } from "@/api/TesloApi";
import type { ProductResponse } from "@/interfaces/products.response";

const BASE_URL = import.meta.env.VITE_API_URL;

interface Options {
  limit?: string | number;
  offset?: string | number;
  gender?: string;
  sizes?: string;
  minPrice?: number;
  maxPrice?: number;
  q?: string;
}

export const getProductsAction = async (
  options: Options,
): Promise<ProductResponse> => {
  const { limit, offset, gender, sizes, minPrice, maxPrice, q } = options;
  const { data } = await tesloApi.get<ProductResponse>("/products", {
    params: {
      gender,
      limit,
      offset,
      sizes,
      minPrice,
      maxPrice,
      q,
    },
  });

  const productWithImageUrls = data.products.map((product) => ({
    ...product,
    images: product.images.map((image) => `${BASE_URL}/files/product/${image}`),
  }));

  return { ...data, products: productWithImageUrls };
};
