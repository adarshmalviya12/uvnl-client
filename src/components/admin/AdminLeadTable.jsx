import CreateLeadModel from "./CreateLeadModel";

const AdminLeadTable = () => {
  return (
    <>
      <div className="flex justify-between items-center text-title-lg    ">
        <h1 className="text-black dark:text-white">Leads Table</h1>
        <CreateLeadModel />{" "}
      </div>
    </>
  );
};
export default AdminLeadTable;
