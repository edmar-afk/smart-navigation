/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

import mapImg from "../../assets/images/map.png";
import registrarMap from "../../assets/images/registrarMap.png";
import libraryMap from "../../assets/images/libraryMap.png";
import clinicMap from "../../assets/images/clinicMap.png";

// Map location images
import canteen from "../../assets/images/paths/canteen.jpg";
import adminssionScholar from "../../assets/images/paths/admission-scholar.jpg";
import BitProgramChair from "../../assets/images/paths/bit-program-chair.jpg";
import cashiering from "../../assets/images/paths/cashiering.jpg";
import facultyroom from "../../assets/images/paths/facultyroom.jpg";
import library from "../../assets/images/paths/library.jpg";
import misOffice from "../../assets/images/paths/mis-office.jpg";
import qao from "../../assets/images/paths/qao.jpg";
import registrar from "../../assets/images/paths/registrar.jpg";
import researchExtension from "../../assets/images/paths/research-extension.jpg";
import schoolClinic from "../../assets/images/paths/school-clinic.jpg";
import { Eye } from "lucide-react";

function Map() {
  const containerRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  const [scale, setScale] = useState(1);
  const [selectedPath, setSelectedPath] = useState("default");
  const [activeImage, setActiveImage] = useState(null);

  const minScale = 0.9;
  const maxScale = 3;
  const step = 0.1;

  // ============================================================
  // MAP IMAGES
  // ============================================================

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

  // ============================================================
  // MAP IMAGE MARKERS
  // ============================================================
  // x = horizontal position (%)
  // y = vertical position (%)
  //
  // Adjust x and y to position each button on your map.
  //
  // 0%   = left / top
  // 50%  = center
  // 100% = right / bottom
  //
  // Each marker opens its corresponding image.
  // ============================================================

  const mapMarkers = {
    default: [
      {
        id: 1,
        name: "Canteen",
        image: canteen,
        x: 26.5,
        y: 73.5,
        width: 80,
        height: 60,
      },
      {
        id: 2,
        name: "Admission and Scholarship",
        image: adminssionScholar,
        x: 23.8,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 3,
        name: "BIT Program Chair",
        image: BitProgramChair,
        x: 80.5,
        y: 19,
        width: 78,
        height: 100,
      },
      {
        id: 4,
        name: "Cashiering",
        image: cashiering,
        x: 13.6,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 5,
        name: "Faculty Room",
        image: facultyroom,
        x: 69.7,
        y: 19,
        width: 80,
        height: 100,
      },
      {
        id: 6,
        name: "Library",
        image: library,
        x: 44,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 7,
        name: "MIS Office",
        image: misOffice,
        x: 30.5,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 8,
        name: "Quality Assurance Office",
        image: qao,
        x: 60.5,
        y: 19.5,
        width: 70,
        height: 78,
      },
      {
        id: 9,
        name: "Registrar",
        image: registrar,
        x: 20.4,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 10,
        name: "Research and Extension",
        image: researchExtension,
        x: 16,
        y: 71.5,
        width: 100,
        height: 90,
      },
      {
        id: 11,
        name: "School Clinic",
        image: schoolClinic,
        x: 17,
        y: 51,
        width: 50,
        height: 120,
      },
    ],

    clinic: [
      {
        id: 1,
        name: "Canteen",
        image: canteen,
        x: 26.5,
        y: 73.5,
        width: 80,
        height: 60,
      },
      {
        id: 2,
        name: "Admission and Scholarship",
        image: adminssionScholar,
        x: 23.8,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 3,
        name: "BIT Program Chair",
        image: BitProgramChair,
        x: 80.5,
        y: 19,
        width: 78,
        height: 100,
      },
      {
        id: 4,
        name: "Cashiering",
        image: cashiering,
        x: 13.6,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 5,
        name: "Faculty Room",
        image: facultyroom,
        x: 69.7,
        y: 19,
        width: 80,
        height: 100,
      },
      {
        id: 6,
        name: "Library",
        image: library,
        x: 44,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 7,
        name: "MIS Office",
        image: misOffice,
        x: 30.5,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 8,
        name: "Quality Assurance Office",
        image: qao,
        x: 60.5,
        y: 19.5,
        width: 70,
        height: 78,
      },
      {
        id: 9,
        name: "Registrar",
        image: registrar,
        x: 20.4,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 10,
        name: "Research and Extension",
        image: researchExtension,
        x: 16,
        y: 71.5,
        width: 100,
        height: 90,
      },
      {
        id: 11,
        name: "School Clinic",
        image: schoolClinic,
        x: 17,
        y: 51,
        width: 50,
        height: 120,
      },
    ],

    registrar: [
      {
        id: 1,
        name: "Canteen",
        image: canteen,
        x: 26.5,
        y: 73.5,
        width: 80,
        height: 60,
      },
      {
        id: 2,
        name: "Admission and Scholarship",
        image: adminssionScholar,
        x: 23.8,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 3,
        name: "BIT Program Chair",
        image: BitProgramChair,
        x: 80.5,
        y: 19,
        width: 78,
        height: 100,
      },
      {
        id: 4,
        name: "Cashiering",
        image: cashiering,
        x: 13.6,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 5,
        name: "Faculty Room",
        image: facultyroom,
        x: 69.7,
        y: 19,
        width: 80,
        height: 100,
      },
      {
        id: 6,
        name: "Library",
        image: library,
        x: 44,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 7,
        name: "MIS Office",
        image: misOffice,
        x: 30.5,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 8,
        name: "Quality Assurance Office",
        image: qao,
        x: 60.5,
        y: 19.5,
        width: 70,
        height: 78,
      },
      {
        id: 9,
        name: "Registrar",
        image: registrar,
        x: 20.4,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 10,
        name: "Research and Extension",
        image: researchExtension,
        x: 16,
        y: 71.5,
        width: 100,
        height: 90,
      },
      {
        id: 11,
        name: "School Clinic",
        image: schoolClinic,
        x: 17,
        y: 51,
        width: 50,
        height: 120,
      },
    ],

    library: [
      {
        id: 1,
        name: "Canteen",
        image: canteen,
        x: 26.5,
        y: 73.5,
        width: 80,
        height: 60,
      },
      {
        id: 2,
        name: "Admission and Scholarship",
        image: adminssionScholar,
        x: 23.8,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 3,
        name: "BIT Program Chair",
        image: BitProgramChair,
        x: 80.5,
        y: 19,
        width: 78,
        height: 100,
      },
      {
        id: 4,
        name: "Cashiering",
        image: cashiering,
        x: 13.6,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 5,
        name: "Faculty Room",
        image: facultyroom,
        x: 69.7,
        y: 19,
        width: 80,
        height: 100,
      },
      {
        id: 6,
        name: "Library",
        image: library,
        x: 44,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 7,
        name: "MIS Office",
        image: misOffice,
        x: 30.5,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 8,
        name: "Quality Assurance Office",
        image: qao,
        x: 60.5,
        y: 19.5,
        width: 70,
        height: 78,
      },
      {
        id: 9,
        name: "Registrar",
        image: registrar,
        x: 20.4,
        y: 51,
        width: 50,
        height: 120,
      },
      {
        id: 10,
        name: "Research and Extension",
        image: researchExtension,
        x: 16,
        y: 71.5,
        width: 100,
        height: 90,
      },
      {
        id: 11,
        name: "School Clinic",
        image: schoolClinic,
        x: 17,
        y: 51,
        width: 50,
        height: 120,
      },
    ],
  };

  // ============================================================
  // ZOOM
  // ============================================================

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + step, maxScale));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - step, minScale));
  };

  const selectPath = (path) => {
    setSelectedPath(path);
    setScale(1);
    setActiveImage(null);

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  // ============================================================
  // DRAG MAP
  // ============================================================

  const onPointerDown = (e) => {
    // Do not drag when clicking a map marker.
    if (e.target.closest(".map-marker")) return;

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

  // ============================================================
  // IMAGE MODAL
  // ============================================================

  const closeModal = () => {
    setActiveImage(null);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="w-full relative space-y-4">
      {/* PATH SELECTION */}

      <div className="flex flex-wrap gap-2">
        {Object.keys(maps).map((path) => (
          <button
            key={path}
            onClick={() => selectPath(path)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              selectedPath === path
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-blue-50"
            }`}
          >
            {path === "default" ? "Full Map" : `${mapLabels[path]}`}
          </button>
        ))}
      </div>

      {/* MAP CONTAINER */}

      <div
        ref={containerRef}
        className="
          relative
          h-[500px]
          overflow-auto
          border
          rounded-xl
          cursor-grab
          active:cursor-grabbing
          touch-pan-x
          touch-pan-y
          hide-scrollbar
        "
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* MAP WRAPPER */}
        {/* All markers are positioned relative to this wrapper. */}

        <div
          className="relative w-[1500px] max-w-none"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* MAP IMAGE */}

          <img
            src={maps[selectedPath]}
            alt={mapLabels[selectedPath]}
            className="block w-[1500px] h-auto select-none pointer-events-none"
            draggable={false}
          />

          {/* ================================================== */}
          {/* ABSOLUTE POSITIONED IMAGE MARKERS */}
          {/* ================================================== */}

          {(mapMarkers[selectedPath] || []).map((marker) => (
            <button
              key={marker.id}
              className="map-marker absolute z-20 flex items-center justify-center
    bg-white/10 border border-transparent rounded-md
    hover:bg-white/80 hover:border-blue-500
    transition-all duration-200 cursor-pointer group"
              style={{
                left: `${marker.x}%`,
                top: `${marker.y}%`,
                width: `${marker.width}px`,
                height: `${marker.height}px`,
                transform: "translate(-50%, -50%)",
              }}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setActiveImage(marker)}
              title={marker.name}
            >
              <Eye
                size={22}
                strokeWidth={2.5}
                className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ZOOM CONTROLS */}

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

      {/* MAP LABEL */}

      <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow z-30 pointer-events-none">
        <p className="text-sm font-medium">{mapLabels[selectedPath]}</p>
      </div>

      {/* ====================================================== */}
      {/* IMAGE MODAL */}
      {/* ====================================================== */}

      {activeImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/70
            flex
            items-center
            justify-center
            p-4
          "
          onClick={closeModal}
        >
          <div
            className="
              relative
              bg-white
              rounded-xl
              shadow-2xl
              w-full
              max-w-3xl
              max-h-[90vh]
              overflow-hidden
              flex
              flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}

            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold text-gray-800 text-base sm:text-lg">
                {activeImage.name}
              </h2>

              <button
                onClick={closeModal}
                className="
                  w-8
                  h-8
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  hover:bg-red-100
                  hover:text-red-600
                  text-gray-600
                  text-xl
                  transition
                "
              >
                ×
              </button>
            </div>

            {/* MODAL IMAGE */}

            <div className="p-3 overflow-auto">
              <img
                src={activeImage.image}
                alt={activeImage.name}
                className="
                  w-full
                  h-auto
                  max-h-[70vh]
                  object-contain
                  rounded-lg
                  mx-auto
                "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Map;
