import React from "react";

const Setting = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6border m-3 border-stroke bg-white  dark:border-strokedark dark:bg-boxdark shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      <div className="mb-4">
        <label
          htmlFor="currentPassword"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="newPassword"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmNewPassword"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default Setting;
