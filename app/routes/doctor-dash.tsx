import React from "react";

function DoctorDashboard() {
  return (
    <div>
      <div className="flex place-content-center place-items-center h-full w-full px-5 py-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-2 place-content-end place-items-end bg-gray-300 p-2 w-full h-full rounded-2xl">
          {/* Two boxes verticalle - 1 big boxes vertically*/}
          <div className="flex flex-col justify-between h-full w-full lg:w-[70%] rouned-2xl">
            <div>
              <h1 className="text-5xl font-medium">Welcome Back, Vinayak!</h1>
              <p className="text-2xl font-thin italic">
                Lorem ipsum dolor sit.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-2 items-end w-full">
              <div className="h-[27rem] bg-white rounded-2xl p-4 w-full lg:w-[60%]">
                {/* box 4 */}
              </div>
              <div className="flex flex-row lg:flex-col justify-between gap-4 w-full lg:w-[40%]">
                <div className="h-[13rem] bg-white rounded-2xl p-4 w-[50%] lg:w-auto">
                  {/* box 5 */}
                </div>
                <div className="h-[13rem] bg-white rounded-2xl p-4 w-[50%] lg:w-auto ">
                  {/* box 5 */}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[47rem] w-full lg:w-[30%] rounded-2xl p-4 bg-white">
            {/* 1 box */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
