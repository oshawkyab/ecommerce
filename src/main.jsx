import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// IMPORT MAIN ROUTE
import MainRoute from "./routes/MainRoute/MainRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRoute />
  </StrictMode>
);
