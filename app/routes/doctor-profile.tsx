import React from "react";

function DoctorProfile() {
  return (
    <div className="flex place-content-center place-items-center h-screen px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 w-full h-[95%] bg-gray-300 rounded-2xl overflow-y-auto">
        <div className="flex flex-col gap-10 items-center ">
          <div className="h-[70%] w-full bg-orange-500 rounded-2xl">
            {/* Profile picture */}
          </div>
          <div className="h-[30%] w-full bg-rose-500 rounded-2xl">
            {/* Profile picture */}
          </div>
        </div>
        <div className="bg-white rounded-2xl"></div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="h-[50%] w-full bg-orange-500 rounded-2xl">
            {/* Profile picture */}
          </div>
          <div className="h-[50%] w-full bg-rose-500 rounded-2xl">
            {/* Profile picture */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
