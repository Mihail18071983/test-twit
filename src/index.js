import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
