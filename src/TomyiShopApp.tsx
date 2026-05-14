import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.Router";

export const TomyiShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
