import React from "react";

function Card() {
  return (
    <div className="flex flex-col place-content-center place-items-center gap-2 w-[97%] lg:w-[24rem] h-auto rounded-2xl bg-white shadow-lg border-2 border-gray-300 hover:border-blue-400 hover:shadow-2xl transition duration-300">
      <img src="new doctor.png" alt="" className="rounded-t-xl" />

      <div className="bg-gray-300 w-full text-center py-10 rounded-b-2xl border-t border-gray-200">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">John Doe</h1>
        <a href="/doctor-profile">

          <button className="w-40 bg-blue-500 rounded-full px-4 py-2 hover:bg-blue-600 hover:scale-105 shadow-md transition duration-300">
            <span className="text-white text-lg">View Profile</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
