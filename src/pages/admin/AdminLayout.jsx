import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div
        className={`fixed md:fixed top-0 left-0 h-screen w-40 bg-indigo-700 text-white transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 font-bold text-lg border-b border-indigo-500">
          Admin
        </div>

        <nav className="flex flex-col p-4 space-y-3">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white text-indigo-700" : "hover:bg-indigo-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
  to="/admin"
  end
  className={({ isActive }) =>
    `px-4 py-2 rounded-lg transition ${
      isActive ? "bg-white text-indigo-700" : "hover:bg-indigo-600"
    }`
  }
>
  Add Product
</NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white text-indigo-700" : "hover:bg-indigo-600"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white text-indigo-700" : "hover:bg-indigo-600"
              }`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition ${
                isActive ? "bg-white text-indigo-700" : "hover:bg-indigo-600"
              }`
            }
          >
            Orders
          </NavLink>
        </nav>
      </div>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 md:ml-40 p-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden mb-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Menu
        </button>

        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;