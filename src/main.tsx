import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Navigation } from "./navigation";

import { startApp } from "./bootstrap";

function renderApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Navigation />
    </StrictMode>
  );
}

void startApp(renderApp);
