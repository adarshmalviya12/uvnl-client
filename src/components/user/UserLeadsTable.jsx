import { useState } from "react";
import CreateLeadModel from "./CreateLeadModal";
import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

const UserLeadsTable = () => {
  const [leads, setLeads] = useState([
    {
      _id: 1,
      firstname: "John",
      lastname: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      _id: 2,
      firstname: "Jane",
      lastname: "Smith",
      phoneNumber: "987-654-3210",
      email: "jane.smith@example.com",
    },
    {
      _id: 3,
      firstname: "batman",
      lastname: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com",
    },
    {
      _id: 4,
      firstname: "suparman ",
      lastname: "yendres pendres",
      phoneNumber: "987-654-3210",
      email: "jane.smith@example.com",
    },
    // Add more dummy entries here...
  ]);
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
              {leads?.map((lead) => (
                <tr className="  dark:bg-meta-4" key={lead._id}>
                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    {lead.firstname} {lead.lastname}
                  </td>

                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    {lead.phoneNumber}
                  </td>
                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    {lead.email}
                  </td>
                  <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                    <div className="flex gap-2 justify-center  ">
                      <button>{<FaEye />}</button>
                      <button>{<FaEdit />}</button>
                      <DeleteButton onDelete={() => handleDelete(lead._id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default UserLeadsTable;
