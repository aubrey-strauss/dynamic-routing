import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//BrowserRouter watches the browser’s address bar. When the URL changes, it tells React which page to show.
// It’s called a “router” because it routes (directs) each URL to the right page, like a mail sorter.
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
