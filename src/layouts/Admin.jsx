import React from "react";
import { Outlet } from "react-router-dom";

const AdminNavbar = React.lazy(() => import("@/components/inkia/AdminNavbar"));

function Admin() {
  return (
    <div>
      <AdminNavbar />
      <div className="max-w-[1320px] p-4 mx-auto">
        {/* This is where the nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
