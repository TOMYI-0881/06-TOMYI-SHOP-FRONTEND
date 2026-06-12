import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import { ShopLayout } from "../shop/Layouts/ShopLayout";
import { HomePage } from "../shop/pages/home/HomePage";
import { ProductPage } from "../shop/pages/product/ProductPage";
import { GenderPage } from "../shop/pages/gender/GenderPage";

import { AdminProductPage } from "../admin/pages/product/AdminProductPage";
import { AdminProductsPage } from "../admin/pages/products/AdminProductsPage";
import { DashboardPage } from "@/admin/pages/dashboard/DashboardPage";

const AuthLayout = lazy(() => import("../auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("../admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  //Main Routes
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "gender/:gender/product/:idSlug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },

  //Auth Routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <></>,
      },
      {
        path: "register",
        element: <></>,
      },
    ],
  },

  //Admin Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "products/:id",
        element: <AdminProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
