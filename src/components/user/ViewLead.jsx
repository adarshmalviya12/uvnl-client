import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import { useEffect, useState } from "react";

const ViewLead = () => {
  const { leadId } = useParams();
  const [lead, setLead] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/user/lead/${leadId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLead(response.data.data.lead);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    };

    fetchLead();
  }, [leadId]);

  return (
    <div className="p-10 text-black dark:text-white">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2 className="text-title-xl font-extrabold mb-4 inline-block">
            Leads Details :
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-stroke px-5 py-2 dark:border-strokedark bg-white dark:bg-black">
            <div className="bg-white dark:bg-black">
              <h2 className="text-xl font-semibold mb-4">
                {`${lead.firstName} ${
                  lead.middleName ? lead.middleName + " " : ""
                }${lead.lastName}`}
              </h2>
              <p className="text-gray-600 mb-2">Email: {lead.email}</p>
              <p className="text-gray-600 mb-2">Mobile Number: {lead.number}</p>
              <p className="text-gray-600 mb-2">Gender: {lead.gender}</p>
              <p className="text-gray-600 mb-2">
                Lead Source: {lead.leadSource}
              </p>
              <p className="text-gray-600 mb-2">Date of Birth: {lead.dob}</p>
              <p className="text-gray-600 mb-2">
                Occupation: {lead.occupation}
              </p>
              <p className="text-gray-600 mb-2">
                Converted: {lead.isConverted ? "Yes" : "No"}
              </p>
              <p className="text-gray-600 mb-2">Status: {lead.leadStatus}</p>
            </div>
            <div className="bg-white dark:bg-black">
              <h2 className="text-title-md font-extrabold mb-4">Address:</h2>
              <p className="text-gray-600 mb-2">
                Street: {lead.address.street}
              </p>
              <p className="text-gray-600 mb-2">City: {lead.address.city}</p>
              <p className="text-gray-600 mb-2">State: {lead.address.state}</p>
              <p className="text-gray-600 mb-2">
                Pincode: {lead.address.pinCode}
              </p>
              <p className="text-gray-600 mb-2">
                Country: {lead.address.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLead;
