import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const goToAdmin = () => {
    navigate("/admin/dashboard");
  };

  return (
    <footer className="bg-indigo-700 text-indigo-100 py-5 text-center">
      <h3 className="text-2xl font-bold text-white mb-3">ShopEase</h3>
      <p className="mb-4 text-indigo-200">
        © 2026 ShopEase. All rights reserved.
      </p>

      {user?.role === "admin" && (
        <button
          onClick={goToAdmin}
          className="px-5 py-2 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition duration-300"
        >
          Admin Panel
        </button>
      )}
    </footer>
  );
};

export default Footer;