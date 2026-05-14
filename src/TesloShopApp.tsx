import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.Router";

export const TesloShopApp = () => {
  return <RouterProvider router={appRouter} />;
};
