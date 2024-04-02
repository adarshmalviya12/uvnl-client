import { useEffect, useState } from "react";
import CreateLeadFollowUp from "./CreateLeadFollowUp";
import axios from "axios";
import BASE_URL from "../../constant";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

const LeadLogs = ({ lead, setLead }) => {
  const [followUps, setFollowUps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const followUpsPerPage = 5; // Number of follow-ups to display per page
  // const navigate = useNavigate();

  // Logic to paginate follow-ups
  const indexOfLastFollowUp = currentPage * followUpsPerPage;
  const indexOfFirstFollowUp = indexOfLastFollowUp - followUpsPerPage;
  const currentFollowUps = followUps?.slice(
    indexOfFirstFollowUp,
    indexOfLastFollowUp
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchFollowUps = async () => {
      try {
        if (lead && lead._id) {
          const response = await axios.get(
            `${BASE_URL}/user/followups/${lead._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setFollowUps(response.data.data.followUps);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching follow-ups:", error);
      }
    };

    if (lead._id) {
      fetchFollowUps();
    }
  }, [lead]);

  return (
    <>
      <CreateLeadFollowUp
        followUps={followUps}
        setFollowUps={setFollowUps}
        lead={lead}
      />
      <div className="mt-3">
        <div className="max-w-full overflow-x-auto">
          <table className=" bg-white w-full table-auto">
            <thead>
              <tr className="bg-bodydark  text-left dark:bg-black">
                <th className="min-w-[100px]  py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                  Type
                </th>
                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Follow-up Date
                </th>
                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Next Follow-up Date
                </th>
                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Remarks
                </th>
                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Call Status
                </th>
              </tr>
            </thead>
            <tbody>
              {currentFollowUps?.length !== 0 ? (
                currentFollowUps?.map((followUp) => (
                  <tr className="  dark:bg-graydark" key={followUp._id}>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {followUp?.type}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {new Date(followUp?.followUpDate).toLocaleDateString()}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {new Date(
                        followUp?.nextFollowUpDate
                      ).toLocaleDateString()}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {followUp.remarks}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {followUp?.callStatus}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="dark:bg-meta-4">
                  <td
                    className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11"
                    colSpan="5"
                  >
                    No follow-ups to display
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ul className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(followUps?.length / followUpsPerPage) },
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
export default LeadLogs;
