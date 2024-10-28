import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

interface AppointmentCardsInterface {
  name: string;
  date: string;
  time: string;
}

const AppointmentCards = ({ name, date, time }: AppointmentCardsInterface) => {
  return (
    <div className="flex place-content-center place-items-center w-full">
      <div className="flex justify-between items-center w-[95%]">
        <div className="grid grid-cols-3 grid-rows-1 place-items-center place-content-center">
          <h1 className="bg-blue-200 rounded p-2 text-xl text-left w-72">{name}</h1>
          <p className="bg-red-200 rounded p-2 text-xl text-center w-40">{date}</p>
          <p className="bg-orange-200 rounded p-2 text-xl text-center w-32">{time}</p>
        </div>

        <div className="flex gap-24 items-center">
          <FaCheck color="blue" size={30} />
          <IoIosTime size={30} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentCards;
