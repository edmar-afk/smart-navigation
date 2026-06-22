import React, { useRef, useState } from "react";
import mapImg from "../../assets/images/map.png";

function Map() {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  const [scale, setScale] = useState(1);

  const minScale = 0.9;
  const maxScale = 3;
  const step = 0.1;

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + step, maxScale));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - step, minScale));
  };

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
    <div className="w-full relative">
      <div
        ref={containerRef}
        className="relative h-[500px] overflow-auto border cursor-grab active:cursor-grabbing touch-none hide-scrollbar"
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
            src={mapImg}
            alt="Office Map"
            className="w-[1500px] max-w-none select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Zoom controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-50">
        <button
          onClick={zoomIn}
          className="bg-white shadow px-3 py-1 rounded text-lg font-bold"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="bg-white shadow px-3 py-1 rounded text-lg font-bold"
        >
          −
        </button>
      </div>

      {/* Label */}
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow z-50 pointer-events-none">
        <p className="text-sm font-medium">Scrollable Map</p>
      </div>
    </div>
  );
}

export default Map;