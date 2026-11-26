
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Map from "../components/dashboard/Map";
import MapHeader from "../components/dashboard/MapHeader";

function Dashboard() {
  const [selectedMap, setSelectedMap] = useState("default");

  return (
    <>
      <Header />

      <Sidebar
        selectedMap={selectedMap}
        onSelectMap={setSelectedMap}
      />

      <div className="ml-0 md:ml-20 p-6 pt-32 md:pt-24">
        <MapHeader />

        <Map
          selectedPath={selectedMap}
        />
      </div>
    </>
  );
}

export default Dashboard;
