import axios from "axios";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import { useEffect, useState } from "react";

const EditLead = () => {
  const { leadId } = useParams();
  const [lead, setLead] = useState({});

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [dob, setDob] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");

  const token = localStorage.getItem("token");

  const fetchLead = async () => {
    const response = await axios.get(`${BASE_URL}/user/lead/${leadId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setLead(response.data.data.lead);
    try {
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchLead();
  }, []);
  return (
    <div className="relative p-6 flex-auto overflow-y-auto max-h-80 md:max-h-90 lg:max-h-115">
      <form action="" className="font-thin text-sm ">
        {console.log(lead.firstName)}
        {/* name  */}
        <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
          <div className="w-full xl:w-1/3">
            <label className="mb-2.5 block text-black dark:text-white">
              First name <span className="text-meta-1">*</span>
            </label>
            <input
              type="text"
              value={firstName}
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
              onChange={(e) => setMiddleName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setNumber(e.target.value)}
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
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1.5 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="" disabled>
                select
              </option>

              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-full xl:w-1/3">
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
            <select
              value={leadSource}
              onChange={(e) => setLeadSource(e.target.value)}
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-1.5 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            >
              <option value="" disabled>
                select
              </option>

              <option value="marketing">marketing</option>
              <option value="call">call</option>
              <option value="email">email</option>
            </select>
          </div>
        </div>
        {/* Address */}
        <div>
          <h1 className="text-title-sm text-white mb-3">Address :</h1>
          <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                Street <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="street"
                placeholder="street"
                onChange={(e) => setStreet(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                City <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="city"
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                State <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="state"
                placeholder="state"
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4.5 flex flex-col gap-6 md:flex-row">
            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                country <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                name="Country"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/3">
              <label className="mb-2.5 block text-black dark:text-white">
                Pincode <span className="text-meta-1">*</span>
              </label>
              <input
                type="number"
                name="Pincode"
                placeholder="Pincode"
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/3"></div>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center bg-primary py-1 px-2 text-center font-normal  text-white hover:bg-opacity-90 md:px-2 xl:px-4"
          type="button"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default EditLead;
