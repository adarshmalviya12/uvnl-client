import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/admin/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.data.user);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-black shadow-md overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          User Information
        </h3>
      </div>
      <div className="border-t border-gray-200">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {user.firstName} {user.middleName} {user.lastName}
                </dd>
              </div>

              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                  {user.number}
                </dd>
              </div>
            </dl>
          </>
        )}
      </div>
    </div>
  );
};
export default ViewUser;
