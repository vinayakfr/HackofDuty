import React from "react";
import Calendar from "~/components/calendar";
import DoctorNavbar from "~/components/doctor/navbar";

function DoctorDashboard() {
  return (
    <div>
      <DoctorNavbar/>
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
              <Calendar />
              <div className="flex flex-row lg:flex-col justify-between gap-4 w-full lg:w-[40%]">
                <div className="flex flex-col gap-5 place-content-center place-items-start h-[13rem] bg-white rounded-2xl w-[50%] lg:w-auto p-4">
                  <h1 className="text-2xl font-medium">Quick Notes</h1>
                  <textarea
                    name="notes"
                    id=""
                    className="bg-gray-300 rounded-2xl p-2 text-lg h-[70%] w-full"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-5 place-content-start place-items-start h-[13rem] bg-white rounded-2xl w-[50%] lg:w-auto p-4">
                  <h1 className="text-2xl font-medium">Reminders </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 place-content-start place-items-start h-[47rem] w-full lg:w-[30%] rounded-2xl p-4 bg-white">
            <h1 className="text-3xl font-medium">Next Appointment</h1>
          
            <div className="flex justify-between items-center w-full bg-gray-300 rounded-2xl pr-2">
              <img src="Patient.png " alt="" className="w-[50%] rounded-2xl" />
              <div className="flex flex-col place-content-center place-items-start gap-3">
                <h1>Sachin Singh</h1>
                <h1>Male</h1>
                <h1>9818367251</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
