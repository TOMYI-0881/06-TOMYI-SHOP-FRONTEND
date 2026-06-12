import { useQuery } from "@tanstack/react-query";
import { getProductAction } from "../actions/get-product.action";
import { useParams } from "react-router";

export const useProduct = () => {
  const { idSlug = "" } = useParams();
  console.log({ idSlug });
  return useQuery({
    queryKey: [
      "products",
      {
        idSlug: idSlug,
      },
    ],
    queryFn: () => getProductAction(idSlug),
    staleTime: 1000 * 60 * 5, //5 minutos de data fresca
  });
};
