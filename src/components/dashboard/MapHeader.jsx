import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";
function MapHeader() {
  return (
    <div className="mb-4 flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="text-sm font-light flex items-center gap-1">
          Home <ChevronRightIcon fontSize="small" /> Dashboard
        </div>

        <div className="flex flex-row items-center text-sm text-gray-500 gap-2 mt-4">
          <div className="bg-red-200 rounded-full p-2 flex items-center justify-center">
            <LocationOnIcon sx={{ color: "red", fontSize: 25 }} />
          </div>

          <div className="flex flex-col">
            <span className='font-semibold'>Overview of School Buildings</span>
            <span className="italic">
              Poruk 3, Biswangan , Lakewood ,Zamboanga Del Sur
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-sm text-gray-500 gap-2 mt-4">
        <div className="bg-green-200 rounded-full p-2 flex items-center justify-center">
          <ScheduleIcon
            sx={{ color: "#16a34a", fontSize: 25 }}
            className="animate-spin"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">School Hours</span>
          <span className="italic">6:00 am - 10:00 pm (Mon-Fri)</span>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
