import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

const Leadsfollowup = () => {
  return (
    <>
      <div className="max-w-full  px-5 py-3 overflow-x-auto mt-10">
        <h4 className="text-black text-title-sm  dark:text-white mb-5">
          Call Logs
        </h4>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-bodydark  text-left dark:bg-meta-4">
              <th className="min-w-[100px]  py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                Called By
              </th>

              <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                Date and Time
              </th>
              <th className="min-w-[100px] py-4 px-4  font-bold text-black dark:text-white">
                Status
              </th>
              <th className=" min-w-[100px] py-4 px-4 font-bold text-center text-black dark:text-white">
                Remarks
              </th>
            </tr>
          </thead>
          <tbody>
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
              <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                <div className="flex gap-2 justify-center  ">
                  <button>{<FaEye />}</button>
                  <button>{<FaEdit />}</button>
                  <DeleteButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Leadsfollowup;
