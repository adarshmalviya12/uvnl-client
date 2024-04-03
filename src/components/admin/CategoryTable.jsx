import { useEffect, useState } from "react";
import Loader from "../Loader";
import BASE_URL from "../../constant";
import axios from "axios";
import CreateCategory from "./CreateCategory";
import { FaEdit, FaEye } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCategories(response.data.data.categories);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/admin/category/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCategories(categories.filter((item) => item._id !== id));
    } catch (error) {
      console.error("error", error?.response.data.message);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="flex justify-between items-center text-title-lg mb-3">
            <h1 className="text-black dark:text-white">Category</h1>
            <div className="max-h-132.5">
              <CreateCategory setCategories={setCategories} />
            </div>
          </div>
          <div>
            <div className="max-w-full overflow-x-auto">
              <table className="bg-white w-full table-auto">
                <thead>
                  <tr className="bg-bodydark text-left dark:bg-black">
                    <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                      Name
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                      Details
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                      Description
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-bold text-center text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {categories.length !== 0 ? (
                    categories.map((category) => (
                      <tr className="dark:bg-graydark" key={category._id}>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {category.name}
                        </td>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {category.details}
                        </td>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {category.description}
                        </td>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() =>
                                navigate(`/admin/category/${category._id}`)
                              }
                            >
                              <FaEye />
                            </button>
                            <button
                              onClick={() =>
                                navigate(`/admin/category/edit/${category._id}`)
                              }
                            >
                              <FaEdit />
                            </button>
                            <DeleteButton
                              onDelete={() => handleDelete(category._id)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="dark:bg-meta-4">
                      <td
                        className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11"
                        colSpan="4"
                      >
                        Empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CategoryTable;
