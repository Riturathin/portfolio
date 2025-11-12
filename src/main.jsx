import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/portfolio">
     <ThemeProvider>
      <AppRoute />
    </ThemeProvider>
  </BrowserRouter>
);
