import { Flex, Progress } from "antd";
import ProgressPie from "../components/ProgressPie";
const Pots = () => {
  return (
    <div className="lg:pl-[10rem] bg-[#f8f4f0]">
      <div className="flex flex-col py-5 px-4 md:p-10 pb-20 md:pb-32 lg:pl-0 bg-beige-300 lg:pr-20 lg:pb-8">
        <div className="flex justify-between items-center mb-8 w-full">
          <h1 className="text-3xl text-gray-900 font-bold">Pots</h1>
          <button className="flex items-center gap-2 text-[#f8f4f0] p-3 px-4 rounded-md bg-gray-900">
            + Add Pot
          </button>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="flex flex-col bg-white py-8 px-5 md:p-10 rounded-md">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-4 h-4 bg-[#F2CDAC]"></div>
              <h2 className="text-xl font-bold">Dubaitrip</h2>
            </div>
            <div className="flex justify-between items-center mt-10">
              <p className="text-gray-500 text-sm">Total Saved</p>
              <h2 className="text-3xl font-bold">$0.00</h2>
            </div>
            <Flex gap="small" vertical>
              <Progress percent={0} status="active" />
            </Flex>
            <div className="flex justify-between items-center mt-2  text-gray-500 text-xs">
              <p>0.00%</p>
              <p>Target of 50.00%</p>
            </div>
            <div className="flex mt-12 gap-3 items-center">
              <button className="font-semibold bg-beige-300 transition-all duration-300 hover:brightness-90 text-gray-900 py-3 rounded-md items-center px-15 gap-2">
                <span>+</span>
                <span> Add Money</span>
              </button>
              <button className="font-semibold bg-beige-300 transition-all duration-300 hover:brightness-90 text-gray-900 py-3 rounded-md items-center px-15 gap-2">
                <span>+</span>
                <span>Withdraw</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white py-6 px-5 md:p-10 rounded-md">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-4 h-4 bg-[#277C78]"></div>
              <h2 className="text-xl font-bold">Eurotrip</h2>
            </div>
            <div className="flex justify-between items-center mt-10">
              <p className="text-gray-500 text-sm">Total Saved</p>
              <h2 className="text-3xl font-bold">$70.00</h2>
            </div>
            <Flex gap="small" vertical>
              <Progress percent={70} status="active" />
            </Flex>
            <div className="flex justify-between items-center mt-2 text-gray-500 text-xs">
              <p>70.00%</p>
              <p>Target of 10,000.00%</p>
            </div>
            <div className="flex mt-12 gap-3 items-center">
              <button className="font-semibold bg-beige-300 transition-all duration-300 hover:brightness-90 text-gray-900 py-3 rounded-md items-center px-15 gap-2">
                <span>+</span>
                <span> Add Money</span>
              </button>
              <button className="font-semibold bg-beige-300 transition-all duration-300 hover:brightness-90 text-gray-900 py-3 rounded-md items-center px-15 gap-2">
                <span>+</span>
                <span>Withdraw</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProgressPie  />
    </div>
  );
};

export default Pots;
