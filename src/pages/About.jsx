// About.jsx

import React from "react";
import { Outlet } from "react-router-dom";

const AdminNavbar = React.lazy(() => import("@/components/inkia/AdminNavbar"));

function About() {
  return (
    <div>
      <AdminNavbar />
      <div>
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default About;
