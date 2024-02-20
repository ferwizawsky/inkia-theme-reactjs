/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const Home = React.lazy(() => import("@/pages/Home"));
const Admin = React.lazy(() => import("@/layouts/Admin"));
const Dashboard = React.lazy(() => import("@/pages/admin/Dashboard"));
const Invoice = React.lazy(() => import("@/pages/admin/Invoice"));

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "", // Redirect the default "/admin" route
        element: <Navigate to="dashboard" replace />,
      },

      {
        path: "dashboard", // Note: This is relative to the parent route "/admin"
        element: <Dashboard />,
      },
      {
        path: "invoice", // Note: This is relative to the parent route "/admin"
        element: <Invoice />,
      },
    ],
  },
]);
