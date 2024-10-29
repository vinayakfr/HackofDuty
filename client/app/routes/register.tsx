import React from "react";

function PatientRegister() {
  return (
    <div>
      <img src="Component.png" alt="" className="absolute w-full h-screen" />
      <div className="h-screen w-full flex flex-col gap-10 place-content-center place-items-center relative">
        <h1 className="text-5xl font-bold text-center">Register</h1>
        <p className="text-3xl font-semibold">Are you a patient or doctor?</p>
        <div className="flex place-content-center place-items-center w-full justify-between px-40 translate-y-20 ">
          <a href="/patient-register">
            <button className="bg-white hover:bg-blue-500 hover:text-white transition duration-300 border-2 border-black text-3xl font-medium px-3 py-2 rounded-2xl">
              <span>Patient</span>
            </button>
          </a>
          <a href="/doctor-register">
            <button className="bg-white hover:bg-blue-500 hover:text-white transition duration-300 border-2 border-black text-3xl font-medium px-3 py-2 rounded-2xl">
              <span>Doctor</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
