import React from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import Card from "~/components/doctor/card";

function BookAppointment() {
  return (
    <div className="flex place-content-center place-items-center h-screen px-10">
      <div className="flex flex-col place-content-center place-items-center p-3 w-full h-[95%] bg-gray-300 rounded-2xl overflow-y-auto">
        <div className="h-full">
          <div className="flex flex-col place-content-center place-items-center">
            <div className="flex justify-between items-center w-[80%] rounded-full px-4 py-2 bg-white shadow-md mb-5">
              <h1 className="text-3xl font-medium">Sanjeevani</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  className="text-black font-medium rounded-full border-4 border-blue-500 px-2 py-2"
                  placeholder="Search"
                />
                <IoSearchCircleSharp size={50} color="#3b82f6"/>
              </div>

              <div className="flex items-center gap-5">
                <a className="text-xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">Filter</a>
                <a className="text-xl hover:text-blue-500 transition-colors duration-300 cursor-pointer">Sort</a>
              </div>
            </div>
          </div>
          <div className="flex place-content-center place-items-center h-[90%] p-10 overflow-y-auto">
            <div className="h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-5 items-center">
              {Array.from({ length: 9 }, (_, index) => (
                <div key={index} className="flex flex-col items-center my-10">
                  <Card/>
                </div>
              ))}
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;