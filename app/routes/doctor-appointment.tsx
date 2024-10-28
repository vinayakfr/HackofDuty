import React from "react";
import AppointmentCards from "~/components/appointment-cards";

function DoctorAppoitment() {
  return (
    <div>
      <h1 className="text-8xl font-medium text-center py-10">Appointments</h1>
      <div className="flex flex-col gap-10 place-content-center place-items-start py-10 px-10">
        <div className="flex place-content-start place-items-start w-[95%]">
          <div className="flex gap-5 items-center">
            <button className="w-32 bg-yellow-200 rounded-xl border border-black p-2">
              <span className="text-2xl font-medium">Upcoming</span>
            </button>
            <button className="w-28 rounded-xl border border-black p-2">
              <span className="text-2xl font-medium">Schedule</span>
            </button>
            <button className="w-28 rounded-xl border border-black p-2">
              <span className="text-2xl font-medium">Book</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center w-full">
        <div className="flex justify-between w-[95%] items-center">
          <div className="grid grid-cols-3 grid-rows-1 place-items-center place-content-center">
            <h1 className="text-2xl text-left w-72">
              Patient Name
            </h1>
            <p className="text-2xl text-center w-40">
              Date
            </p>
            <p className="text-2xl text-center w-32">
              Time
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <h1 className="text-2xl">Confirm</h1>
            <h1 className="text-2xl">Schedule</h1>
          </div>
        </div>
        <AppointmentCards
          name={"John Doe"}
          date={"14/09/2005"}
          time={"18:00"}
        />
        <AppointmentCards
          name={"Vinayak Srivastava"}
          date={"14/09/2005"}
          time={"18:00"}
        />
        <AppointmentCards
          name={"Vedant Vadke"}
          date={"14/09/2005"}
          time={"18:00"}
        />
        <AppointmentCards
          name={"John Doe"}
          date={"14/09/2005"}
          time={"18:00"}
        />
      </div>
    </div>
  );
}

export default DoctorAppoitment;
