import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);