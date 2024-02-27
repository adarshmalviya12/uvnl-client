import { useState } from "react";

const CreateUser = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className=" bg-primary  text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create User
      </button>
      {showModal ? (
        <>
          <div className="justify-center z-9999 items-center flex overflow-x-hidden overflow-y-auto   fixed inset-0  outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="border-b border-stroke px-5 py-2 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Create User
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-y-auto max-h-80 md:max-h-90">
                  {/* Ensure to set max height and overflow for the content */}
                  <form action="" className="font-thin text-sm ">
                    {/* name  */}
                    <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
                      <div className="w-full xl:w-1/3">
                        <label className="mb-2.5 block text-black dark:text-white">
                          First name <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="first name"
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Middlename <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="middlename"
                          name="middlename"
                          placeholder="middlename"
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>

                      <div className="w-full xl:w-1/3">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Last name <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          placeholder="last name"
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                    {/* email and phone no  */}
                    <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Phone No<span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="number"
                          name="phone no"
                          placeholder="phone no"
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                    {/* gender dob and lead status */}
                    <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
                      <div className="w-full xl:w-1/3">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Gender <span className="text-meta-1">*</span>
                        </label>
                        <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1.5 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                          <option value="">select</option>
                          <option value="Government Employee">
                            Government Employee
                          </option>
                          <option value="Business">Business</option>
                          <option value="Housewife">Housewife</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Date of Birth <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="date"
                          name="dob"
                          placeholder="date of birth"
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>

                      <div className="w-full xl:w-1/3">
                        <label className="mb-2.5 block text-black dark:text-white">
                          Lead Source <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="text"
                          name="Lead"
                          placeholder="lead source"
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                    {/* Address */}
                    <div>
                      <h1 className="text-title-sm text-white mb-3">
                        Address :
                      </h1>
                      <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
                        <div className="w-full xl:w-1/3">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Gender <span className="text-meta-1">*</span>
                          </label>
                          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1.5 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <option value="">select</option>
                            <option value="Government Employee">
                              Government Employee
                            </option>
                            <option value="Business">Business</option>
                            <option value="Housewife">Housewife</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Date of Birth <span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            placeholder="date of birth"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>

                        <div className="w-full xl:w-1/3">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Lead Source <span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            placeholder="last name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                      <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
                        <div className="w-full xl:w-1/3">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Gender <span className="text-meta-1">*</span>
                          </label>
                          <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1.5 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <option value="">select</option>
                            <option value="Government Employee">
                              Government Employee
                            </option>
                            <option value="Business">Business</option>
                            <option value="Housewife">Housewife</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="w-full xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Date of Birth <span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="date"
                            name="dob"
                            placeholder="date of birth"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>

                        <div className="w-full xl:w-1/3">
                          <label className="mb-2.5 block text-black dark:text-white">
                            Lead Source <span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            placeholder="last name"
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center text-title-sm justify-end gap-2 p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="inline-flex items-center justify-center bg-danger py-1 px-2 text-center font-normal text-white hover:bg-opacity-90 md:px-2 xl:px-4"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="inline-flex items-center justify-center bg-primary py-1 px-2 text-center font-normal  text-white hover:bg-opacity-90 md:px-2 xl:px-4"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default CreateUser;
