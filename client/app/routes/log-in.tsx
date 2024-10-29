import React from "react";
import { FaGoogle } from "react-icons/fa";

function Register() {
  return (
    <div>
      <img
        src="Component.png"
        alt=""
        className="absolute w-full h-screen -translate-y-3"
      />
      <div className="flex justify-between items-center mt-3 px-3 relative">
        <h1 className="text-4xl font-bold">Sanjeevani</h1>
      </div>
      <div className="h-screen w-full flex place-content-center place-items-center relative">
        <div className="flex flex-col gap-5 place-items-center place-content-center h-auto w-[40%] p-4">
          <h1 className="text-4xl font-bold">Log-in</h1>
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p></p>
          <div className="flex flex-col gap-5 place-content-start place-items-center w-full">
            <input
              type="text"
              className="rounded-[15px] border-2 border-black p-2 text-xl w-[80%]"
              placeholder="Enter your username"
            />
            <input
              type="password"
              className="rounded-[15px] border-2 border-black p-2 text-xl w-[80%]"
              placeholder="Password"
            />
            <div className="flex place-content-end place-items-end w-[80%]">
              <p className="text-lg hover:underline hover:italic transition duration-150">
                Forgot password?
              </p>
            </div>

            <div className="flex flex-col gap-5 justify-between place-content-center place-items-center w-full">
              <a
                href="patient-dash"
                className="flex place-content-center place-items-center w-full"
              >
                <button className="border-2 border-black text-black bg-white hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-105 rounded-[15px] px-4 py-2 w-[80%]">
                  <span className="text-2xl ">Log In</span>
                </button>
              </a>
              <h1 className="text-xl">OR</h1>
              <a
                href="patient-dash"
                className="flex place-content-center place-items-center w-full"
              >
                <button className="border-2 border-black text-black bg-white hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-105 rounded-[15px] px-4 py-2 w-[80%]">
                  <span className="flex text-2xl place-content-center place-items-center gap-10">
                    Sign in with <FaGoogle />
                  </span>
                </button>
              </a>
            </div>

            <div className="flex place-content-end place-items-end w-[80%]">
              <p className="text-lg">
                Not a member yet?{" "}
                <span className="italic hover:underline">
                  <a href="/register">Register</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
