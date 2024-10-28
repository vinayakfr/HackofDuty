import React from "react";

function Navbar() {
  return (
    <div className="flex place-content-center place-items-center w-full">
      <div className="flex justify-between items-center w-[97%] p-3 bg-gray-300 rounded-full mt-3">
        <a href="/patient-dash" className="text-4xl font-bold">
          Sanjeevani
        </a>
        <div className="flex items-center gap-4">
          <a
            href="/book-appointments"
            className="text-xl font-medium hover:underline"
          >
            Appointments
          </a>
          <a
            href="/patient-profile"
            className="text-xl font-medium hover:underline"
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
