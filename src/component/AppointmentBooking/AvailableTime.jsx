import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function AvailableTime() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="w-[430px] h-[526px]">
        <div className="text-2xl font-normal tracking-[0.3px] text-[#222B45]">
          Available Time
        </div>

        <div className="grid grid-cols-4 gap-3 pt-4 pb-10 ">
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            9:00 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            9:30 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:00 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:30 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:30 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:30 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:30 AM
          </button>
          <button className="w-24 h-10 rounded-full hover:bg-[#3E64FF] hover:text-white  bg-[#FFF] border-solid border-[1px]">
            10:30 AM
          </button>
        </div>

        <div className="">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}
