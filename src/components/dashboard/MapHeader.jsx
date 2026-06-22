import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScheduleIcon from "@mui/icons-material/Schedule";

function MapHeader() {
  return (
    <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div className="flex flex-col">
        <div className="text-sm font-light flex items-center gap-1">
          Home <ChevronRightIcon fontSize="small" /> Dashboard
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center text-sm text-gray-500 gap-2 mt-4">
          <div className="bg-red-200 rounded-full p-2 flex items-center justify-center">
            <LocationOnIcon sx={{ color: "red", fontSize: 25 }} />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-sm md:text-md">
              Overview of School Buildings
            </span>
            <span className="italic text-xs md:text-md">
              Poruk 3, Biswangan , Lakewood ,Zamboanga Del Sur
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center text-sm text-gray-500 gap-2 mt-4 md:mt-0">
        <div className="bg-green-200 rounded-full p-2 flex items-center justify-center">
          <ScheduleIcon
            sx={{ color: "#16a34a", fontSize: 25 }}
            className="animate-spin"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold text-sm md:text-md">School Hours</span>
          <span className="italic text-xs md:text-md">
            6:00 am - 10:00 pm (Mon-Fri)
          </span>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
