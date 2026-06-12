import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "../actions/get-products.action";
import { useParams, useSearchParams } from "react-router";

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const { gender } = useParams();
  console.log({ gender });

  const limit = searchParams.get("limit") || 9;
  const page = searchParams.get("page") || 1;
  const sizes = searchParams.get("sizes") || undefined;
  const price = searchParams.get("price") || "any";
  const query = searchParams.get("query") || undefined;

  let minPrice = undefined;
  let maxPrice = undefined;

  switch (price) {
    case "any":
      break;
    case "87000-177000":
      minPrice = 87000;
      maxPrice = 177000;
      break;
    case "177000-354000":
      minPrice = 177000;
      maxPrice = 354000;
      break;
    case "354000-707000":
      minPrice = 354000;
      maxPrice = 707000;
      break;
    case "707000+":
      minPrice = 707000;
      maxPrice = undefined;
      break;
  }

  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: [
      "products",
      {
        limit: limit,
        offset: offset,
        gender: gender,
        size: sizes,
        minPrice: minPrice,
        maxPrice: maxPrice,
        query: query,
      },
    ],
    queryFn: () =>
      getProductsAction({
        gender: gender,
        limit: isNaN(+limit) ? 9 : limit,
        offset: isNaN(offset) ? 0 : offset,
        sizes: sizes,
        minPrice: minPrice,
        maxPrice: maxPrice,
        q: query,
      }),
    staleTime: 1000 * 60 * 5, //5 minutos de data fresca
  });
};
