import React from "react";

function Navbar() {
  return (
    <div className="flex place-content-center place-items-center w-full">
      <div className="flex justify-between items-center w-[97%] p-3 bg-gray-300 rounded-full mt-3">
        <a href="/doctor-dash" className="text-4xl font-bold">
          Sanjeevani
        </a>
        <a
            href="/doctor-profile"
            className="text-xl font-medium hover:underline"
          >
            Profile
          </a>
        </div>
      </div>
  );
}

export default Navbar;
