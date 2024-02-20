import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "@/router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap your app with React.Suspense */}
    <React.Suspense fallback={<div></div>}>
      <RouterProvider router={routerConfig} />
    </React.Suspense>
  </React.StrictMode>
);
