import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//BrowserRouter watches the browser's address bar. When the URL changes, it tells React which page to show.
// It's called a "router" because it routes (directs) each URL to the right page, like a mail sorter.
import { BrowserRouter } from "react-router-dom";
// AuthProvider shares the login state (isAuthenticated, login, logout) with every component inside it.
import { AuthProvider } from "./context/AuthContext.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
