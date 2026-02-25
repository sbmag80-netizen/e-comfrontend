// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser } from "../redux/authSlice";

// const Navbar = () => {
//   const user = useSelector((state) => state.auth.user);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [userDropdown, setUserDropdown] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleUserDropdown = () => setUserDropdown(!userDropdown);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/login");
//     setUserDropdown(false);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

// <Link to="/" className="text-3xl font-bold text-indigo-600">ShopEase</Link>
//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link to="/" className="hover:text-indigo-600 font-medium">Home</Link>
//           <Link to="/shop" className="hover:text-indigo-600 font-medium">Shop</Link>
//           <Link to="/contact" className="hover:text-indigo-600 font-medium">Contact</Link>
//           <Link to="/cart" className="hover:text-indigo-600 font-medium">Cart</Link>

//           {user ? (
//             <div className="relative">
//               <button
//                 className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium hover:bg-indigo-200 transition"
//                 onClick={toggleUserDropdown}
//               >
//                 <span>Hello, {user.name}</span>
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                 </svg>
//               </button>

//               {userDropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-600 font-medium rounded-lg transition"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-indigo-600 text-white px-4 py-1 rounded-full font-medium hover:bg-indigo-700 transition"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.items);

  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserDropdown = () => setUserDropdown(!userDropdown);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    setUserDropdown(false);
    setMenuOpen(false);
  };

  /* ================= USER LINKS ================= */
  const userLinks = (
    <>
      <Link to="/" className="hover:text-indigo-600 font-medium">
        Home
      </Link>

      <Link to="/shop" className="hover:text-indigo-600 font-medium">
        Shop
      </Link>

      <Link to="/contact" className="hover:text-indigo-600 font-medium">
        Contact
      </Link>

      <Link to="/cart" className="hover:text-indigo-600 font-medium">
        Cart  ({cartItems?.length || 0})
      </Link>
    </>
  );

  /* ================= ADMIN LINKS ================= */
  const adminLinks = (
    <>
      <Link to="/admin" className="hover:text-indigo-600 font-medium">
        Add Product
      </Link>

      <Link to="/admin/products" className="hover:text-indigo-600 font-medium">
        Products
      </Link>

      <Link to="/admin/users" className="hover:text-indigo-600 font-medium">
        Users
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-indigo-600">
          ShopEase
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center space-x-6">
          {user && user.role === "admin" ? "" : userLinks}

          {user ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium hover:bg-indigo-200 transition"
                onClick={toggleUserDropdown}
              >
                <span>Hello, {user.name}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {userDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
                  
                  {/* Only show My Orders if NOT admin */}
                  {user.role !== "admin" && (
                    <Link
                      to="/my-orders"
                      className="block px-4 py-2 hover:bg-indigo-100 font-medium transition"
                      onClick={() => setUserDropdown(false)}
                    >
                      My Orders
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-600 font-medium transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-4 py-1 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3">
          {user && user.role === "admin" ? adminLinks : userLinks}

          {user ? (
            <div className="space-y-2">
              
              {user.role !== "admin" && (
                <Link
                  to="/my-orders"
                  className="block px-4 py-2 hover:bg-indigo-100 font-medium transition"
                  onClick={() => setMenuOpen(false)}
                >
                  My Orders
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-indigo-100 text-red-600 font-medium transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block bg-indigo-600 text-white text-center px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;