import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Map from "../components/dashboard/Map";
import MapHeader from "../components/dashboard/MapHeader";
function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='ml-0 md:ml-72 p-6 pt-32 md:pt-24'>
        <MapHeader/>
        <Map />
      </div>
    </>
  );
}

export default Dashboard;
