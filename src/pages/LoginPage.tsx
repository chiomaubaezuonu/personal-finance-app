import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-[#f8f4f0] lg:p-4">
      <div className="flex flex-1 py-10 xl:py-0 w-full h-[calc(100vh-4.375rem)] lg:h-screen items-center justify-center p-4 lg:p-0 pb-4 pt-6">
        <div className="hidden relative w-full lg:h-screen lg:flex rounded-lg lg:flex-col flex-1 overflow-hidden p-10 lg:p-0">
          <div className="rounded-md flex max-w-[35rem] ">
            <img
              src="/images/login-img.png"
              className="h-[920px] w-[39rem] absolute -top-28"
              alt="loginPage-img"
            />
            <img
              src="/images/logo.svg"
              alt="logo"
              className="absolute w-24 top-6 left-6"
            />
            <div className="z-10 absolute bottom-12 right-2 flex flex-col items-center left-9 gap-6 text-white">
              <h2 className="text-preset-1 max-w-[20ch] !text-white">
                Keep track of your money and save for your future
              </h2>
              <p className="text-white text-sm leading-5 w-[26rem]">
                Personal finance app puts you in control of your spending. Track
                transactions, set budgets, and add to savings pots easily.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:py-10 xl:py-0 xl:gap-8 items-center justify-center w-full lg:p-4">
          {" "}
          <div className="w-full flex flex-col justify-start max-w-[31.25rem] lg:mx-4 px-5 py-6 lg:p-4 bg-white rounded-md xl:mx-auto">
            <h2 className="text-preset-1 font-bold">Login</h2>
            <div className="flex flex-col gap-8 text-center">
              <form action="" className="w-full flex flex-col py-8 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-left">
                    Email
                  </label>
                  <input
                    type="password"
                    className="text-sm w-full h-12 rounded-md border border-[#98908b] px-3 pr-10"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value=""
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label htmlFor="" className="labeled">
                    Password
                  </label>
                  <div className="relative rounded-lg flex w-full items-center border-[0.063rem] border-[#98908b]">
                    <input
                      className="rounded-md outline-none text-sm border-[#98908b] py-[0.75rem] px-3 items-center flex-1"
                      type="text"
                      placeholder="Password"
                    />
                    <img
                      src="/images/show-pswd2.svg"
                      className="cursor-pointer mr-4"
                      alt="show-password"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    {!showPassword && (
                      <span className="bg-[#696868]  absolute right-3.5 w-5 h-[0.077rem] rotate-[235deg]"></span>
                    )}
                  </div>
                </div>
                <button className="rounded-md p-4 mt-8 bg-gray-900 mb-4 w-full font-bold text-sm text-white">
                  Login
                </button>
                <div className="flex flex-col gap-1">
                  <span className="text-preset-4">
                    Need to create an account ?{" "}
                    <Link
                      to="/signup"
                      className="underline font-bold text-gray-500"
                    >
                      Sign Up{" "}
                    </Link>
                  </span>
                  <span className="text-sm flex items-center justify-center w-full text-gray-500 gap-2">
                    <p>You're just browsing?</p>
                    <Link
                      to="/overview"
                      className="underline font-bold text-gray-500"
                    >
                      See Demo{" "}
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
