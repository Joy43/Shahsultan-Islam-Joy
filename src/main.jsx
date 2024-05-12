import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProviders from "./Pages/Authentication/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { router } from "./Router/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <div className="max-w-screen-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>
);
