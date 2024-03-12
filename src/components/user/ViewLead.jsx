import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import { useEffect, useState } from "react";
import Convert from "./models/Convert";
import CallModel from "./models/CallModel";
import WhatsappModel from "./models/WhatsappModel";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdDateRange,
  MdWork,
  MdCheck,
  MdLocationOn,
  MdWc,
  MdOutlineCardTravel,
} from "react-icons/md";

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
    <div className=" text-black dark:text-white">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-3   ">
            <h4 className="text-black text-title-sm  dark:text-white">
              Lead Detail
            </h4>
            <div>
              <Convert />
              <CallModel callonNo={lead.number} />
              <WhatsappModel whatsappNo={lead.number} />
            </div>
          </div>
          <div className="flex gap-3 p-5 border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {/* First Column */}
            <div className="flex-1">
              <div className="">
                {/* Your existing code for the first column */}
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  {" "}
                  <MdPerson />
                  {`${lead.firstName} ${
                    lead.middleName ? lead.middleName + " " : ""
                  }${lead.lastName}`}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdPhone /> Mobile Number: {lead.number}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdOutlineCardTravel /> Lead Source: {lead.leadSource}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdWork /> Occupation: {lead.occupation}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  Status: {lead.leadStatus}
                </p>
              </div>
              <div className="bg-white dark:bg-black">
                {lead.address ? (
                  <div>
                    <MdLocationOn /> {lead.address.street} ,{lead.address.city}{" "}
                    ,{lead.address.state},{lead.address.pinCode},{" "}
                    {lead.address.country}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Second Column */}
            <div className="flex-1 ">
              <div className=" ">
                {/* Content for the second column */}
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdEmail /> Email: {lead.email}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdWc /> Gender: {lead.gender}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdDateRange /> Date of Birth: {lead.dob}
                </p>
                <p className="text-gray-600 mb-2 flex items-center gap-2">
                  <MdCheck /> Converted: {lead.isConverted ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewLead;
