import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { startApp } from "./bootstrap";
import App from "./App";

function renderApp() {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

void startApp(renderApp);
