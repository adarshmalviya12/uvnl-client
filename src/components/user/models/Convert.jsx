import { useState } from "react";

const Convert = () => {
  return (
    <>
      <button>
        <select
          className=" bg-graydark  text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          name="cars"
          id="cars"
        >
          <option value="convert">Converted</option>
          <option value="not">Non-Converted</option>
          <option value="pending">Pending</option>
        </select>
      </button>
    </>
  );
};
export default Convert;
