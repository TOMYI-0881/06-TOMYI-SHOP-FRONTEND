import { tesloApi } from "@/api/TesloApi";
import type { ProductResponse } from "@/interfaces/products.response";

export const getProductAction = async () => {
  const { data } = await tesloApi.get<ProductResponse>("/products");

  console.log(data);
  return data;
};
