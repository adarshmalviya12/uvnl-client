import { useState } from "react";
import { MdAddCall } from "react-icons/md";

const CallModel = ({ callonNo }) => {
  return (
    <>
      <button
        className=" bg-meta-5  text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        <a href={`tel:91${callonNo}`}>
          {" "}
          <div className="flex items-center gap-2-">
            <MdAddCall />
            Call
          </div>
        </a>
      </button>
    </>
  );
};
export default CallModel;
