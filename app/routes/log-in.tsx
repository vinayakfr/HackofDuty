import React from "react";

function LogIn() {
  return (
    <div>
      <h1 className="text-4xl font-bold px-5 py-4">Sanjeevani</h1>
      <div className="flex place-content-center place-items-center w-full max-h-screen px-10">
        <div className="flex justify-between items-center place-content-center place-items-center py-2 px-5 w-full h-[95%] bg-gray-300 rounded-2xl">
          <div className="flex items-center justify-center w-[50%] rounded-tl-2xl rounded-bl-2xl">
            <div className="w-[50%] h-[50%] rounded-full bg-blue-500 p-3" />
          </div>
          <div className="flex flex-col place-content-center place-items-center gap-10 w-[50%] rounded-tl-2xl ruonded-br-2xl">
            <h1 className="text-5xl font-medium text-center">Log-In</h1>
            <p className="text-3xl font-thin italic">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-2xl font-normal">
                Username or Email Address
              </label>
              <input type="text" className="rounded-2xl h-14 p-2 text-2xl w-[97%]" required/>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label htmlFor="" className="text-2xl font-normal">
                Password
              </label>
              <input type="password" className="rounded-2xl h-14 p-2 text-2xl w-[97%]" required/>
            </div>
            {/* Huan verification */}
            <button className="bg-blue-500 px-5 py-2 rounded-full hover:scale-105 transition duration-300"><span className="text-2xl text-white">Log-In</span></button>
          </div>
        </div>
      </div>
    </div>
    // <div className="relative">
    //   <div className="flex justify-between place-content-end place-items-center p-5">
    //     <a href="/" className="text-3xl font-medium">
    //       San<span className="underline">jeevan</span>i
    //     </a>
    //     <a href="/about-us">
    //       <button className="rounded-2xl bg-blue-300 border-2 border-rose-400 p-3 hover:bg-rose-300 hover:border-blue-300 transition-all duration-200">
    //         <span className="font-medium text-xl font-sans italic">
    //           About Us
    //         </span>
    //       </button>
    //     </a>
    //   </div>
    //   <h1 className="text-center text-7xl font-medium">Log-In</h1>
    //   <div className="flex flex-col place-content-center place-items-center pt-5">
    //     <div className="flex flex-col gap-6 items-center border-2 border-black rounded-xl p-5">
    //       <input
    //         type="text"
    //         placeholder="UserID"
    //         className="w-[20rem] border-2 border-black rounded-2xl h-14 p-2 text-xl"
    //       />
    //       <input
    //         type="text"
    //         placeholder="Password"
    //         className="w-[20rem] border-2 border-black rounded-2xl h-14 p-2 text-xl"
    //       />
    //       <button className="w-28 rounded-xl p-2 bg-orange-300 border border-black">
    //         <span className="text-2xl">Log-In</span>
    //       </button>
    //       <div className="bg-black w-full h-[2px]"></div>
    //       <p className="text-center text-xl">OR</p>
    //       <div className="flex gap-8 items-center">
    //         <p className="text-xl">Log-in with your </p>
    //         <button className="flex place-content-center place-items-center h-14 w-14 rounded-full border border-black">
    //           <FaGoogle size={35} />
    //         </button>
    //       </div>
    //     </div>
    //     <p className="text-lg lg:text-2xl pt-4">
    //       Don't have an account?{" "}
    //       <a href="/register" className="hover:underline hover:italic">
    //         Register
    //       </a>{" "}
    //     </p>
    //     <img src="asset4.png" alt="" className="w-full object-cover pt-14"/>
    //   </div>
    // </div>
  );
}

export default LogIn;
