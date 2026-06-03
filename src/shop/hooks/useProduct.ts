import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "../actions/get-product.action";
import { useSearchParams } from "react-router";

export const useProduct = () => {
  const [searchParams] = useSearchParams();

  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;

  const offset = (Number(page) - 1) * Number(limit);
  return useQuery({
    queryKey: ["products", { limit: limit, offset: offset }],
    queryFn: () =>
      getProductAction({ limit: limit, offset: isNaN(+offset) ? 0 : offset }),
    staleTime: 1000 * 60 * 5, //5 minutos de data fresca
  });
};
