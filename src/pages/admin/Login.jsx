import React, { useState } from "react";
import { useLoginUserMutation } from "../../redux/authapi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser(formData).unwrap();
console.log("LOGIN RESPONSE:", res);

    dispatch(setUser(res));

    alert(`Welcome ${res.user.name} ✅`);
    if (res.user.role==="admin") {
          navigate("/admin");

    }else{

      navigate("/shop");
    }
  } catch (err) {
    alert(err?.data?.message || "Login failed ❌");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register link message */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;