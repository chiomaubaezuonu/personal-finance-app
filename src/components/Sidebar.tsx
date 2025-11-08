import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [minimizeMenu, setMinimizeMenu] = useState(true);
  return (
    <div className="flex gap-12 bg-[#f8f4f0]">
      {/* min-sidebar */}
      <div className="hidden bg-gray-900  h-screen py-12 rounded-r-xl fixed left-0 top-0 lg:flex flex-col justify-between transition-all lg:w-[88px] duration-500 z-50">
        <div className="flex flex-col items-center justify-center gap-20">
          <div>
            <img className="" src="/images/logo-small.svg" alt="logo" />
          </div>
          <div className="flex flex-col mt-4 gap-8">
            <Link to="/overview">
              <img
                src="/images/home-icon.svg"
                className="w-5 h-6"
                alt="home-icon"
              />
            </Link>
            <Link to="/transactions">
              <img
                src="/images/icon-transactions.svg"
                className="w-6"
                alt="transactions-icon"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/icon-budgets.svg"
                className="w-6"
                alt="budgets-icon"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/icon-nav-pots-active.svg"
                className="w-6"
                alt="pots-icon"
              />
            </Link>
            <Link to="/">
              {" "}
              <img
                src="/images/bills-icon.svg"
                className="w-6"
                alt="bills-icon"
              />
            </Link>
          </div>
        </div>
        <img
          onClick={() => setMinimizeMenu(!minimizeMenu)}
          className="cursor-pointer w-5 self-center"
          src="/images/arrow-right.png"
          alt="logo"
        />
      </div>
      {/* max-sidebar */}
      {/* {!minimizeMenu && ( */}
      <div
        className={`bg-gray-900 h-screen py-12 rounded-r-xl fixed left-0 top-0 lg:flex flex-col justify-between transition-all ${
          !minimizeMenu
            ? "lg:w-[240px] translate-x-0"
            : "lg:-[88px] -translate-x-full"
        } duration-500 z-50`}
      >
        <div
          className={`flex flex-col gap-20 ${
            !minimizeMenu ? "opacity:100" : "opacity-0 "
          }`}
        >
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex gap-4 items-center border-l-6 pl-4 rounded-r-xl w-52 px-6 py-3 hover:brightness-150 cursor-pointer ${
                  isActive
                    ? "border-l-[#277c78] bg-[#f8f4f0]"
                    : " border-none text-[#b3b3b3]"
                }`
              }
            >
              <img src="/images/overview-active.svg" alt="home-icon" />
              <span className="text-xl">Overview</span>
            </NavLink>

            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex gap-4 items-center border-l-6 pl-4 ${isActive ? "border-l-[#277c78] bg-[#f8f4f0]" : "border-none text-gray-300" } rounded-r-xl w-52 py-3 hover:brightness-150 cursor-pointer`}
            >
              <img src="/images/transactions-active.svg" alt="home-icon" />
              <span className= "text-xl">Transactions</span>
            </NavLink>
            <NavLink
              to="/budgets"
              className={({ isActive }) =>
                `flex gap-4 items-center border-l-6 pl-4 ${isActive ? "border-l-[#277c78] bg-[#f8f4f0]" : "border-none text-gray-300"} rounded-r-xl w-52 py-3 hover:brightness-150 cursor-pointer`}
            >
              <img src="/images/budgets-active.svg" alt="home-icon" />
              <span className="text-xl">Budgets</span>
            </NavLink>
            <NavLink
              to="/pots"
              className={({ isActive }) =>
                `flex gap-4 items-center border-l-6 pl-4 ${isActive ? "border-l-[#277c78] bg-[#f8f4f0]" : "border-none text-gray-300"} rounded-r-xl w-52 py-3 hover:brightness-150 cursor-pointer`}
            >
              <img src="/images/icon-nav-pots-active.svg" alt="home-icon" />
              <span className="text-xl">Pots</span>
            </NavLink>
            <NavLink
              to="/recurring_bills"
              className={({ isActive }) =>
                `flex gap-4 items-center border-l-6 pl-4 ${isActive ? "border-l-[#277c78] bg-[#f8f4f0]" : "border-none text-gray-300"} rounded-r-xl w-52 py-3 hover:brightness-150 cursor-pointer`}
            >
              <img src="/images/icon-bills-active.svg" alt="home-icon" />
              <span className="text-xl">Recurring BIlls</span>
            </NavLink>
          </div>
        </div>

        <div
          onClick={() => setMinimizeMenu(!minimizeMenu)}
          className="flex gap-4 cursor-pointer"
        >
          <img className="w-6" src="/images/arrow-left.png" alt="logo" />

          <p className="text-white">Minimize Menu</p>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Sidebar;
