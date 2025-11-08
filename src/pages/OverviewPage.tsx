import { Link } from "react-router-dom";
import ProgressPie from "../components/ProgressPie";

interface TransactionsCard {
  avatarUrl: string;
  amount: number;
  date: string;
  name: string;
}
const transaction: TransactionsCard = {
  avatarUrl: "./images/mason-martinez.jpg",
  date: "2024-08-07T17:40:29Z",
  amount: 100,
  name: "Mason Martinez",
};
const OverviewPage = () => {
  return (
    <div className="lg:pl-[10rem] bg-[#f8f4f0]">
      <div className="flex flex-col py-5 px-4 md:p-10 pb-20 md:pb-32 lg:pl-0 bg-beige-300 lg:pr-20 lg:pb-8">
        <div className="flex justify-between items-center mb-8 w-full">
          <h1 className="text-3xl text-gray-900 font-bold">Overview</h1>
          <button className="flex items-center gap-2 text-[#f8f4f0] p-3 px-4 rounded-md bg-gray-900">
            <img
              src="/images/right-bracket.svg"
              className="w-3.5 brightness-0 invert"
              alt="right-arrow-bracket"
            />
            Login
          </button>
        </div>
        <div className="grid grid-cols-1 lg:mt-2 md:h-[7.5rem] md:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-gray-900 text-beige-300 flex flex-col justify-center py-4 p-4 rounded-lg">
            <p className="text-sm">Current Balance</p>
            <h2 className="text-[28px] font-semibold">-$5,770.00</h2>
          </div>
          <div className="bg-white flex flex-col justify-center py-4 p-4 rounded-lg">
            {" "}
            <p className="text-sm text-gray-500">Incomes</p>
            <h2 className="text-[28px] font-semibold text-gray-900">
              -$3,814.25
            </h2>
          </div>
          <div className="bg-white flex flex-col justify-center py-4 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Expenses</p>
            <h2 className="text-[28px] font-semibold text-gray-900">
              -$12, 306.50
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          {/* left */}
          <div className="flex flex-col">
            <div className="bg-white rounded-md mt-8 gap-4 md:gap-5 px-5 lg:mt-6 py-6 md:p-8">
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-xl text-[#171717]">Pots</h2>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-500">See Details</span>
                  <Link to="/pots">
                    <img
                      src="/images/icon-caret-right.svg"
                      alt="right-caret-icon"
                      className="cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 bg-beige-300 rounded-lg py-5 lg:py-8 p-4">
                  <img src="/images/icon-pot.svg" alt="icon-pot" />
                  <div className="py-2 ml-3">
                    <p className="text-sm text-gray-500">Total Saved</p>
                    <h2 className="text-gray-900 font-bold text-3xl">$0.00</h2>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex gap-4 items-center border-l-4 rounded-md rounded-r-md border-l-[#277c78] mr-3"></div>
                  <div className="flex flex-col gap-4">
                    <p className="text-xs text-gray-500">Eurotrip</p>
                    <p className="text-sm font-bold text-gray-900">$0.00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* transactions */}
            <div className="bg-white rounded-md mt-8 gap-4 md:gap-5 px-5 lg:mt-6 py-6 md:p-8">
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-xl text-[#171717]">
                  Transactions
                </h2>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-500">View Details</span>
                  <img
                    src="/images/icon-caret-right.svg"
                    alt="right-caret-icon"
                  />
                </div>
              </div>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b-[0.063rem] border-gray-100 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={transaction.avatarUrl}
                        alt="{transaction.name}"
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <p className="font-semibold text-gray-800">
                        {transaction.name}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 items-end pl-2">
                      <p className="text-sm text-gray-900 font-bold">
                        -${transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString(
                          "en-Us",
                          {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col">
            <div className="bg-white rounded-md mt-8 gap-4 md:gap-5 px-5 lg:mt-6 py-6 md:p-8">
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-xl text-[#171717]">Budgets</h2>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-500">See Details</span>
                  <img
                    src="/images/icon-caret-right.svg"
                    alt="right-caret-icon"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
                <div>
                  <ProgressPie />
                </div>
                <div className="flex flex-col gap-4 p-4 items-start">
                  <div className="flex">
                    <div className="flex gap-4 items-center border-l-4 rounded-md rounded-r-md border-l-[#277c78] mr-3"></div>
                    <div className="flex flex-col gap-4">
                      <p className="text-xs text-gray-500">Dinning Out</p>
                      <h2>$75.00</h2>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex gap-4 items-center border-l-4 rounded-md rounded-r-md border-l-[#626070  ] mr-3"></div>
                    <div className="flex flex-col gap-4">
                      <p className="text-xs text-gray-500">Personal Care</p>
                      <p className="text-sm font-bold text-gray-900">$0.00</p>
                    </div>
                  </div>
                   <div className="flex">
                    <div className="flex gap-4 items-center border-l-4 rounded-md rounded-r-md border-l-[#82c9d7] mr-3"></div>
                    <div className="flex flex-col gap-4">
                      <p className="text-xs text-gray-500">Bills</p>
                      <p className="text-sm font-bold text-gray-900">$0.00</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            {/* Recurring bills */}
            <div className="bg-white rounded-md mt-8 gap-4 md:gap-5 px-5 lg:mt-6 py-6 md:p-8">
              <div className="flex justify-between mb-5">
                <h2 className="font-bold text-xl text-[#171717]">
                  Recurring Bills
                </h2>
                <div className="flex gap-2 items-center">
                  <span className="text-sm text-gray-500">See Details</span>
                  <img
                    src="/images/icon-caret-right.svg"
                    alt="right-caret-icon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between rounded-md rounded-r-md border-l-[#277c78] border-l-4 px-4 py-4 bg-beige-300">
                  <p>Paid Bills</p>
                  <p>$130.00</p>
                </div>
                <div className="flex justify-between rounded-md rounded-r-md border-l-[#f2cdac] border-l-4 px-4 py-4 bg-beige-300">
                  <p>Total Upcoming</p>
                  <p>$204.98</p>
                </div>
                <div className="flex justify-between rounded-md rounded-r-md border-l-[#82c9d7] border-l-4 px-4 py-4 bg-beige-300">
                  <p>Total Soon</p>
                  <p>$50.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
