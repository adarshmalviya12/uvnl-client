import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import { useEffect, useState } from "react";

const ViewLead = () => {
  const { leadId } = useParams();
  const [lead, setLead] = useState({});

  const token = localStorage.getItem("token");

  const fetchLead = async () => {
    const response = await axios.get(`${BASE_URL}/user/lead/${leadId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setLead(response.data.data.lead);
    try {
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchLead();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-10  text-black dark:text-white border-b border-stroke px-5 py-2 dark:border-strokedark bg-white dark:bg-black ">
      <div
        className=" bg-white dark:bg-black"
        key={lead._id} // Note: _id not provided in lead data
      >
        <h2 className="text-title-xl  font-extrabold text-black dark:text-white  mb-4">
          Leads Details : -
        </h2>
        <h2 className="text-xl font-semibold text-black dark:text-white  mb-4">
          {`${lead.firstName} ${lead.middleName ? lead.middleName + " " : ""}${
            lead.lastName
          }`}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Email: {lead.email}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Mobile Number: {lead.number}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Gender: {lead.gender}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Lead Source: {lead.leadSource}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Date of Birth: {lead.dob}
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Occupation: {lead.occupation}
                  
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Converted: {lead.isConverted ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};
export default ViewLead;
