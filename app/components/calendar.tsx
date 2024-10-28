import React, { useState } from "react";
import dayjs from "dayjs";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Generate days for the current month
  const startDay = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null); // Fill empty days for alignment
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const handlePrevMonth = () =>
    setCurrentDate(currentDate.subtract(1, "month"));
  const handleNextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  return (
    <div className="h-[27rem] bg-white rounded-2xl p-4 w-full lg:w-[60%]">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          <FaRegArrowAltCircleLeft size={30} />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">
          {currentDate.format("MMMM YYYY")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-900"
        >
          <FaRegArrowAltCircleRight size={30} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-3">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`h-10 flex items-center justify-center ${
              day ? "text-gray-800" : "text-transparent"
            } ${
              day === currentDate.date()
                ? "bg-blue-500 text-white rounded-full"
                : ""
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
