// redux/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authapi = createApi({
  reducerPath: "authapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-com-self-pi.vercel.app/api/auth", // your auth backend base URL
    // baseUrl: "http://localhost:5000/api/auth", // your auth backend base URL
    prepareHeaders: (headers) => {
      // optional: attach token from localStorage or state
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    // 🔹 Register
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),

    // 🔹 Login
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),

    // 🔹 Logout
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    getalluser: builder.query   ({
      query: () => ({
        url: "/get-all-user",
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetalluserQuery,
} = authapi;