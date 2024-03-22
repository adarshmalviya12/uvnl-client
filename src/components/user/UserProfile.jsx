import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="container mx-auto mt-8">
      <div className=" gap-3 p-5 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="bg-gray-200 p-4">
          <h1 className="text-xl font-semibold">{user?.name}</h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <strong className="text-gray-700">Username:</strong>{" "}
            {user?.firstName} {user?.middleName} {user?.lastName}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">email:</strong> {user?.email}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">number:</strong> {user?.number}
          </div>
          <div className="mb-4">
            <strong className="text-gray-700">Bio:</strong> {user?.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
