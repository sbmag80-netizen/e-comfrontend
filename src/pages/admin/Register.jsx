import React, { useState } from "react";
import { useRegisterUserMutation } from "../../redux/authapi";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(formData).unwrap();
      console.log("Registered:", res);
      alert("User registered successfully ✅");
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      console.log(err);
      alert(err?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Register
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
            required
          />

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
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login link message */}
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium hover:text-indigo-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;