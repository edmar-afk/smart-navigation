
import React, { useRef, useState, useLayoutEffect } from "react";

import mapImg from "../../assets/images/map.png";
import registrarMap from "../../assets/images/registrarMap.png";
import libraryMap from "../../assets/images/libraryMap.png";
import clinicMap from "../../assets/images/clinicMap.png";

function Map() {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  const [scale, setScale] = useState(1);
  const [selectedPath, setSelectedPath] = useState("default");

  const minScale = 0.9;
  const maxScale = 3;
  const step = 0.1;

  const maps = {
    default: mapImg,
    clinic: clinicMap,
    registrar: registrarMap,
    library: libraryMap,
  };

  const mapLabels = {
    default: "Office Map",
    clinic: "Clinic Path",
    registrar: "Registrar Path",
    library: "Library Path",
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + step, maxScale));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - step, minScale));
  };

  // Switch map and reset zoom
  const selectPath = (path) => {
    setSelectedPath(path);
    setScale(1);
  };

  // Automatically scroll to bottom after EVERY image loads
  const handleImageLoad = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const container = containerRef.current;

        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      });
    });
  };

  // Drag functionality
  const onPointerDown = (e) => {
    isDown.current = true;

    containerRef.current.setPointerCapture(e.pointerId);

    startX.current = e.clientX;
    startY.current = e.clientY;

    scrollLeft.current = containerRef.current.scrollLeft;
    scrollTop.current = containerRef.current.scrollTop;
  };

  const onPointerMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    containerRef.current.scrollLeft = scrollLeft.current - dx;
    containerRef.current.scrollTop = scrollTop.current - dy;
  };

  const onPointerUp = () => {
    isDown.current = false;
  };

  return (
    <div className="w-full relative space-y-4">

      {/* Path Selection Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => selectPath("clinic")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            selectedPath === "clinic"
              ? "bg-blue-600 text-white shadow"
              : "bg-white text-gray-700 border hover:bg-blue-50"
          }`}
        >
          Clinic Path
        </button>

        <button
          onClick={() => selectPath("registrar")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            selectedPath === "registrar"
              ? "bg-blue-600 text-white shadow"
              : "bg-white text-gray-700 border hover:bg-blue-50"
          }`}
        >
          Registrar Path
        </button>

        <button
          onClick={() => selectPath("library")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            selectedPath === "library"
              ? "bg-blue-600 text-white shadow"
              : "bg-white text-gray-700 border hover:bg-blue-50"
          }`}
        >
          Library Path
        </button>

        <button
          onClick={() => selectPath("default")}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            selectedPath === "default"
              ? "bg-blue-600 text-white shadow"
              : "bg-white text-gray-700 border hover:bg-blue-50"
          }`}
        >
          Full Map
        </button>
      </div>

      {/* Map Container */}
      <div
        ref={containerRef}
        className="relative h-[500px] overflow-auto border rounded-xl cursor-grab active:cursor-grabbing touch-none hide-scrollbar"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: "fit-content",
          }}
        >
          <img
            key={selectedPath}
            src={maps[selectedPath]}
            alt={mapLabels[selectedPath]}
            onLoad={handleImageLoad}
            className="w-[1500px] max-w-none select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-[75px] right-4 flex flex-col gap-2 z-50">
        <button
          onClick={zoomIn}
          className="bg-white shadow px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-100"
        >
          +
        </button>

        <button
          onClick={zoomOut}
          className="bg-white shadow px-3 py-1 rounded-lg text-lg font-bold hover:bg-gray-100"
        >
          −
        </button>
      </div>

      {/* Map Label */}
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow z-50 pointer-events-none">
        <p className="text-sm font-medium">
          {mapLabels[selectedPath]}
        </p>
      </div>

    </div>
  );
}

export default Map;
