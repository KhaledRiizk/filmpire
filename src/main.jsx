import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.js";
import { createTheme, ThemeProvider } from "@mui/material";
import ToggleColorModeProvider from "./utils/ToggleColorMode";
import { Provider } from "react-redux";
import store from "./app/store.jsx";
import App from "./App.jsx";
import "./main.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorModeProvider>
    </Provider>
  </StrictMode>
);
