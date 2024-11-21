import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
