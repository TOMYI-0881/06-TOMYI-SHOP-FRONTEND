import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "../actions/get-product.action";

export const useProduct = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductAction,
  });
};
