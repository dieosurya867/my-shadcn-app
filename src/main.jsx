import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //StrictMode untuk mengidentifikasi masalah dan render akan hanya sekali ketika dihapus
  <StrictMode>
    <App />
  </StrictMode>
);
