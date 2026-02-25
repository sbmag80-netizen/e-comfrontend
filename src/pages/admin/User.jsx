import React from "react";
import { useGetalluserQuery } from "../../redux/authapi";

const User = () => {
  const { data, error, isLoading } = useGetalluserQuery();

  if (isLoading)
    return (
      <div className="p-6 text-lg font-medium">
        Loading users...
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-red-600 font-medium">
        Error fetching users
      </div>
    );

  const users = data?.result || [];

  return (
    <div className=" ">
      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        All Users
      </h2>

      {/* Table Container */}
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            {/* Table Head */}
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-4 px-6">#</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Email</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6">Created At</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-4 px-6 font-medium">
                    {index + 1}
                  </td>

                  <td className="py-4 px-6 whitespace-nowrap">
                    {user.name}
                  </td>

                  <td className="py-4 px-6 whitespace-nowrap text-gray-600">
                    {user.email}
                  </td>

                  <td className="py-4 px-6 capitalize">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;