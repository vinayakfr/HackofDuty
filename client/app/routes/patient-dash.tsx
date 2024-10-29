import React, { useState } from "react";
import Calendar from "~/components/calendar";
import Navbar from "~/components/patient/navbar";
import SOS from "~/components/patient/SOS";

function PatientDashboard() {
  return (
    <div>
      <img
        src="Component.png"
        alt=""
        className="absolute w-full h-screen -translate-y-3"
      />
      <div className="flex flex-col place-content-center place-items-center w-full h-screen relative">
      <Navbar />
      <div className="flex place-content-center place-items-center h-full w-full px-5 py-10 ">
        <div className="flex flex-col lg:flex-row justify-between gap-2 place-content-end place-items-end bg-black/30  p-2 w-full h-full backdrop-blur-lg rounded-2xl">
          {/* Two boxes verticalle - 1 big boxes vertically*/}
          <div className="flex flex-col gap-4 lg:w-[70%] rouned-2xl">
            <div>
              <h1 className="text-5xl font-medium text-white">Welcome Back, Vinayak!</h1>
              <p className="text-2xl font-thin italic text-white">
                Lorem ipsum dolor sit.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-2 items-start w-full">
              <div className="flex flex-row lg:flex-col gap-2 w-full lg:w-[40%]">
                <div className="flex flex-col gap-5 place-content-start place-items-start h-[10rem] bg-white rounded-2xl lg:w-auto p-4">
                  <h1 className="text-2xl font-medium">Reminders </h1>
                </div>
                <div className="flex flex-col gap-5 place-content-start place-items-start h-[10rem] bg-white rounded-2xl lg:w-auto p-4">
                  <h1 className="text-2xl font-medium">Quick Notes</h1>
                  <textarea
                    name="notes"
                    id=""
                    className="bg-gray-300 rounded-2xl p-2 text-lg h-[70%] w-full"
                  ></textarea>
                </div>
              </div>

              <Calendar />
            </div>

            <div className="flex justify-between gap-2 items-center w-full">
              <div className="flex place place-items-start h-[10rem] bg-white rounded-2xl p-4 w-[70%]">
                <h1 className="text-2xl font-bold">Last Visit</h1>

              </div>
              <div className="flex place place-items-start h-[10rem] bg-white rounded-2xl p-4 w-[30%]">
                <h1 className="text-2xl font-semibold">Medicine List</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[47rem] w-full lg:w-[30%] rounded-2xl p-4 bg-white">
            <div className="w-full place-content-end place-items-end p-3">
              <SOS/>
            </div>
            <img
              src="new doctor.png"
              className="h-[22.5rem] w-full bg-gray-300 rounded-2xl"
            />
            <div className="flex items-center w-full gap-5 justify-between pt-3">
              <div className="flex place-content-center place-items-start h-[11rem] w-[50%] bg-gray-300 rounded-2xl p-2">
                <h1 className="text-2xl font-semibold">Next Appointment</h1>
              </div>
              <div className="flex place-content-center place-items-start h-[11rem] w-[50%] bg-gray-300 rounded-2xl p-2">
                <h1 className="text-2xl font-semibold">Medicine Reminder</h1>
              </div>
            </div>
            {/* 1 box */}
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default PatientDashboard;
