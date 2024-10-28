import React, { useState } from "react";
import SOS from "~/components/patient/SOS";

function PatientDashboard() {
  return (
    <div>
      <div className="flex place-content-center place-items-center h-full w-full px-5 py-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-2 place-content-end place-items-end bg-gray-300 p-2 w-full h-full rounded-2xl">
          {/* Two boxes verticalle - 1 big boxes vertically*/}
          <div className="flex flex-col gap-4 lg:w-[70%] rouned-2xl">
            
            <div>
              <h1 className="text-5xl font-medium">Welcome Back, Vinayak!</h1>
              <p className="text-2xl font-thin italic">
                Lorem ipsum dolor sit.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-2 items-start w-full">
              <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-[40%]">
                <div className="h-[10rem] w-full bg-white rounded-2xl p-2"></div>
                <div className="h-[10rem] w-full bg-white rounded-2xl p-2"></div>
              </div>
              <div className="h-[20rem] w-full lg:w-[60%] bg-white rounded-2xl p-2"></div>
            </div>

            <div className="flex justify-between gap-2 items-center w-full">
              <div className="h-[10rem] bg-white rounded-2xl p-4 w-[70%]">
                {/* box 4 */}
              </div>
              <div className="h-[10rem] bg-white rounded-2xl p-4 w-[30%]">
                {/* box 5 */}
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[47rem] w-full lg:w-[30%] rounded-2xl p-4 bg-white">
            <div className="w-full place-content-end place-items-end p-3">
              <div className="flex items-center justify-center h-[10rem] w-[10rem] rounded-full bg-rose-500h-48 border-4 border-rose-400 bg-rose-500 shadow-[rgba(0,0,0,0.6)_6px_5px_2px_1px] hover:shadow-none transition-all duration-200 hover:translate-y-1 hover:opacity-95">
                <h1 className="text-white text-4xl font-bold">SOS</h1>
              </div>
            </div>
            <div className="h-[22.5rem] w-full bg-gray-300 rounded-2xl"></div>
            <div className="flex items-center w-full gap-5 justify-between pt-3">
              <div className="h-[11rem] w-[50%] bg-gray-300 rounded-2xl"></div>
              <div className="h-[11rem] w-[50%] bg-gray-300 rounded-2xl"></div>
            </div>
            {/* 1 box */}
          </div>
        </div>
      </div>

      {/* <div>
        <div className="hidden lg:block">
          <div className="flex place-content-center place-items-center py-20">
            <div className="flex justify-between w-[90%] items-start">
              <div className="flex flex-col">
                <h1 className="text-5xl font-medium py-3">
                  Hello Vinayak Srivastava
                </h1>
                <p className="text-2xl font-light">
                  An apple a day keeps the doctor away
                </p>
                <div className="flex flex-col lg:h-[15rem] lg:w-[30rem] border-2 border-black rounded-2xl my-7 p-4">
                  <h1 className="text-3xl font-medium">Next Appointment</h1>
                  <p className="text-2xl font-semibold opacity-90">
                    Book your next appointment
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="h-[6rem] w-[6rem] rounded-full bg-green-300"></div>
                  <div className="h-[6rem] w-[6rem] rounded-full bg-blue-300"></div>
                  <div className="h-[6rem] w-[6rem] rounded-full bg-red-300"></div>
                  <div className="h-[6rem] w-[6rem] rounded-full bg-yellow-300"></div>
                </div>
              </div>
              <div className="flex flex-col gap-6 place-content-center place-items-center">
                <SOS />
                <button className="bg-blue-300 border border-black rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Medical Reports</span>
                </button>
                <button className="bg-blue-300 border border-black rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Prescription</span>
                </button>
                <button className="bg-blue-300 border border-black rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Pharmacies</span>
                </button>
                <button className="bg-blue-300 border border-black rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Fitness</span>
                </button>
                <button className="bg-blue-300 border border-black rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Diet</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex place-content-center place-items-center py-5">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-medium py-3">Hello User!</h1>
              <p className="text-2xl font-light text-center">
                An apple a day keeps the doctor away
              </p>
              <div className="py-5">
                <SOS />
              </div>
              <div className="flex flex-col gap-3 place-content-center place-items-center">
                <button className="bg-blue-300 rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Medical Reports</span>
                </button>
                <button className="bg-blue-300 rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Prescription</span>
                </button>
                <button className="bg-blue-300 rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Pharmacies</span>
                </button>
                <button className="bg-blue-300 rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Fitness</span>
                </button>
                <button className="bg-blue-300 rounded-2xl p-2 w-64 hover:bg-yellow-300">
                  <span className="text-3xl">Diet</span>
                </button>
              </div>
              <div className="flex flex-col h-[10rem] w-[80%] border-2 border-black rounded-2xl mt-8 p-4">
                <h1 className="text-3xl font-medium">Next Appointment</h1>
                <p className="text-2xl opacity-90">
                  Book your next appointment
                </p>
              </div>
              <div className="flex gap-5 items-center mt-8">
                <div className="h-[5rem] w-[5rem] lg:h-[6rem] lg:w-[6rem] rounded-full bg-green-300"></div>
                <div className="h-[5rem] w-[5rem] lg:h-[6rem] lg:w-[6rem] rounded-full bg-blue-300"></div>
                <div className="h-[5rem] w-[5rem] lg:h-[6rem] lg:w-[6rem] rounded-full bg-red-300"></div>
                <div className="h-[5rem] w-[5rem] lg:h-[6rem] lg:w-[6rem] rounded-full bg-yellow-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PatientDashboard;