import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.Router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

export const TomyiShopApp = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={appRouter} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
