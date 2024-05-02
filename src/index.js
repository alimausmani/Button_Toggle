import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Toggle from "./ButtonTogle.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Toggle />
  </StrictMode>
);
