import { NavLink } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      {/* <!-- Sign In Form --> */}
      <div className="flex-col ">
        <h1 className="text-title-xl">Welcome Admin</h1>
        <div className="sm:w-100 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Sign In Form
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2.5 block text-black dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mt-5 mb-5.5 flex items-center justify-between">
                <a href="#" className="text-sm text-primary">
                  Forget password?
                </a>
              </div>

              <NavLink to="/admin-dashboard">
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Sign In
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
