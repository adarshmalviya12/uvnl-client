import { Link } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMailOutline, MdPassword } from "react-icons/md";

function App() {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                {/* <img className="hidden dark:block"  src={"/src/logo/logohalfcolor.png"} alt="Logo" />
                <img className="dark:hidden" src={"/src/logo/logohalfwhite.png"} alt="Logo" /> */}
              </Link>

              <img
                className="hidden dark:block"
                src={"/src/logo/logofullwhite.png"}
                alt="Logo"
              />
              <img
                className="dark:hidden"
                src={"/src/logo/logofullcolor.png"}
                alt="Logo"
              />

              {/* <p className="2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p> */}

              <span className="mt-15 inline-block">
                <img src={"/src/logo/UVNLBranding.png"} alt="uvnl branding" />
              </span>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <Link className="mb-5.5 inline-block " to="/">
                <img
                  className="hidden dark:block w-14 "
                  src={"/src/logo/logohalfwhite.png"}
                  alt="Logo"
                />
                <img
                  className="dark:hidden w-14 "
                  src={"/src/logo/logohalfcolor.png"}
                  alt="Logo"
                />
              </Link>
              <UserLogin />
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-transparent py-1.5 px-3 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-2 pb-2">
                      <MdOutlineMailOutline />
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-transparent py-1.5 px-3 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-2 pb-2">
                      <MdPassword />
                    </span>
                  </div>
                </div>

                {!errorMessage ? (
                  <div></div>
                ) : (
                  <div className="text-sm text-danger pb-2 pt-2">
                    {errorMessage}
                  </div>
                )}

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary py-1.5 px-3 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
