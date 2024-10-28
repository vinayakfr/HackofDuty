import React from "react";

function DoctorReg() {
  return (
    <div>
      <img src="Component.png" alt="" className="absolute w-full h-screen" />
      <div className="h-screen w-full flex flex-col place-content-center place-items-center relative">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-5xl font-bold text-center">
            Doctor Registration
          </h1>
          <div className="flex flex-col gap-10 place-content-center place-items-start w-full">
            <div className="grid grid-rows-2 grid-cols-3 space-y-10 place-items-center place-content-center w-full">
              {[
                { label: "First Name" },
                { label: "Middle Name" },
                { label: "Last Name" },
                { label: "Email" },
                { label: "Phone no." },
                { label: "Speciality" },
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
                    required
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
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 place-content-center place-items-start">
                <label htmlFor="" className="text-xl font-medium">
                  Registration Number.
                </label>
                <input
                  type="tel"
                  placeholder="Reg No."
                  className="rounded-2xl border-2 border-blue-500 px-3 py-2 text-xl"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-end place-items-center w-full px-40 translate-y-20 ">
          <button className="bg-white hover:bg-blue-500 hover:text-white transition duration-300 border-2 border-black text-3xl font-medium px-3 py-2 rounded-2xl">
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorReg;
