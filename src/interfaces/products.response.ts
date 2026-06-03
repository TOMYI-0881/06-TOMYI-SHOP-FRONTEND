import type { Product } from "./product.intertface";

export interface ProductResponse {
  count: number;
  pages: number;
  products: Product[];
}
