import React from "react";

function DoctorProfile() {
  return (
    <div className="flex place-content-center place-items-center h-screen px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-3 w-full h-[95%] bg-gray-300 rounded-2xl overflow-y-auto">
        <div className="flex flex-col gap-10 items-center ">
          <div className="h-[55%] w-full rounded-2xl">
            <img src="new doctor.png" alt="" className="rounded-2xl" />
          </div>
          <div className="h-[45%] w-full bg-rose-500 rounded-2xl">
            {/* Profile picture */}
          </div>
        </div>
        <div className="flex flex-col gap-6 bg-white rounded-2xl p-5">
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Name</h1>
            <p className="text-lg">John Doe</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Age</h1>
            <p className="text-lg">21</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Gender</h1>
            <p className="text-lg">Male</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Phone Number</h1>
            <p className="text-lg">0000000000</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Speciality:</h1>
            <p className="text-lg">General Physician</p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Qualification:</h1>
            <p className="text-lg">MBBS MD</p>
          </div>
          <div className="flex flex-col gap-2 justify-between items-start w-full">
            <h1 className="text-semibold text-2xl">Address</h1>
            <p className="text-lg text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aspernatur earum non commodi sapiente totam qui possimus, esse
              aliquam officiis.
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-semibold text-2xl">Pincode:</h1>
            <p className="text-lg">XXYYZZ</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <img
            src="map.png"
            alt=""
            className="h-[50%] w-full bg-orange-500 rounded-2xl"
          />
          <div className="flex flex-col place-content-start place-items-start h-[50%] w-full bg-white rounded-2xl p-3">
            <h1 className="text-3xl font-medium ">Reviews</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
