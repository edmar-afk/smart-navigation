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
      <div className='ml-0 md:ml-72 p-6 pt-12 md:pt-32'>
        <MapHeader/>
        <Map />
      </div>
    </>
  );
}

export default Dashboard;
