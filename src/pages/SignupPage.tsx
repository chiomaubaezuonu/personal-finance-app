import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    // <div className="bg-[#f8f4f0]">
    //   <div className="flex w-full h-[calc(100vh-4.375rem)] items-center justify-center p-4">
    //     <div className="w-full flex flex-col max-w-[35rem] p-8 gap-8 bg-white rounded-xl">
    //       <h1 className="text-preset-1 font-bold text-[2rem]">Signup</h1>
    //       <div className="flex flex-col gap-8 text-center">
    //         <form action="" className="w-full space-y-8">
    //           <div className="flex flex-col space-y-2">
    //             <label htmlFor="" className="text-left">
    //               Name
    //             </label>
    //             <input
    //               type="text"
    //               className="border-[0.063rem] rounded-lg border-[#98908b] py-1.5 px-5"
    //               placeholder="Name"
    //             />
    //           </div>
    //           <div className="flex flex-col space-y-2">
    //             <label htmlFor="" className="text-left">
    //               Email
    //             </label>
    //             <input
    //               type="text"
    //               className="border-[0.063rem] rounded-lg border-[#98908b] py-1.5 px-5"
    //               placeholder="Email"
    //             />
    //           </div>
    //           <div className="space-y-2 flex flex-col items-start">
    //             <label htmlFor="" className="labeled">
    //               Password
    //             </label>
    //             <div className="relative rounded-lg flex w-full gap-4 items-center border-[0.063rem] border-[#98908b]">
    //               <input
    //                 className=" rounded-lg outline-none py-1.5 px-5"
    //                 type="text"
    //                 placeholder="Password"
    //               />

    //               <img
    //                 src="/images/show-pswd.svg"
    //                 className="cursor-pointer"
    //                 alt="show-password"
    //               />
    //             </div>
    //             <p className="text-sm text-gray-500 text-right">
    //               Passwords must be at least 8 characters
    //             </p>
    //           </div>

    //           <button className="rounded-lg p-4 bg-gray-900 w-full font-bold text-sm text-white">
    //             Create Account
    //           </button>
    //           <span className="text-preset-4">
    //             Already have an account ?{" "}
    //             <Link to="/" className="underline cursor-pointer font-bold text-gray-900">
    //               Login{" "}
    //             </Link>
    //           </span>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#f8f4f0]">
      <div className="flex w-full h-[calc(100vh-4.375rem)] lg:h-screen items-center justify-between p-4">
        <div className="hidden relative max-w-[560px] lg:h-full lg:flex rounded-lg lg:flex-col flex-1 overflow-hidden p-10 lg:p-0">
          <div className="rounded-lg flex overflow-hidden">
            <img
              src="/images/login-img.png"
              className="w-full"
              alt="loginPage-img"
            />
            <img
              src="/images/logo.svg"
              alt="logo"
              className="absolute top-9 left-9"
            />
            <div className="z-10 absolute bottom-12 flex flex-col left-9 gap-6 text-white">
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
        <div className="flex flex-1 items-center justify-center w-full h-full lg:p-4">
          {" "}
          <div className="w-full flex flex-col max-w-[35rem] p-8 gap-8 bg-white rounded-xl">
            <h1 className="text-preset-1 font-bold text-[2rem]">Login</h1>
            <div className="flex flex-col gap-8 text-center">
              <form action="" className="w-full space-y-8">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-[0.063rem] rounded-lg border-[#98908b] py-1.5 px-5"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="" className="text-left">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-[0.063rem] rounded-lg border-[#98908b] py-1.5 px-5"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-2 flex flex-col items-start">
                  <label htmlFor="" className="labeled">
                    Password
                  </label>
                  <div className="relative rounded-lg flex w-full items-center border-[0.063rem] border-[#98908b]">
                    <input
                      className="rounded-lg outline-none py-1.5 px-5 flex-1 pr-12"
                      type="text"
                      placeholder="Password"
                    />
                    <img
                      src="/images/show-pswd.svg"
                      className="cursor-pointer absolute right-3"
                      alt="show-password"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-right">
                    Passwords must be at least 8 characters
                  </p>
                </div>

                <button className="rounded-lg p-4 bg-gray-900 w-full font-bold text-sm text-white">
                  Create Account
                </button>
                <span className="text-preset-4">
                  Already have an account ?{" "}
                  <Link
                    to="/signup"
                    className="underline font-bold text-gray-900"
                  >
                    Login{" "}
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
