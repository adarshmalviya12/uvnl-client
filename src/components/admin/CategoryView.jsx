import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../constant";
import { useParams } from "react-router-dom";
import {
  MdContentPaste,
  MdDetails,
  MdDriveFileRenameOutline,
} from "react-icons/md";

const CategoryView = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${BASE_URL}/admin/category/${categoryId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCategory(response.data.data.category);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <h1 className="text-title-lg mb-4">User Details </h1>
          <div className=" border-b border-stroke font-normal text-sm md:text-base px-3 md:px-5 py-2 dark:border-strokedark bg-white dark:bg-black">
            <>
              <div>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdDriveFileRenameOutline />{" "}
                  <span className="font-bold">Name :</span>
                  {category.name}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdDetails />
                  <span className="font-bold">Details: </span>{" "}
                  {category.details}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdContentPaste />
                  <span className="font-bold">Discription: </span>{" "}
                  {category.description}
                </p>
              </div>
            </>
          </div>
        </>
      )}
    </>
  );
};
export default CategoryView;
