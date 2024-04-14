import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.tsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <BrowserRouter>
          <AppLayout>
            <App />
          </AppLayout>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
