import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-com-delta-one.vercel.app/api/order", // change if needed
    // baseUrl: "http://localhost:5000/api/order", // change if needed
    prepareHeaders: (headers, { getState }) => {
       const state = getState();
  console.log("FULL STATE:", state);
  const token = getState().auth?.user?.token; 
console.log(token,"DDD");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    
    // ✅ Create Order
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),

    // ✅ Get Logged-in User Orders
    getMyOrders: builder.query({
      query: () => "/myorders",
      providesTags: ["Order"],
    }),

    // ✅ Get All Orders (Admin)
    getAllOrders: builder.query({
      query: () => "/",
      providesTags: ["Order"],
    }),

  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetAllOrdersQuery,
} = orderApi;