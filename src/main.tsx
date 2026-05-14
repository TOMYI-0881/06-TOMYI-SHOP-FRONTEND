import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TomyiShopApp } from "./TomyiShopApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TomyiShopApp />
  </StrictMode>,
);
