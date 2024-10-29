import React from "react";

function PatientRegister() {
  return (
    <div>
      <img src="Component.png" alt="" className="absolute w-full h-screen" />
      <div className="h-screen w-full flex flex-col place-content-center place-items-center relative">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold text-center">
            Patient Registration
          </h1>
          <div className="flex flex-col gap-10 place-content-center place-items-start w-full">
            <div className="grid grid-rows-2 grid-cols-3 space-y-10 place-items-center place-content-center w-full">
              {[
                { label: "First Name" },
                { label: "Middle Name" },
                { label: "Last Name" },
                { label: "Email" },
                { label: "Phone No." },
                { label: "Blood Group" },
              ].map((field, index) => (
                <div
                  className="flex flex-col gap-2 place-content-center place-items-start"
                  key={index}
                >
                  <label htmlFor="" className="text-xl font-medium">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.label}
                    className="rounded-2xl border-2 border-blue-500 px-3 py-2 text-xl"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 place-content-center place-items-center w-full">
              <div className="flex flex-col gap-2 place-content-center place-items-start">
                <label htmlFor="" className="text-xl font-medium">
                  Address
                </label>
                <textarea
                  name="address"
                  id=""
                  placeholder="Address"
                  className="border-2 border-blue-500 rounded-2xl p-3 text-xl"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 place-content-center place-items-start ">
                <label htmlFor="" className="text-xl font-medium">
                  Enter ABHA ID
                </label>
                <input
                  type="text"
                  placeholder="ABHA Card"
                  className="rounded-2xl border-2 border-blue-500 px-3 py-2 text-xl"
                />
                <a href="https://abha.abdm.gov.in/abha/v3/" className="text-lg font-light hover:underline">
                  Create an ABHA card
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-end place-items-center w-full px-40 translate-y-20 ">
          <a href="/patient-dash">
            <button className="bg-white hover:bg-blue-500 hover:text-white transition duration-300 border-2 border-black text-3xl font-medium px-3 py-2 rounded-2xl">
              <span>Continue</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
