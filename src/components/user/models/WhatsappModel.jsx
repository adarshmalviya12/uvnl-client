import { MdOutlineWhatsapp } from "react-icons/md";

const WhatsappModel = ({ whatsappNo }) => {
  return (
    <>
      <button
        className=" bg-primary  text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <a href={`https://wa.me/91${whatsappNo}`} target="_">
          <div className="flex items-center gap-2">
            <MdOutlineWhatsapp /> Whatsapp
          </div>
        </a>
      </button>
    </>
  );
};
export default WhatsappModel;
