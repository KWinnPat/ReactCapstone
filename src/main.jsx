import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";

import { AppProvider } from "./context/AppContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
