import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "../actions/get-product.action";
import { useParams, useSearchParams } from "react-router";

export const useProduct = () => {
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
    case "25-50":
      minPrice = 25;
      maxPrice = 50;
      break;
    case "50-100":
      minPrice = 50;
      maxPrice = 100;
      break;
    case "100-200":
      minPrice = 100;
      maxPrice = 200;
      break;
    case "200+":
      minPrice = 200;
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
      getProductAction({
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
