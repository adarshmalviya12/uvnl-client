import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

import CreateUser from "./CreateUser";
import { useUsers } from "../../context/UsersContext";

const AdminUserTable = () => {
  const { users } = useUsers();

  return (
    <>
      <div className="flex justify-between items-center text-title-lg mb-3   ">
        <h1 className="text-black dark:text-white">Users</h1>
        <div className="max-h-132.5">
          <CreateUser />
        </div>
      </div>
      <div className="">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-bodydark  text-left dark:bg-black">
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
              {users.length !== 0 ? (
                users?.map((user) => (
                  <tr className="  dark:bg-graydark" key={user?._id}>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {user?.firstName} {user?.lastName}
                    </td>

                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {user?.number}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {user?.email}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                      <div className="flex gap-2 justify-center  ">
                        <button>{<FaEye />}</button>
                        <button>{<FaEdit />}</button>
                        <DeleteButton
                          onDelete={() => handleDelete(user?._id)}
                        />
                      </div>
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
                  <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                    empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AdminUserTable;
