import CreateLeadModel from "./CreateLeadModal";
import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { useLeads } from "../../context/LeadContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../../constant";
import { useEffect, useState } from "react";

const UserLeadsTable = () => {
  const { leads, setLeads } = useLeads();
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 5; // Number of leads to display per page

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const fetchLeads = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/leads`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLeads(response.data.data.leads);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/user/lead/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLeads(leads.filter((item) => item._id !== id));
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  // Logic to paginate leads
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchLeads();
  }, []);
  return (
    <>
      <div className="flex justify-between items-center text-title-lg mb-3   ">
        <h1 className="text-black dark:text-white">Leads Table</h1>
        <CreateLeadModel />
      </div>
      <div className="">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-bodydark  text-left dark:bg-meta-4">
                <th className="min-w-[100px]  py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                  Name
                </th>

                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Mobile Number
                </th>
                <th className="min-w-[100px] py-4 px-4  font-bold text-black dark:text-white">
                  Email
                </th>
                <th className=" min-w-[100px] py-4 px-4 font-bold text-center text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length !== 0 ? (
                currentLeads?.map((lead) => (
                  <tr className="dark:bg-meta-4" key={lead?._id}>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead?.firstName} {lead?.lastName}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead?.number}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead?.email}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => navigate(`/user/lead/${lead?._id}`)}
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/user/lead/edit/${lead?._id}`)
                          }
                        >
                          <FaEdit />
                        </button>
                        <DeleteButton
                          onDelete={() => handleDelete(lead?._id)}
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
                    No leads to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ul className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(leads.length / leadsPerPage) },
            (_, i) => (
              <li key={i} className="mx-1">
                <button
                  onClick={() => paginate(i + 1)}
                  className="bg-bodydark hover:bg-bodydark text-white font-bold py-2 px-4 rounded"
                  style={{
                    backgroundColor:
                      currentPage === i + 1 ? "#4f46e5" : "#6b63ff",
                    borderColor: currentPage === i + 1 ? "#4f46e5" : "#6b63ff",
                  }}
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default UserLeadsTable;
