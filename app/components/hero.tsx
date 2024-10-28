import React from "react";
import Tilt from "react-parallax-tilt";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import { PiHospitalFill } from "react-icons/pi";

function Hero() {
  return (
    <div>
      <div className="flex place-content-center place-items-center h-screen overflow-y-hidden overflow-x-hidden relative">
        {/* Widgets */}
        <div className="hidden xl:block absolute w-full z-20 top-[7rem]">
          <div className="flex justify-between w-full px-5 ">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-full h-32 bg-orange-500/20 backdrop-blur-md rounded-2xl">
                {/* blank */}
              </div>
              <div className="flex gap-10 justify-between items-center w-full">
                <div className="w-40 h-40 bg-rose-500/20 backdrop-blur-md rounded-2xl">
                  {/* blank */}
                </div>
                <div className="flex flex-col gap-5">
                  <div className="w-10 h-10 bg-purple-600/20 backdrop-blur-md rounded-full">
                    {/* blank */}
                  </div>
                  <div className="w-16 h-16 bg-teal-400/20 backdrop-blur-md rounded-full">
                    {/* blank */}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-10 justify-between items-end">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <div className="w-20 h-20 bg-orange-400/20 backdrop-blur-md rounded-full">
                    {/* blank */}
                  </div>
                  <div className="w-72 h-20 bg-rose-400/20 backdrop-blur-md rounded-full">
                    {/* blank */}
                  </div>
                </div>
                <div className="flex place-content-end place-items-start gap-10">
                  <div className="w-16 h-16 bg-yellow-500/20 backdrop-blur-md rounded-full">
                    {/* blank */}
                  </div>
                  <div className="w-44 h-44 bg-teal-600/20 backdrop-blur-md rounded-2xl">
                    {/* blank */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blue Semi-circle */}
        <div
          className="flex place-content-center place-items-center absolute rounded-full w-[30rem] h-[30rem] lg:h-[85rem] lg:w-[85rem] -bottom-[15rem] lg:-bottom-[45rem] "
          style={{
            background: "radial-gradient(circle, #3b82f6, #93c5fd, #3b82f6)",
          }}
        >
          <div className="flex place-content-center place-items-start bg-white lg:h-[20rem] lg:w-[20rem] rounded-full"></div>
        </div>
        <div className="flex flex-col gap-10 place-content-center place-items-center mt-20 lg:mt-0 relative">
          <h1 className="text-4xl lg:text-8xl text-center relative lg:w-[60rem] font-medium">
            Your one stop healthcare solution
          </h1>
          <div className="flex gap-4 items-center">
            <div className="flex place-content-center place-items-center h-16 w-16 rounded-full bg-black/20 hover:-translate-y-2 transition duration-300">
              <FaUserDoctor size={30} />
            </div>
            <div className="flex place-content-center place-items-center h-16 w-16 rounded-full bg-black/20 hover:-translate-y-2 transition duration-300">
              <FaHandHoldingMedical size={30} />
            </div>
            <div className="flex place-content-center place-items-center h-16 w-16 rounded-full bg-black/20 hover:-translate-y-2 transition duration-300">
              <FaAmbulance size={30} />
            </div>
            <div className="flex place-content-center place-items-center h-16 w-16 rounded-full bg-black/20 hover:-translate-y-2 transition duration-300">
              <PiHospitalFill size={30} />
            </div>
          </div>
          <p className="text-lg lg:text-3xl italic text-center lg:w-[60rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            magni labore exercitationem quasi aut aperiam!
          </p>
          <Tilt>
            <div className="flex justify-between gap-8 items-center rounded-2xl p-4 bg-white/50 backdrop-blur-md shadow-lg">
              <img
                src="pfp.jpg"
                alt="profile-picture"
                className="rounded-2xl object-contain h-16 w-16"
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-medium">John Doe</h1>
                <p>Patient Id: 98646e09g</p>
                <p>Last Visit: 14 Sep 24</p>
              </div>
            </div>
          </Tilt>
          <a href="/register">
            <button className="bg-white rounded-full shadow-lg hover:shadow-inner px-3 py-2 hover:scale-105 transition duration-200">
              <span className="text-xl">Create an account</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
