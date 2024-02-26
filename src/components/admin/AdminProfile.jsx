import Modal from "../Modal";
import LeadTable from "./LeadTable";

const AdminProfile = () => {
  return (
    <div>
      <Modal title="create lead" children={<LeadTable />} />
    </div>
  );
};
export default AdminProfile;
