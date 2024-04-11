import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { AppLayout } from "./layout/AppLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <AppLayout>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AppLayout>
        </div>
      </div>
    </RecoilRoot>
  </React.StrictMode>
);
