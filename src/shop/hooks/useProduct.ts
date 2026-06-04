import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "../actions/get-product.action";
import { useParams, useSearchParams } from "react-router";

export const useProduct = () => {
  const [searchParams] = useSearchParams();
  const { gender } = useParams();

  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;
  const sizes = searchParams.get("sizes") || undefined;

  const offset = (Number(page) - 1) * Number(limit);
  return useQuery({
    queryKey: [
      "products",
      { limit: limit, offset: offset, gender: gender, size: sizes },
    ],
    queryFn: () =>
      getProductAction({
        gender: gender,
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        sizes: sizes,
      }),
    staleTime: 1000 * 60 * 5, //5 minutos de data fresca
  });
};
