import { useEffect, useState } from "react";
import Loader from "../Loader";
import BASE_URL from "../../constant";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(response.data.data.products);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="flex justify-between items-center text-title-lg mb-3   ">
            <h1 className="text-black dark:text-white">Users</h1>
            <div className="max-h-132.5">
              {/* <CreateCategory setCategories={setCategories} /> */}
            </div>
          </div>
          <div className="">
            <div className="max-w-full overflow-x-auto">
              <table className=" bg-white w-full table-auto">
                <thead>
                  <tr className="bg-bodydark  text-left dark:bg-black">
                    <th className="min-w-[100px]  py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                      Name
                    </th>

                    <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                      Category
                    </th>
                    <th className="min-w-[100px] py-4 px-4  font-bold text-black dark:text-white">
                      details
                    </th>
                    <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                      description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length !== 0 ? (
                    products?.map((item) => (
                      <tr className="  dark:bg-graydark" key={item?._id}>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {item?.name}
                        </td>

                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {item?.category.name}
                        </td>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {item?.details}
                        </td>
                        <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                          {item?.description}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="  dark:bg-meta-4">
                      <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                        empty
                      </td>

                      <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                        empty
                      </td>
                      <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                        empty
                      </td>
                      <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                        empty
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
export default ProductTable;
