import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e-com-self-pi.vercel.app/api/products",
    // baseUrl: "http://localhost:5000/api/products",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({

    // 🔹 Get All Products
    getProducts: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    // 🔹 Get Single Product
    getProductById: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),

    // 🔹 Add Product
    addProduct: builder.mutation({
      query: (productData) => ({
        url: "/",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Update Product
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    // 🔹 Delete Product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),

  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;